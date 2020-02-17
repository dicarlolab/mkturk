"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const bigquery_1 = require("@google-cloud/bigquery");
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
exports.insertFixationData = functions.https.onCall((data) => {
    const bq = new bigquery_1.BigQuery();
    const dataset = bq.dataset('fixationdata');
    const table = dataset.table(data.agent);
    console.log("data received:", data);
    table.exists().then(async (existsData) => {
        const exists = existsData[0];
        if (exists) {
            delete data.agent;
            // data.timestamp = new Date(data.timestamp);
            data.timestamp = bq.timestamp(data.timestamp);
            console.log('data0', data);
            table.insert(data, {}, insertHandler);
        }
        else {
            const [newTable] = await dataset.createTable(data.agent, createTableOptions);
            console.log(`Table ${newTable.id} created with partitioning: `);
            console.log(newTable.metadata.timePartitioning);
            delete data.agent;
            // data.timestamp = new Date(data.timestamp);
            data.timestamp = bq.timestamp(data.timestamp);
            console.log('data1', data);
            newTable.insert(data, {}, insertHandler);
        }
    }).catch(error => {
        console.error("exists error", error);
    });
});
//# sourceMappingURL=index.js.map