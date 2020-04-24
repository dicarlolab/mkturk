import * as functions from 'firebase-functions';
import {BigQuery} from '@google-cloud/bigquery';
import * as DeviceDetector from 'device-detector-js';
import * as admin from 'firebase-admin';

admin.initializeApp();
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

function insertHandler(err: any, apiResp: any) {
  if (err) {
    console.log(err);
    if (err.name === 'PartialFailureError') {
      console.log(err);
    }
  }
}
interface fixationData {
  agent: string,
  timestamp: any,
  trial_num: number,
  num_eyes: number,
  left_x: number | null,
  left_y: number | null,
  left_aux_0: number | null,
  left_aux_1: number | null,
  right_x: number | null,
  right_y: number | null,
  right_aux_0: number | null,
  right_aux_1: number | null
};


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
export const bqInsertEyeData = functions.https.onCall((rows: fixationData[]) => {
  const bq = new BigQuery();
  const dataset = bq.dataset('eyedata');
  const table = dataset.table(rows[0].agent);
  console.log("rows received");

  table.exists().then(async (existsData) => {
    const exists = existsData[0];
    if (exists) {
      rows.forEach((row: any) => {
        console.log('row', row);
        delete row.agent;
        row.timestamp = new Date(row.timestamp);
      });
      console.log('existing table entire rows:', rows);
      table.insert(rows, {}, insertHandler);
      console.log('exists table insert');
    } else {
      const [newTable] = await dataset.createTable(rows[0].agent, createTableOptions);
      console.log(`Table ${newTable.id} created with partitioning: `);
      console.log(newTable.metadata.timePartitioning);
      rows.forEach((row: any) => {
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

export const bqQuery = functions.https.onCall(async (query: any) => {
  const bq = new BigQuery();
  const options = {
    query: query,
    location: 'US'
  };
  const [rows] = await bq.query(options);
  return rows;
});

export const listTables = functions.https.onCall(async (userDataset: string) => {
  const bq = new BigQuery();
  const dataset = bq.dataset(userDataset);
  const tables = await dataset.getTables();
  const arr: any = [];
  tables[0].forEach(table => {
    arr.push(table.metadata);
  });

  return arr;  
});

export const bqListDatasets = functions.https.onCall(async () => {
  const bq = new BigQuery();
  const [datasets] = await bq.getDatasets();
  const arr: any = [];
  datasets.forEach(dataset => {
    arr.push(dataset.id);
  })
  return arr;
});

export const detectDevice = functions.https.onCall((userAgent: any) => {
  const detector = new DeviceDetector();
  let device: any = detector.parse(userAgent);
  
  return new Promise((resolve, reject) => {
    try {
      resolve(device);
    } catch (e) {
      reject(e);
    }
  });
});

export const isLabMember = functions.https.onCall((idToken: string) => {

  admin.auth().verifyIdToken(idToken).then((decodedToken) => {
    return decodedToken.labMember;
  }).catch(e => {
    console.error('Error decoding idToken', e);
  });

});