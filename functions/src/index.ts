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

interface displayTimesData {
  agent: string,
  timestamp: any,
  trial_num: number,
  frame_num: Array<number>,
  t_desired: Array<number>,
  t_actual: Array<number>
};

interface MturkUserData {
  wid: string,
  token: string
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

export const isLabMember = functions.https.onCall(async (idToken: string) => {

  return admin.auth().verifyIdToken(idToken).then((decodedToken: any) => {
    console.log('isLabMember?', decodedToken.labMember);
    return decodedToken.labMember;
  }).catch((e: Error) => {
    console.error('Error decoding idToken', e);
  });

});

export const isMturkUser = functions.https.onCall(async (idToken: string) => {
  try {
    let decodedToken = await admin.auth().verifyIdToken(idToken);
    return decodedToken.mturkUser;
  } catch (error) {
    console.error('[isMturkUser] Error decoding idToken:', error);
  }
});

// export const decodeToken = functions.https.onCall(async (idToken: string) => {
//   try {
//     let decodedToken = await admin.auth().verifyIdToken(idToken);
//     if (decodedToken) {
//       return decodedToken;
//     } else {
//       return 0;
//     }
//   } catch (error) {
//     console.error('[decodeToken] Error decoding idToken:', error);
//   }

// });

export const processMturkUser = functions.https.onCall(async (data: MturkUserData) => {
  const firestore = admin.firestore();
  try {
    let decodedToken = await admin.auth().verifyIdToken(data.token);
    let userData = {
      workerId: data.wid,
      uid: decodedToken.uid,
      name: decodedToken.name,
      email: decodedToken.email,
    };
    let res = await firestore.collection('mturkusers').doc(data.wid).set(userData);
    if (res) {
      return { status: 'success' };
    } else {
      return { status: 'failed' };
    }

  } catch (error) {
    console.error('[processMturkUser] Error:', error);
    return { status: 'failed' };
  }

})

export const listAllUsers = functions.https.onCall(() => {
  return admin.auth().listUsers(1000).then((listUserResult: any) => {
    return listUserResult;
  }).catch((e: any) => {
    console.error('Error listing users', e);
  });
});

export const sayHello = functions.https.onRequest((req, res) => {
  res.send('Hello');
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

export const bqInsertDisplayTimes = functions.https.onCall((rows: displayTimesData[]) => {
  const bq = new BigQuery();
  const dataset = bq.dataset('displaytimedata');
  const table = dataset.table(rows[0].agent);

  table.exists().then(async (existsData) => {
    const exists = existsData[0];
    if (exists) {
      rows.forEach((row: any) => {
        delete row.agent;
        row.timestamp = new Date(row.timestamp);
      });
      table.insert(rows, {}, insertHandler);
      console.log('Rows inserted to existing table');
    } else {
      const [newTable] = await dataset.createTable(rows[0].agent, displayTimeTableOptions);
      console.log(`Table ${newTable.id} created with partitioning: `);
      console.log(newTable.metadata.timePartitioning);
      rows.forEach((row: any) => {
        delete row.agent;
        row.timestamp = new Date(row.timestamp);
      })
      newTable.insert(rows, {}, insertHandler);
      console.log('Row inserted to newly created table');
    }
  }).catch(error => {
    console.log('Exists function error:', error);
  });
});
