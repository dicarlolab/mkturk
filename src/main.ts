import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA0fbv2VqE-AfF6V_nxSSXCEqaTlBlZnTI",
  authDomain: "sandbox-ce2c5.firebaseapp.com",
  databaseURL: "https://sandbox-ce2c5.firebaseio.com",
  projectId: "sandbox-ce2c5",
  storageBucket: "sandbox-ce2c5.appspot.com",
  messagingSenderId: "1003719887944"
};
firebase.initializeApp(firebaseConfig);

import { Mkquery } from "./mkquery";
import { Mkthree } from "./mkthree";
import { Mkfinder } from "./mkfinder";

let provider = new firebase.auth.GoogleAuthProvider();
provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
firebase.auth().getRedirectResult().then(result => {
  if (result.user) {
    console.log("Sign-In Redirect Result, USER:", result.user.email, "is signed in");
  } else if (firebase.auth().currentUser) {
    console.log("Sign-In Redirect Result, USER:", "is signed in");
  } else {
    firebase.auth().signInWithRedirect(provider);
  }
});


const db = firebase.firestore();
const storage = firebase.storage();
const storageRef = storage.ref(); 
const rootRef = storageRef.child("mkturkfiles/");


let fileRef = storageRef.child("mkturkfiles/parameterfiles/subjects/AJ_params.txt");

let mkq = new Mkquery();


// let m = new Mkquery();
// let retval = m.mkquery([{field: "CurrentDate", keyword: "4/3/2018; +-5"}]);
// retval = "db.collection('mkturkdata')" + retval;
// console.log("retval:", retval);

// let query = eval(retval);
// console.log("query", query);

let mkf = new Mkfinder();
let mkt = new Mkthree();


/* Quick Links */
let marmosetsLink = 
    document.querySelector("#quick-link-marmosets") as HTMLElement;
let mkturkdataLink =
    document.querySelector("#quick-link-mkturkdata") as HTMLElement;
let mkturkfilesLink =
    document.querySelector("#quick-link-mkturkfiles") as HTMLElement;

marmosetsLink.addEventListener("click", (ev: Event) => {

});




// marmosetsLink?.addEventListener("click", async event => {
//   event.preventDefault();

//   async function loadData(doc: any, arr: any[]) {
//     await arr.push(doc.data());
//   }

//   let arr = new Array();

//   await query.get().then(async (snapshot: any) => {
//     if (!query.empty) {
//       let promises = snapshot.docs.map((doc: any) => loadData(doc, arr));
//       await Promise.all(promises);
//     }
//   });

//   console.log("arr:", arr);

//   mkf.displayFirestoreTable(arr, "mkturkdata");

//   console.log("marmosets quick link");
// });

// mkturkdataLink?.addEventListener("click", event => {
//   event.preventDefault();
//   event.stopPropagation();

//   console.log("mkturkdata quick link");
// });

// mkturkfilesLink?.addEventListener("click", event => {
//   event.preventDefault();
//   event.stopPropagation();

//   console.log("mkturkfiles quick link");
// });

/* Mkthree tester */
// let mt = new Mkthree();
// let canvas = document.querySelector("#webgl-canvas") as HTMLCanvasElement;
// async function runner() {
//   await mt.displayMesh("mkturkfiles/scenebags/objectome3d/face/marmoset.glb", canvas);
// }
// runner();

/* Mkeditor Tester */

// let mkeditor = new Mkeditor();
// const marm = db.collection("mkturkdata").doc("2018-04-03T20:26:45_Barb_images").get().then(doc => {
//   let ret = doc.data();

//   mkeditor.displayDoc(mkeditor.foo(ret));

//   // if (ret) {
//   //   console.log("ret", ret);
//   //   console.log(ret.birthdate.toString());
//   //   console.log(ret.birthdate.toDate());

//   //   try {
//   //     console.log(ret.colony.toDate());
//   //   } catch (e) {
//   //     console.log("Not Timestamp Object", e);
//   //   }
//   // }
// });

// let dt_bloodDNA = new firebase.firestore.Timestamp(1574456636, 147000000);
// console.log(dt_bloodDNA.toDate());

// let dt_semiannual = new firebase.firestore.Timestamp(1574456656, 748000000)
// console.log(dt_semiannual.toDate());


let qryLocSelc = document.querySelector<HTMLSelectElement>("#qry-loc-selector");
qryLocSelc!.addEventListener("change", ev => {

  let fs = document.querySelector("#field-selector") as HTMLSelectElement;
  let ki0 = document.querySelector("#keyword-input-0") as HTMLInputElement;
  let ki1 = document.querySelector("#keyword-input-1") as HTMLInputElement;
  let ki2 = document.querySelector("#keyword-input-2") as HTMLInputElement;
  let goBtn = document.querySelector("#go-btn") as HTMLButtonElement;
  switch(qryLocSelc?.value) {
    case "marmosets":
      
      fs.style.visibility = "visible";
      ki0.style.visibility = "visible";
      ki1.style.visibility = "hidden";
      ki2.style.visibility = "hidden";
      goBtn.style.visibility = "visible";

      resetPlaceholder();
      removeElementsByClassName("field-options");

      let nameMarmosets = document.createElement("option");
      nameMarmosets.setAttribute("class", "field-options");
      nameMarmosets.setAttribute("value", "name");
      nameMarmosets.setAttribute("selected", "true");
      nameMarmosets.textContent = "name";

      let sexMarmosets = document.createElement("option");
      sexMarmosets.setAttribute("class", "field-options");
      sexMarmosets.setAttribute("value", "sex");
      sexMarmosets.textContent = "sex";

      let rfidMarmosets = document.createElement("option");
      rfidMarmosets.setAttribute("class", "field-options");
      rfidMarmosets.setAttribute("value", "rfid");
      rfidMarmosets.textContent = "RFID";

      let breedingMarmosets = document.createElement("option");
      breedingMarmosets.setAttribute("class", "field-options");
      breedingMarmosets.setAttribute("value", "breeding");
      breedingMarmosets.textContent = "breeding";

      let birthdateMarmosets = document.createElement("option");
      birthdateMarmosets.setAttribute("class", "field-options");
      birthdateMarmosets.setAttribute("value", "birthdate");
      birthdateMarmosets.textContent = "birthdate";

      let fieldSelectorMarmosets
        = document.querySelector("#field-selector") as HTMLSelectElement;
      fieldSelectorMarmosets.appendChild(nameMarmosets);
      fieldSelectorMarmosets.appendChild(sexMarmosets);
      fieldSelectorMarmosets.appendChild(rfidMarmosets);
      fieldSelectorMarmosets.appendChild(breedingMarmosets);
      fieldSelectorMarmosets.appendChild(birthdateMarmosets);
      fieldSelectorMarmosets.dispatchEvent(new Event("change"));
  
      break;

    case "mkturkdata":
      fs.style.visibility = "visible";
      ki0.style.visibility = "visible";
      ki1.style.visibility = "visible";
      ki2.style.visibility = "visible";
      goBtn.style.visibility = "visible";

      resetPlaceholder();
      removeElementsByClassName("field-options");

      let agentTypeCurDate = document.createElement("option");
      agentTypeCurDate.setAttribute("class", "field-options");
      agentTypeCurDate.setAttribute("value", "agentTypeCurDate");
      agentTypeCurDate.setAttribute("selected", "true");
      agentTypeCurDate.textContent = "Agent & Doctype & CurrentDate";

      let fieldSelectorMkturk 
        = document.querySelector("#field-selector") as HTMLSelectElement;
      fieldSelectorMkturk.appendChild(agentTypeCurDate);
      fieldSelectorMkturk.dispatchEvent(new Event("change"));

      break;

    case "mkturkfiles":
      fs.style.visibility = "hidden";
      ki0.style.visibility = "hidden";
      ki1.style.visibility = "hidden";
      ki2.style.visibility = "hidden";
      goBtn.style.visibility = "hidden";

      removeElementsByClassName("field-options");
      mkf.listStorageFiles(rootRef);
      break;

  }
});

let fieldSelector
  = document.querySelector<HTMLSelectElement>("#field-selector");
fieldSelector?.addEventListener("change", ev => {
  let field = fieldSelector?.value;
  let ki0 = document.querySelector("#keyword-input-0") as HTMLInputElement;
  let ki1 = document.querySelector("#keyword-input-1") as HTMLInputElement;
  let ki2 = document.querySelector("#keyword-input-2") as HTMLInputElement;

  switch (field) {
    case "name":
      resetPlaceholder();
      ki0.setAttribute("placeholder", "name");
      break;

    case "sex":
      resetPlaceholder();
      ki0.setAttribute("placeholder", "sex");
      break;

    case "rfid":
      resetPlaceholder();
      ki0.setAttribute("placeholder", "RFID");
      break;

    case "breeding":
      resetPlaceholder();
      ki0.setAttribute("placeholder", "breeding");
      break;

    case "birthdate":
      resetPlaceholder();
      ki0.setAttribute(
        "placeholder", "birthdate (e.g. 04/17/2019; +-7)"
      );
      break;

    case "agentTypeCurDate":
      ki0.setAttribute("placeholder", "Agent");
      ki1.setAttribute("placeholder", "Doctype");
      ki2.setAttribute(
        "placeholder", "CurrentDate (e.g. 04/17/2019; +-7)"
      );
      break;
  }
});

let queryForm = document.querySelector<HTMLFormElement>("#mkquery-form");
queryForm?.addEventListener("submit", ev => {
  ev.preventDefault();
  let qryLoc = qryLocSelc?.value;
  let field = fieldSelector?.value;
  let k0 = document.querySelector<HTMLInputElement>("#keyword-input-0")?.value;
  let k1 = document.querySelector<HTMLInputElement>("#keyword-input-1")?.value;
  let k2 = document.querySelector<HTMLInputElement>("#keyword-input-2")?.value;

  let queryParam: { field: string, keyword: string}[];
  let queryStr: string = "";
  let query: firebase.firestore.Query;


  if (qryLoc === "marmosets" && field && k0) {
    queryParam = [ { field: field, keyword: k0 } ];
    queryStr = "db.collection('marmosets')" + mkq.mkquery(queryParam);

  }

  else if (qryLoc === "mkturkdata" && field) {
    if (k0 && k1 && k2) {
      queryParam = [ 
        { field: "Agent", keyword: k0 },
        { field: "Doctype", keyword: k1 },
        { field: "CurrentDate", keyword: k2 }
      ];
      queryStr = "db.collection('mkturkdata')" + mkq.mkquery(queryParam);
    }

    else if (k0 && k1 && !k2) {
      queryParam = [
        { field: "Agent", keyword: k0 },
        { field: "Doctype", keyword: k1 }
      ];
      queryStr = "db.collection('mkturkdata')" + mkq.mkquery(queryParam);
    }

    else if (k0 && !k1 && k2) {
      queryParam = [
        { field: "Agent", keyword: k0 },
        { field: "CurrentDate", keyword: k2 }
      ];
      queryStr = "db.collection('mkturkdata')" + mkq.mkquery(queryParam);
    }

    else if (!k0 && k1 && k2) {
      queryParam = [
        { field: "Doctype", keyword: k1 },
        { field: "CurrentDate", keyword: k2 }
      ];
      queryStr = "db.collection('mkturkdata')" + mkq.mkquery(queryParam);
    }

    else if (k0 && !k1 && !k2) {
      queryParam = [
        { field: "Agent", keyword: k0 }
      ];
      queryStr = "db.collection('mkturkdata')" + mkq.mkquery(queryParam);
    }

    else if (!k0 && k1 && !k2) {
      queryParam = [
        { field: "Doctype", keyword: k1 }
      ];
      queryStr = "db.collection('mkturkdata')" + mkq.mkquery(queryParam);
    }

    else if (!k0 && !k1 && k2) {
      queryParam = [
        { field: "CurrentDate", keyword: k2 }
      ];
      queryStr = "db.collection('mkturkdata')" + mkq.mkquery(queryParam);
    }   
  }

  else {
    console.error("Incorrent Query");
    alert("Incorrent Query");
  }

  query = eval(queryStr);
  let ret = mkq.decodeQuery(query);
  ret.then(docs => {
    mkf.listFirestoreDocs(docs, qryLoc!);
  });
});



function resetPlaceholder() {
  let keywordInputs = 
    [...document.querySelectorAll<HTMLInputElement>(".keyword-input")];

  for (let i = 0; i < keywordInputs.length; i++) {
    keywordInputs[i].placeholder = "";
    keywordInputs[i].value = "";
  }
}

function removeElementsByClassName(cName: string) {
  let elements = document.getElementsByClassName(cName);
  while (elements.length > 0) {
    elements[0].parentNode?.removeChild(elements[0]);
  }
}