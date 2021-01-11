"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bqInsertDisplayTimes = exports.sayHello = exports.listAllUsers = exports.copyParamFile = exports.processMturkUser = exports.isMturkUser = exports.isLabMember = exports.detectDevice = exports.bqListDatasets = exports.listTables = exports.bqQuery = exports.bqInsertEyeData = void 0;
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
exports.isLabMember = functions.https.onCall(async (idToken) => {
    return admin.auth().verifyIdToken(idToken).then((decodedToken) => {
        console.log('isLabMember?', decodedToken.labMember);
        return decodedToken.labMember;
    }).catch((e) => {
        console.error('Error decoding idToken', e);
    });
});
exports.isMturkUser = functions.https.onCall(async (idToken) => {
    try {
        let decodedToken = await admin.auth().verifyIdToken(idToken);
        return decodedToken.mturkUser;
    }
    catch (error) {
        console.error('[isMturkUser] Error decoding idToken:', error);
    }
});
exports.processMturkUser = functions.https.onCall(async (data) => {
    class ProcessMTurkUserError extends Error {
        constructor(message) {
            super(message);
            // see: typescriptlang.org/docs/handbook/release-notes/typescript-2-2.html
            Object.setPrototypeOf(this, new.target.prototype); // restore prototype chain
            this.name = ProcessMTurkUserError.name; // stack traces display correctly now 
        }
    }
    const firestore = admin.firestore();
    const bucket = admin.storage().bucket('mkturk-mturk');
    let decodedToken;
    try {
        decodedToken = await admin.auth()
            .verifyIdToken(data.token)
            .then(tkn => {
            console.log('[verifyIdToken] Decode Success');
            return tkn;
        });
    }
    catch (e) {
        console.error('[verifyIdToken] Decode Error:', e);
        return { status: 'error', message: `[verifyIdToken] Decode Error: ${e}` };
    }
    let mturkUsersQuerySnapshot = await firestore.collection('mturkusers')
        .where('uid', '==', decodedToken.uid)
        .get();
    // user creation OR existing user update
    try {
        if (mturkUsersQuerySnapshot.empty) { // new user
            admin.auth()
                .setCustomUserClaims(decodedToken.uid, { wid: data.wid })
                .then(() => console.log('[setCustomUserClaims] Add Claim (wid) Success'))
                .catch(e => {
                console.error('[setCustomUserClaims] Add Claim (wid) Error:', e);
                throw new ProcessMTurkUserError(`[setCustomUserClaims] Add Claim (wid) Error: ${e}`);
            });
            let assignmentEntry = {
                assignmentId: data.aid,
                hitId: data.hid,
                task: data.task,
                startTime: admin.firestore.Timestamp.fromDate(new Date())
            };
            let userData = {
                workerId: data.wid,
                uid: decodedToken.uid,
                assignmentList: [assignmentEntry]
            };
            firestore.collection('mturkusers')
                .doc(data.wid)
                .set(userData)
                .then(() => console.log('[mturkusers] New User Created'))
                .catch(e => {
                console.error('[mturkusers] User Creation Error:', e);
                throw new ProcessMTurkUserError(`[mturkusers] User Creation Error: ${e}`);
            });
        }
        else { // existing user
            let docs = mturkUsersQuerySnapshot.docs;
            if (docs.length == 1 && docs[0].data().workerId == decodedToken.wid) {
                let assignmentEntry = {
                    assignmentId: data.aid,
                    hitId: data.hid,
                    task: data.task,
                    startTime: admin.firestore.Timestamp.fromDate(new Date())
                };
                let updatedUserEntry = docs[0].data();
                updatedUserEntry.assignmentList.push(assignmentEntry);
                // docs[0].data().assignmentList.push(assignmentEntry);
                // console.log('assignmentEntry:', assignmentEntry);
                // console.log('assignmentList:', docs[0].data().assignmentList);
                // console.log('docs[0].data():', docs[0].data());
                firestore.collection('mturkusers')
                    .doc(decodedToken.wid)
                    .set(updatedUserEntry)
                    .then(() => console.log('[mturkusers] Existing User Entry Updated'))
                    .catch(e => {
                    console.error('[mturkusers] Existing User Entry Update Error:', e);
                    throw new ProcessMTurkUserError(`[mturkusers] Existing User Entry Update Error: ${e}`);
                });
            }
            else {
                throw new ProcessMTurkUserError(`[mturkusers] Multiple User Error: uid=${decodedToken.uid}, wid=${decodedToken.wid}`);
            }
        }
    }
    catch (error) {
        return { status: 'error', message: error };
    }
    const mturkhit = {
        hitId: data.hid,
        task: data.task
    };
    // register HIT data & setup ${wid}_params.json
    try {
        firestore.collection('mturkhits')
            .doc(data.hid)
            .set(mturkhit)
            .then(() => console.log('[mturkhits] Registration Success'))
            .catch(e => {
            console.error('[mturkhits] Registration Error:', e);
            throw new ProcessMTurkUserError(`[mturkhits] Registration Error: ${e}`);
        });
        const tmpPath = await bucket.file('mkturkfiles/menu.json')
            .download()
            .then(value => {
            let menuFile = JSON.parse(value[0].toString('utf8'));
            return menuFile[data.task];
        })
            .catch(e => {
            console.error('[menu.json] Find Task Error:', e);
            throw new ProcessMTurkUserError(`[menu.json] Find Task Error: ${e}`);
        });
        const paramFile = await bucket.file(tmpPath)
            .download()
            .then(value => {
            let tmp = JSON.parse(value[0].toString('utf8'));
            tmp.Agent = data.wid;
            return tmp;
        })
            .catch(e => {
            console.error('[paramfile] Find Param File Error:', e);
            throw new ProcessMTurkUserError(`[paramfile] Find Param File Error: ${e}`);
        });
        const destArr = [
            `mkturkfiles/parameterfiles/subjects/${data.wid}_params.json`,
            `user_files/${data.wid}/${data.wid}_params.json`
        ];
        destArr.forEach(async (dest) => {
            bucket.file(dest)
                .save(JSON.stringify(paramFile, null, 2))
                .then(() => console.log(`[mturkuser=${data.wid}] Params Copy Success`))
                .catch(e => {
                console.error(`[mturkuser=${data.wid}] Params Copy Error: ${e}`);
                throw new ProcessMTurkUserError(`[mturkuser=${data.wid}] Params Copy Error: ${e}`);
            });
        });
    }
    catch (error) {
        return { status: 'error', message: error };
    }
    return { status: 'success', message: '' };
});
exports.copyParamFile = functions.https.onCall(async () => {
    const storage = admin.storage().bucket('mkturk-mturk');
    const file = storage.file('mkturkfiles/parameterfiles/params_storage/m2s_wrench_camel.json');
    await file.copy('mkturkfiles/parameterfiles/subjects/Hectoro_params.json');
    const fileData = await file.download().then(data => {
        return JSON.parse(data[0].toString('utf8'));
    });
    return fileData;
});
exports.listAllUsers = functions.https.onCall(() => {
    return admin.auth().listUsers(1000).then((listUserResult) => {
        return listUserResult;
    }).catch((e) => {
        console.error('Error listing users', e);
    });
});
exports.sayHello = functions.https.onRequest((req, res) => {
    let aid, hid, wid;
    aid = req.query.aid;
    hid = req.query.hid;
    wid = req.query.wid;
    res.send({ aid: aid, hid: hid, wid: wid });
    res.json({ aid: aid, hid: hid, wid: wid });
    return;
});
// export const verifyMturkSubmission = functions.https.onRequest(async (req, res) => {
//   const firestore = admin.firestore();
//   let aid, hid, wid, submitCode;
//   try {
//     aid = req.query.aid;
//     hid = req.query.hid;
//     wid = req.query.wid;
//     submitCode = req.query.submitCode;
//   } catch (error) {
//     console.error('[req.query] Error Assigning Variables:', error);
//     res.send(
//       {
//         status: 'error',
//         message: `[req.query] Error Assigning Variables: ${error}`
//       }
//     );
//     return;
//   }
//   let userSnapshot = await firestore.collection('mturkusers')
//     .where('wid', '==', wid)
//     .get();
//   if (userSnapshot.empty) {
//     res.send(
//       {
//         status: 'error',
//         message: `[mturkusers] User ${wid} does not exist in mturkusers`
//       }
//     );
//     return;
//   } else {
//     let docs = userSnapshot.docs;
//     if (docs.length == 1 && docs[0].data().workerId == wid) {
//       let assignmentList = docs[0].data().assignmentList;
//       let lastEntry = assignmentList[assignmentList.length - 1];
//       if (lastEntry.aid != aid) {
//         res.send()
//       } 
//     }
//   }
// })
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