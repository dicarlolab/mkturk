"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const bigquery_1 = require("@google-cloud/bigquery");
const DeviceDetector = require("device-detector-js");
const admin = require("firebase-admin");
admin.initializeApp();
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
function insertHandler(err, apiResp) {
    if (err) {
        console.log(err);
        if (err.name === 'PartialFailureError') {
            console.log(err);
        }
    }
}
;
;
const schema = {
    "fields": [
        {
            "name": "timestamp",
            "type": "TIMESTAMP",
            "mode": "REQUIRED"
        },
        {
            "name": "trial_num",
            "type": "INTEGER",
            "mode": "REQUIRED"
        },
        {
            "name": "num_eyes",
            "type": "INTEGER",
            "mode": "REQUIRED"
        },
        {
            "name": "left_x",
            "type": "FLOAT",
            "mode": "NULLABLE"
        },
        {
            "name": "left_y",
            "type": "FLOAT"
        },
        {
            "name": "left_aux_0",
            "type": "FLOAT"
        },
        {
            "name": "left_aux_1",
            "type": "FLOAT"
        },
        {
            "name": "right_x",
            "type": "FLOAT"
        },
        {
            "name": "right_y",
            "type": "FLOAT"
        },
        {
            "name": "right_aux_0",
            "type": "FLOAT"
        },
        {
            "name": "right_aux_1",
            "type": "FLOAT"
        }
    ]
};
const createTableOptions = {
    "schema": schema,
    "timePartitioning": {
        "type": "DAY",
        "field": "timestamp"
    }
};
/* caller must guarantee that all rows belong to the same agent */
exports.bqInsertEyeData = functions.https.onCall((rows) => {
    const bq = new bigquery_1.BigQuery();
    const dataset = bq.dataset('eyedata');
    const table = dataset.table(rows[0].agent);
    console.log("rows received");
    table.exists().then(async (existsData) => {
        const exists = existsData[0];
        if (exists) {
            rows.forEach((row) => {
                console.log('row', row);
                delete row.agent;
                row.timestamp = new Date(row.timestamp);
            });
            console.log('existing table entire rows:', rows);
            table.insert(rows, {}, insertHandler);
            console.log('exists table insert');
        }
        else {
            const [newTable] = await dataset.createTable(rows[0].agent, createTableOptions);
            console.log(`Table ${newTable.id} created with partitioning: `);
            console.log(newTable.metadata.timePartitioning);
            rows.forEach((row) => {
                console.log('row', row);
                delete row.agent;
                row.timestamp = new Date(row.timestamp);
            });
            console.log('new table entire rows:', rows);
            newTable.insert(rows, {}, insertHandler);
            console.log('new table insert');
        }
    }).catch(error => {
        console.error("Exists function error:", error);
    });
});
exports.bqQuery = functions.https.onCall(async (query) => {
    const bq = new bigquery_1.BigQuery();
    const options = {
        query: query,
        location: 'US'
    };
    const [rows] = await bq.query(options);
    return rows;
});
exports.listTables = functions.https.onCall(async (userDataset) => {
    const bq = new bigquery_1.BigQuery();
    const dataset = bq.dataset(userDataset);
    const tables = await dataset.getTables();
    const arr = [];
    tables[0].forEach(table => {
        arr.push(table.metadata);
    });
    return arr;
});
exports.bqListDatasets = functions.https.onCall(async () => {
    const bq = new bigquery_1.BigQuery();
    const [datasets] = await bq.getDatasets();
    const arr = [];
    datasets.forEach(dataset => {
        arr.push(dataset.id);
    });
    return arr;
});
exports.detectDevice = functions.https.onCall((userAgent) => {
    const detector = new DeviceDetector();
    let device = detector.parse(userAgent);
    return new Promise((resolve, reject) => {
        try {
            resolve(device);
        }
        catch (e) {
            reject(e);
        }
    });
});
exports.isLabMember = functions.https.onCall((idToken) => {
    return admin.auth().verifyIdToken(idToken).then((decodedToken) => {
        console.log('isLabMember?', decodedToken.labMember);
        return decodedToken.labMember;
    }).catch(e => {
        console.error('Error decoding idToken', e);
    });
});
exports.listAllUsers = functions.https.onCall(() => {
    return admin.auth().listUsers(1000).then(listUserResult => {
        return listUserResult;
    }).catch(e => {
        console.error('Error listing users', e);
    });
});
const displayTimeSchema = {
    'fields': [
        {
            'name': 'timestamp',
            'type': 'TIMESTAMP',
            'mode': 'REQUIRED'
        },
        {
            'name': 'trial_num',
            'type': 'INTEGER',
            'mode': 'REQUIRED'
        },
        {
            'name': 'frame_num',
            'type': 'INTEGER',
            'mode': 'REPEATED'
        },
        {
            'name': 't_desired',
            'type': 'FLOAT',
            'mode': 'REPEATED'
        },
        {
            'name': 't_actual',
            'type': 'FLOAT',
            'mode': 'REPEATED'
        }
    ]
};
const displayTimeTableOptions = {
    'schema': displayTimeSchema,
    'timePartitioning': {
        'type': 'DAY',
        'field': 'timestamp'
    }
};
exports.bqInsertDisplayTimes = functions.https.onCall((rows) => {
    const bq = new bigquery_1.BigQuery();
    const dataset = bq.dataset('displaytimedata');
    const table = dataset.table(rows[0].agent);
    table.exists().then(async (existsData) => {
        const exists = existsData[0];
        if (exists) {
            rows.forEach((row) => {
                delete row.agent;
                row.timestamp = new Date(row.timestamp);
            });
            table.insert(rows, {}, insertHandler);
            console.log('Rows inserted to existing table');
        }
        else {
            const [newTable] = await dataset.createTable(rows[0].agent, displayTimeTableOptions);
            console.log(`Table ${newTable.id} created with partitioning: `);
            console.log(newTable.metadata.timePartitioning);
            rows.forEach((row) => {
                delete row.agent;
                row.timestamp = new Date(row.timestamp);
            });
            newTable.insert(rows, {}, insertHandler);
            console.log('Row inserted to newly created table');
        }
    }).catch(error => {
        console.log('Exists function error:', error);
    });
});
//# sourceMappingURL=index.js.map