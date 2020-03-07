"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const bigquery_1 = require("@google-cloud/bigquery");
const DeviceDetector = require("device-detector-js");
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
// export const insertFixationRow = functions.https.onCall((data: fixationData) => {
//   const bq = new BigQuery();
//   const dataset = bq.dataset('fixationdata');
//   const table = dataset.table(data.agent);
//   console.log("data received:", data);
//   table.exists().then(async (existsData) => {
//     const exists = existsData[0];
//     if (exists) {
//       delete data.agent;
//       // data.timestamp = new Date(data.timestamp);
//       data.timestamp = bq.timestamp(data.timestamp);
//       console.log('data0', data);
//       table.insert(data, {}, insertHandler);
//     } else {
//       const [newTable] = await dataset.createTable(data.agent, createTableOptions);
//       console.log(`Table ${newTable.id} created with partitioning: `);
//       console.log(newTable.metadata.timePartitioning);
//       delete data.agent;
//       // data.timestamp = new Date(data.timestamp);
//       data.timestamp = bq.timestamp(data.timestamp);
//       console.log('data1', data);
//       newTable.insert(data, {}, insertHandler);
//     }
//   }).catch(error => {
//     console.error("exists error", error);
//   });
// });
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
    return device;
});
//# sourceMappingURL=index.js.map