import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";
import "firebase/functions";

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

const functions = firebase.functions();
const db = firebase.firestore();
const storage = firebase.storage();
const storageRef = storage.ref(); 
const rootRef = storageRef.child("mkturkfiles/");
let isRoot = true;

let mkq = new Mkquery();
let mkf = new Mkfinder();

let bqListDatasets = functions.httpsCallable('bqListDatasets');

let bqDatasetList = bqListDatasets();
bqDatasetList.then((datasetList: any) => {
  let bqOptgroup = 
    document.querySelector('#bigquery-optgroup') as HTMLOptGroupElement;
  datasetList.data.forEach((dataset: any) => {
    let option = document.createElement('option');
    option.value = dataset;
    option.textContent = 'bq/' + dataset;
    bqOptgroup.appendChild(option);
  });
});


let rfidToggle = document.querySelector("#rfid-switch") as HTMLInputElement;
let qryLocSelc = document.querySelector("#qry-loc-selector") as HTMLSelectElement;
let fieldSelector =
    document.querySelector("#field-selector") as HTMLSelectElement;


/* Quick Links */
let homeLink
  = document.querySelector('#quick-link-home') as HTMLElement;
let paramsLink =
    document.querySelector("#quick-link-params") as HTMLElement;
let paramstorageLink
  = document.querySelector('#quick-link-paramstorage') as HTMLElement;
let sceneParamsLink =
    document.querySelector("#quick-link-sceneparams") as HTMLElement;
let marmosetsLink = 
    document.querySelector("#quick-link-marmosets") as HTMLElement;


window.addEventListener('load', (evt: Event) => {
  evt.preventDefault();

  isRoot = false;
  qryLocSelc.value = "mkturkfiles";
  qryLocSelc.dispatchEvent(new Event("change"));
  mkf.listStorageFiles(storageRef.child("mkturkfiles"));
});


marmosetsLink.addEventListener("click", (ev: Event) => {
  ev.preventDefault();

  qryLocSelc.value = "marmosets";
  fieldSelector!.value = "name";
  qryLocSelc!.dispatchEvent(new Event("change"));
  fieldSelector!.dispatchEvent(new Event("change"));

  let ret = mkq.decodeQuery(db.collection("marmosets"));
  ret.then(docs => {
    mkf.listFirestoreDocs(docs, "marmosets");
  });

});

paramsLink.addEventListener("click" || "pointerup", (ev: Event) => {
  ev.preventDefault();

  isRoot = false;
  qryLocSelc.value = "mkturkfiles";
  qryLocSelc.dispatchEvent(new Event("change"));
  mkf.listStorageFiles(storageRef.child("mkturkfiles/parameterfiles/subjects"));

});

paramstorageLink.addEventListener('click' || 'pointerup', (ev: Event) => {
  ev.preventDefault();

  isRoot = false;
  qryLocSelc.value = 'mkturkfiles';
  qryLocSelc.dispatchEvent(new Event('change'));
  mkf.listStorageFiles(storageRef.child('mkturkfiles/parameterfiles/params_storage'));
});

homeLink.addEventListener("click" || "pointerup", (ev: Event) => {
  ev.preventDefault();

  isRoot = false;
  qryLocSelc.value = "mkturkfiles";
  qryLocSelc.dispatchEvent(new Event("change"));
  mkf.listStorageFiles(storageRef.child("mkturkfiles"));

});

sceneParamsLink.addEventListener("click" || "pointerup", (ev: Event) => {
  ev.preventDefault();

  isRoot = false;
  qryLocSelc.value = "mkturkfiles";
  qryLocSelc.dispatchEvent(new Event("change"));
  mkf.listStorageFiles(storageRef.child("mkturkfiles/scenebags/objectome3d"));

});

qryLocSelc!.addEventListener("change", ev => {

  let fs = document.querySelector("#field-selector") as HTMLSelectElement;
  let ki0 = document.querySelector("#keyword-input-0") as HTMLInputElement;
  let ki1 = document.querySelector("#keyword-input-1") as HTMLInputElement;
  let ki2 = document.querySelector("#keyword-input-2") as HTMLInputElement;
  let goBtn = document.querySelector("#go-btn") as HTMLButtonElement;
  let plotX = document.querySelector("#quick-plot-x") as HTMLSelectElement;
  let plotY = document.querySelector("#quick-plot-y") as HTMLSelectElement;
  let plotBtn = document.querySelector("#plot-btn") as HTMLButtonElement;
  let queryResult: Promise<any[]>;
  
  switch(qryLocSelc.value) {
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
      plotX.style.visibility = "hidden";
      plotY.style.visibility = "hidden";
      plotBtn.style.visibility = "hidden";

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

    case "objects":
      fs.style.visibility = "visible";
      ki0.style.visibility = "visible";
      ki1.style.visibility = "hidden";
      ki2.style.visibility = "hidden";
      goBtn.style.visibility = "visible";
      plotX.style.visibility = "hidden";
      plotY.style.visibility = "hidden";
      plotBtn.style.visibility = "hidden";

      resetPlaceholder();
      removeElementsByClassName("field-options");

      let identityObjects = document.createElement("option");
      identityObjects.setAttribute("class", "field-options");
      identityObjects.setAttribute("value", "identity");
      identityObjects.setAttribute("selected", "true");
      identityObjects.textContent = "identity";

      let meshObjects = document.createElement("option");
      meshObjects.setAttribute("class", "field-options");
      meshObjects.setAttribute("value", "mesh");
      meshObjects.textContent = "mesh";

      let nounObjects = document.createElement("option");
      nounObjects.setAttribute("class", "field-options");
      nounObjects.setAttribute("value", "noun");
      nounObjects.textContent = "noun";

      let fieldSelectorObjects
        = document.querySelector("#field-selector") as HTMLSelectElement;
      fieldSelectorObjects.appendChild(identityObjects);
      fieldSelectorObjects.appendChild(meshObjects);
      fieldSelectorObjects.appendChild(nounObjects);
      fieldSelectorObjects.dispatchEvent(new Event("change"));

      break;

    case "mkdailydata":
      let ret = mkq.decodeQuery(db.collection('mkdailydata'));
      ret.then(docs => {
        mkf.listFirestoreDocs(docs, 'mkdailydata');
      });

      break;

    case "mkdailydatatest":
      let retTest = mkq.decodeQuery(db.collection('mkdailydatatest'));
      retTest.then(docs => {
        mkf.listFirestoreDocs(docs, 'mkdailydatatest');
      });

      break;

    case "mkturkfiles":
      fs.style.visibility = "hidden";
      ki0.style.visibility = "hidden";
      ki1.style.visibility = "hidden";
      ki2.style.visibility = "hidden";
      goBtn.style.visibility = "hidden";
      plotX.style.visibility = "hidden";
      plotY.style.visibility = "hidden";
      plotBtn.style.visibility = "hidden";

      removeElementsByClassName("field-options");
      if (isRoot) {
        mkf.listStorageFiles(rootRef);
      }
      break;

    case "devices":
      fs.style.visibility = "hidden";
      ki0.style.visibility = "hidden";
      ki1.style.visibility = "hidden";
      ki2.style.visibility = "hidden";
      goBtn.style.visibility = "hidden";
      plotX.style.visibility = "hidden";
      plotY.style.visibility = "hidden";
      plotBtn.style.visibility = "hidden";

      resetPlaceholder();
      removeElementsByClassName("field-options");

      queryResult = mkq.decodeQuery(db.collection("devices"));
      queryResult.then(docs => {
        mkf.listFirestoreDocs(docs, "devices");
      });

      break;

    case "eyecalibrations":
      console.log('eye');
      fs.style.visibility = "hidden";
      ki0.style.visibility = "hidden";
      ki1.style.visibility = "hidden";
      ki2.style.visibility = "hidden";
      goBtn.style.visibility = "hidden";
      plotX.style.visibility = "hidden";
      plotY.style.visibility = "hidden";
      plotBtn.style.visibility = "hidden";

      resetPlaceholder();
      removeElementsByClassName("field-options");

      queryResult = mkq.decodeQuery(db.collection("eyecalibrations"));
      queryResult.then(docs => {
        mkf.listFirestoreDocs(docs, "eyecalibrations");
      });

      break;

    case "mkscale":
      fs.style.visibility = "visible";
      ki0.style.visibility = "visible";
      ki1.style.visibility = "visible";
      ki2.style.visibility = "hidden";
      goBtn.style.visibility = "visible";
      plotX.style.visibility = "visible";
      plotY.style.visibility = "visible";
      plotBtn.style.visibility = "visible";

      resetPlaceholder();
      removeElementsByClassName("field-options");

      let nameCurDate = document.createElement("option");
      nameCurDate.setAttribute("class", "field-options");
      nameCurDate.setAttribute("value", "nameCurDate");
      nameCurDate.setAttribute("selected", "true");
      nameCurDate.textContent = "Name & CurrentDate";

      fs.appendChild(nameCurDate);
      fs.dispatchEvent(new Event("change"));

      break;

    case "eyedata":
      fs.style.visibility = "visible";
      ki0.style.visibility = "visible";
      ki1.style.visibility = "visible";
      ki2.style.visibility = "hidden";
      goBtn.style.visibility = "visible";
      plotX.style.visibility = "visible";
      plotY.style.visibility = "visible";
      plotBtn.style.visibility = "visible";

      resetPlaceholder();
      removeElementsByClassName("field-options");

      let bqAgentDate = document.createElement("option");
      bqAgentDate.setAttribute("class", "field-options");
      bqAgentDate.setAttribute("value", "nameCurDate");
      bqAgentDate.setAttribute("selected", "true");
      bqAgentDate.textContent = "Name & CurrentDate";

      fs.appendChild(bqAgentDate);
      fs.dispatchEvent(new Event("change"));
      break;
  }
});


fieldSelector?.addEventListener("change", ev => {
  let field = fieldSelector?.value;
  let ki0 = document.querySelector("#keyword-input-0") as HTMLInputElement;
  let ki1 = document.querySelector("#keyword-input-1") as HTMLInputElement;
  let ki2 = document.querySelector("#keyword-input-2") as HTMLInputElement;
  let plotX = document.querySelector("#quick-plot-x") as HTMLSelectElement;
  let plotY = document.querySelector("#quick-plot-y") as HTMLSelectElement;
  let plotBtn = document.querySelector("#plot-btn") as HTMLButtonElement;


  switch (field) {
    case "name":
      resetPlaceholder();
      ki0.setAttribute("placeholder", "name");
      plotX.style.visibility = "visible";
      plotY.style.visibility = "visible";
      plotBtn.style.visibility = "visible";
      break;

    case "sex":
      resetPlaceholder();
      ki0.setAttribute("placeholder", "sex");
      plotX.style.visibility = "hidden";
      plotY.style.visibility = "hidden";
      plotBtn.style.visibility = "hidden";
      break;

    case "rfid":
      resetPlaceholder();
      ki0.setAttribute("placeholder", "RFID");
      plotX.style.visibility = "visible";
      plotY.style.visibility = "visible";
      plotBtn.style.visibility = "visible";
      break;

    case "breeding":
      resetPlaceholder();
      ki0.setAttribute("placeholder", "breeding");
      plotX.style.visibility = "hidden";
      plotY.style.visibility = "hidden";
      plotBtn.style.visibility = "hidden";
      break;

    case "birthdate":
      resetPlaceholder();
      ki0.setAttribute(
        "placeholder", "birthdate (e.g. 04/17/2019; +-7)"
      );
      plotX.style.visibility = "hidden";
      plotY.style.visibility = "hidden";
      plotBtn.style.visibility = "hidden";
      break;

    case "agentTypeCurDate":
      ki0.setAttribute("placeholder", "Agent");
      ki1.setAttribute("placeholder", "Doctype");
      ki2.setAttribute(
        "placeholder", "CurrentDate (e.g. 04/17/2019; +-7)"
      );
      plotX.style.visibility = "hidden";
      plotY.style.visibility = "hidden";
      plotBtn.style.visibility = "hidden";
      break;

    case "nameCurDate":
      ki0.setAttribute("placeholder", "Name");
      ki1.setAttribute(
        "placeholder", "CurrentDate (e.g. 04/17/2019; +-7)"
      );
      break;
    
    case "eyedata":
      ki0.setAttribute("placeholder", "Agent");
      ki1.setAttribute(
        "Placeholder", "Date (e.g. 04/17/2019)"
      );
      break;
  }
});

let queryForm = document.querySelector<HTMLFormElement>("#mkquery-form");
queryForm?.addEventListener("submit", async ev => {
  ev.preventDefault();
  console.log("test weird");
  let qryLoc = qryLocSelc?.value;
  let field = fieldSelector?.value;
  let k0 = document.querySelector<HTMLInputElement>("#keyword-input-0")?.value;
  let k1 = document.querySelector<HTMLInputElement>("#keyword-input-1")?.value;
  let k2 = document.querySelector<HTMLInputElement>("#keyword-input-2")?.value;

  let queryParam: { field: string, keyword: string}[] = [];
  let queryStr: string = "";
  let query: firebase.firestore.Query;


  switch(qryLoc) {
    case "marmosets":
      if (k0) {
        queryParam.push({ field: field, keyword: k0 });
      } else {
        console.error("No query arguments!");
        alert("No query arguments!");
      }
      queryStr = "db.collection('marmosets')" + mkq.mkquery(queryParam);
      break;

    case "mkturkdata":
      if (k0) {
        queryParam.push({ field: "Agent", keyword: k0});
      }
      if (k1) {
        queryParam.push({ field: "Doctype", keyword: k1 });
      }
      if (k2) {
        queryParam.push({ field: "CurrentDate", keyword: k2 });
      }

      if (queryParam.length > 0) {
        queryStr = "db.collection('mkturkdata')" + mkq.mkquery(queryParam);
      } else {
        console.error("No query arguments!");
        alert("No query arguments!");
      }
      break;

    case "objects":
      if (k0) {
        queryParam.push({ field: field, keyword: k0 });
      } else {
        console.error("No query arguments!");
        alert("No query arguments!");
      }
      queryStr = "db.collection('objects')" + mkq.mkquery(queryParam);
      break;

    case "mkscale":
      if (k0) {
        queryParam.push({ field: "Name", keyword: k0 });
      }
      if (k1) {
        queryParam.push({ field: "CurrentDate", keyword: k1 });
      }
      
      if (queryParam.length > 0) {
        queryStr = "db.collection('mkscale')" + mkq.mkquery(queryParam);
      } else {
        console.error("No query arguments!");
        alert("No query arguments!");
      }
      break;

    case "eyedata":
      if (k0 && k1) {
        queryStr = mkq.mkbquery("eyedata", k0, k1);
      } else {
        console.error("Incorrect query: Need two query arguments!");
        alert("Incorrect query: Need two query arguments!");
      }
      break;
  }
  

  if (queryStr.startsWith('db.collection')) {
    query = eval(queryStr);
    let ret = mkq.decodeQuery(query);
    ret.then(docs => {
      mkf.listFirestoreDocs(docs, qryLoc!);
      if (rfidToggle.checked) {
        mkf.finder.selectRow();
        mkf.mke.displayFirebaseTextFile(mkf.finder.getData()[0], "marmosets");
      }
    });
  }

  else if (queryStr.startsWith('SELECT *')) {
    let test = mkq.decodeBigQuery(queryStr);
    console.log(test);
    test.then(data => {
      mkf.listBigQueryTable(data.data, qryLoc, k0!);
    })
  }
  
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