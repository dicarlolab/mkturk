const fs = require('fs');

let agent = 'West';
let oldPath = 'newDailyFile/' + agent + '.json';
let raw = fs.readFileSync(oldPath);
let data = JSON.parse(raw);

// console.log(data);

let newObj = {
  timestamp: [],
  weight: [],
  implant_cleaned: [],
  reward: [],
  supplement: [],
  time_on: [],
  time_off: [],
  comments: [],
  initials: []
};

for (let row of data) {
  newObj.timestamp.push(row.timestamp);
  newObj.weight.push(row.weight);
  newObj.implant_cleaned.push('');
  newObj.reward.push(row.reward);
  newObj.supplement.push(row.supplement);
  newObj.time_on.push(row.time_on);
  newObj.time_off.push(row.time_off);
  newObj.comments.push(row.comments);
  newObj.initials.push(row.initials);
}

console.log('agent', agent);
console.log('timestamp length', newObj.timestamp.length);
console.log('weight length', newObj.weight.length);
console.log('implant_cleaned length', newObj.implant_cleaned.length);
console.log('reward length', newObj.reward.length);
console.log('supplement length', newObj.supplement.length);
console.log('time_on length', newObj.time_on.length);
console.log('time_off length', newObj.time_off.length);
console.log('comments length', newObj.comments.length);
console.log('initials length', newObj.initials.length);

let outfile = JSON.stringify(newObj, null, 1);
let newPath = 'newestDailyFile/' + agent + '.json';
fs.writeFileSync(newPath, outfile);



// let outfile = JSON.stringify(arr, null, 1);
// let newPath = 'newDailyFile/' + agent + '.json';
// fs.writeFileSync(newPath, outfile);





// let arr = [];

// for (let i = 0; i < data.fluid_values.length; i++) {

//   let ref = new Date(data.fluid_dates[i]);
//   if (ref.getMonth() != 5) {
//     let row = {
//       agent: agent,
//       timestamp: data.fluid_dates[i],
//       weight: '',
//       implant_cleaned: 'N/A',
//       reward: data.fluid_values[i],
//       supplement: 0,
//       time_on: '',
//       time_off: '',
//       comments: data.fluid_notes[i],
//       initials: ''
//     };
//     arr.push(row);
//   }
// }

// for (let i = 0; i < data.weight_values.length; i++) {
//   let row = {
//     agent: agent,
//     timestamp: data.weight_dates[i],
//     weight: data.weight_values[i],
//     implant_cleaned: 'N/A',
//     reward: '',
//     supplement: '',
//     time_on: '',
//     time_off: '',
//     comments: data.weight_notes[i],
//     initials: ''
//   };
//   arr.push(row);
// }

// function compare(a, b) {
//   let timestampA = a.timestamp;
//   let timestampB = b.timestamp;

//   if (timestampA > timestampB) {
//     return 1;
//   } else if (timestampB > timestampA) {
//     return -1;
//   }
// }

// arr = arr.sort(compare);

// let outfile = JSON.stringify(arr, null, 1);
// let newPath = 'newDailyFile/' + agent + '.json';
// fs.writeFileSync(newPath, outfile);