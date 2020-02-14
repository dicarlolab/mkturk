import * as functions from 'firebase-functions';
import {BigQuery} from '@google-cloud/bigquery';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

export const insertFixationData = functions.https.onCall((data: any) => {
  const bq = new BigQuery();
  const dataset = bq.dataset('fixationdata');
  const table = dataset.table(data.agent);

  data.timestamp = bq.timestamp(new Date(data.timestamp));

  table.insert(data);

});
