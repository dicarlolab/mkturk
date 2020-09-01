const fs = require('fs');

let agent = 'Bloo';
let oldPath = 'oldDailyFile/' + agent + '.json';
let raw = fs.readFileSync(oldPath);
let data = JSON.parse(raw);

let arr = [];

for (let i = 0; i < data.fluid_values.length; i++) {

  let ref = new Date(data.fluid_dates[i]);
  if (ref.getMonth() != 5) {
    let row = {
      agent: agent,
      timestamp: data.fluid_dates[i],
      weight: '',
      implant_cleaned: 'N/A',
      reward: data.fluid_values[i],
      supplement: 0,
      time_on: '',
      time_off: '',
      comments: data.fluid_notes[i],
      initials: ''
    };
    arr.push(row);
  }
}

for (let i = 0; i < data.weight_values.length; i++) {
  let row = {
    agent: agent,
    timestamp: data.weight_dates[i],
    weight: data.weight_values[i],
    implant_cleaned: 'N/A',
    reward: '',
    supplement: '',
    time_on: '',
    time_off: '',
    comments: data.weight_notes[i],
    initials: ''
  };
  arr.push(row);
}

function compare(a, b) {
  let timestampA = a.timestamp;
  let timestampB = b.timestamp;

  if (timestampA > timestampB) {
    return 1;
  } else if (timestampB > timestampA) {
    return -1;
  }
}

arr = arr.sort(compare);

let outfile = JSON.stringify(arr, null, 1);
let newPath = 'newDailyFile/' + agent + '.json';
fs.writeFileSync(newPath, outfile);