var functions = firebase.functions();
let bqInsertEyeData = functions.httpsCallable('bqInsertEyeData');
let bqQuery = functions.httpsCallable('bqQuery');
let listTables = functions.httpsCallable('listTables');
// let fixData = [{
//   agent: "Eliaso",
//   timestamp: new Date('2020-02-14').toJSON(),  
//   num_eyes: 0,
//   left_x: 0.0,
//   left_y: 0.0,
//   left_aux_0: 0.0,
//   left_aux_1: 0.0,
//   right_x: 0.0,
//   right_y: 0.0,
//   right_aux_0: 0.0,
//   right_aux_1: 0.0
// },
// {
//   agent: "Eliaso",
//   timestamp: new Date(Date.now()).toJSON(),  
//   num_eyes: 1,
//   left_x: 0.1,
//   left_y: 0.0,
//   left_aux_0: 0.0,
//   left_aux_1: 0.0,
//   right_x: 0.0,
//   right_y: 0.0,
//   right_aux_0: 0.0,
//   right_aux_1: 0.0
// }];

// bqInsertEyeData(fixData);

let dt = new Date('2020-02-14');
let dt2 = new Date(dt);
dt2.setDate(dt2.getDate() + 4);
dt = dt.toJSON().split('T')[0];
dt2 = dt2.toJSON().split('T')[0];

let tb = 'Eliaso';
let str = `SELECT *
          FROM \`sandbox-ce2c5.fixationdata.${tb}\`
          WHERE timestamp BETWEEN '${dt}' AND '${dt2}'
          ORDER BY timestamp ASC`;

console.log(str);

// bqQuery(str).then(ret => {
//   console.log('return query', ret);
// }).catch(error => {
//   console.error('error', error);
// })

// listTables('fixationdata').then(tables => {
//   console.log('tables', tables);
// }).catch(error => {
//   console.error('error', error);
// })


async function listT() {
  let returned = await listTables('fixationdata');
  console.log(returned);
}

listT();