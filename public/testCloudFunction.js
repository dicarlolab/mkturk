var functions = firebase.functions();
let insertFixationData = functions.httpsCallable('insertFixationData');

let fixData = {
  agent: "TEST2222",
  timestamp: new Date('2020-02-14').toJSON(),  
  num_eyes: 0,
  left_x: 0.0,
  left_y: 0.0,
  left_aux_0: 0.0,
  left_aux_1: 0.0,
  right_x: 0.0,
  right_y: 0.0,
  right_aux_0: 0.0,
  right_aux_1: 0.0
};

async function getIn(fixData) {
  let retval = await insertFixationData(fixData);
}

getIn(fixData);


