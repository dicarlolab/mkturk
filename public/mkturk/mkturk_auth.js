/**
 * mkturk_auth.js
 * Authentication procedure for MkTurk.
 * TODO: Change mkturk_installsettings.js based on authentication result
 */

import firebase from 'firebase/app';
import 'firebase/auth';

const auth = firebase.auth();
let mturkUserConfig = {};

if (window.location.search) {
  try {
    let mturkCfgPairStr = window.location.search.split('?')[1].split('&');
    mturkCfgPairStr.forEach(str => {
      let pair = str.split('=');
      if (pair[0] == 'AID') { // AID: assignmentId
        mturkUserConfig.aid = pair[1];
      } else if (pair[0] == 'HID') { // HID: hitId
        mturkUserConfig.hid = pair[1];
      } else if (pair[0] == 'WID') { // WID: workerId
        mturkUserConfig.wid = pair[1];
      } else if (pair[0] == 'TASK') { // TASK: name of task in params_storage
        mturkUserConfig.task = pair[1];
      }
    });
  } catch (e) {
    console.error('Error Parsing User Config:', e);
  }
}

auth.getRedirectResult().then((redirectResult) => {
  if (redirectResult.user) {
    // User just signed in
    ENV.ResearcherDisplayName = redirectResult.user.displayName;
    ENV.ResearcherEmail = result.user.email;
    ENV.ResearcherID = result.user.uid;

    console.log(`Sign-In Redirect Result, USER ${redirectResult.user.email} is signed in`);
    updateHeadsUpDisplay();
  } else if (auth.currentUser) {
    // User already signed in.
    ENV.ResearcherDisplayName = auth.currentUser.displayName;
    ENV.ResearcherEmail = auth.currentUser.email;
    ENV.ResearcherID = auth.currentUser.uid;

    console.log(`Sign-In Redirect Result, USER ${auth.currentUser.email} is signed in`);
    updateHeadsUpDisplay();
  } else {
    // User not yet authenticated
    console.log('User Not Yet Authenticated');
    let provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/user.emails.read');
    provider.addScope('https://www.googleapis.com/auth/userinfo.email');
    auth.signInWithRedirect(provider);    
  }
}).catch((authError) => {
  console.error(`[Authentication Error]: ${authError}`);
});


auth.onAuthStateChanged((user) => {
  if (user && Object.keys(mturkUserConfig).length) {
    user.getIdToken(true)
      .then(async (idToken) => {
        mturkUserConfig.token = idToken;
        console.log(`Auth Token: ${idToken}`);
        processMturkUser(mturkUserConfig).then(async (res) => {
          if (res.data.message == 'assignment entry already exists') {
            console.log('window will close here');
            //window.close();
          }
          if (res.data.status == 'success') {
            ENV.MTurkWorkerId = mturkUserConfig.wid;
          }
        }).catch((error) => {
          console.error(`[processMturkUser] Error: ${error}`);
        });
      });
  }
});

