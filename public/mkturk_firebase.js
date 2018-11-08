 //================== AUTHENTICATE GOOGLE ==================//
 /**
   * Function called when clicking the Login/Logout button.
   */
  // [SIGN-IN START buttoncallback]
  async function firebaseToggleSignIn() {
    if (!firebase.auth().currentUser){
      var provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

      // [START signin]
      await firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        var user = result.user; // The signed-in user info.
        ENV.ResearcherDisplayName = result.user.displayName;
        ENV.ResearcherEmail = result.user.email;
        ENV.ResearcherLastName = result.additionalUserInfo.profile.family_name
        ENV.ResearcherID = result.additionalUserInfo.profile.id
          
        console.log('USER ' + user.email + ' signed in')
        updateHeadsUpDisplay()
      }).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
      });
      // [END signin]
    } else {
      await firebase.auth().signOut();
      console.log('USER ' + user.email + ' signed out')
    }
    return
  } //toggleSignIn
  // [SIGN-IN END buttoncallback]


  // [START authstatelistener]
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var uid = user.uid;
      var providerData = user.providerData;
    } else {
      // User is signed out.
    }
  });
  // [END authstatelistener]
//=============== (end) AUTHENTICATE GOOGLE ===============//