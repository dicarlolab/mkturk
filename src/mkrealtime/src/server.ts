import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyA0fbv2VqE-AfF6V_nxSSXCEqaTlBlZnTI",
  authDomain: "sandbox-ce2c5.firebaseapp.com",
  databaseURL: "https://sandbox-ce2c5.firebaseio.com",
  projectId: "sandbox-ce2c5",
  storageBucket: "sandbox-ce2c5.appspot.com",
  messagingSenderId: "1003719887944",
  clientId: "1003719887944-rlc06cjecqrp9fgvmvo56vqop1otm9ht.apps.googleusercontent.com"
};
firebase.initializeApp(firebaseConfig);

const rtdb = firebase.database();

let agent = 'Sausage';
let agentRef = rtdb.ref('agents/' + agent);

let genBtn = document.querySelector('#gen-btn') as HTMLButtonElement;

function getRandomInt(max: number) {
  return Math.floor(Math.random() * Math.floor(max));
}

function* sendData() {
  
  while (true) {
    let data = {
      x: getRandomInt(255),
      y: getRandomInt(255)
    };

    yield data;
  }
}

const gen = sendData();

genBtn.addEventListener('click', evt => {
  console.log(gen.next().value);
});

// agentRef.on('value', snapshot => {
//   console.log(snapshot.val());
//   let intervalID;
//   if (snapshot.val() == 'active') {
//     console.log('nay');
//     intervalID = setInterval(sayHello, 1000);
//   } else if (snapshot.val() == 'inactive') {
//     console.log('what');
//     clearInterval(intervalID);
//   }
// });


// agentRef.on('value', async snapshot => {
//   console.log(snapshot.val());
//   do {
//     await rtdb.ref('data/' + agent).set({
//       x: getRandomInt(255),
//       y: getRandomInt(255)
//     }).catch(error => {
//       console.error('ERROR:', error);
//     });
//   } while(snapshot.val() == 'active')
//   rtdb.ref('data/' + agent).onDisconnect().
// });