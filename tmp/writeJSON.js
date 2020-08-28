const fs = require('fs');

let row = {
  agent: 'AJ',
  timestamp: new Date('2020-08-24 17:00'),
  implant_cleaned: 'N/A',
  weight: 'N/A',
  reward: 0,
  supplement: 12.5,
  time_on: new Date('2020-08-24 15:00'),
  time_off: new Date('2020-08-24 17:00'),
  comments: '',
  initials: 'HC'
};

let file = [row];

let data = JSON.stringify(file, null, 1);
console.log(data);
fs.writeFileSync('test.json', data);