/* mkquery.js            *
 * version 0.1           *
 * Hector Cho @ Issa Lab */

let provider = new firebase.auth.GoogleAuthProvider();
provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
firebase.auth().getRedirectResult().then(result => {
  if (result.user) {
    console.log("Sign-In Redirect Result, USER:", result.user.email, "is signed in");
  } else if (firebase.auth().currentUser) {
    console.log("Sign-In Redirect Result, USER:", firebase.auth().currentUser.email, "is signed in");
  } else {
    firebase.auth().signInWithRedirect(provider);
  }
});

/* const variable declarations */
const db = firebase.firestore();
const storage = firebase.storage();

const marmosetsCollection = db.collection("marmosets");
const mkturkdataCollection = db.collection("mkturkdata");
const storageRef = storage.ref();
const rootRef = storageRef.child("mkturkfiles/");

const queryForm = document.querySelector("#query-form");
const editorContainer = document.querySelector("#jsoneditor");
const updateBtn = document.querySelector("#update-json");
const backBtn = document.querySelector("#back-button");
const forwardBtn = document.querySelector("#forward-button");
const showSelectedImages = document.querySelector("#show-images-button");
const imageCanvas = document.querySelector("#image-canvas");
const canvasHolder = document.querySelector("#canvas-holder");
const uploadFileBtn = document.querySelector("#upload-file");
const downloadFileBtn = document.querySelector("#download-file");
//const filterField = document.querySelector("#filter-field");
const filterValue = document.querySelector("#filter-value");
const webglCanvas = document.querySelector("#webgl-canvas");
const viewersDiv = document.querySelector("#jsoneditor-div");
webglCanvas.width = canvasHolder.offsetWidth;
webglCanvas.height = canvasHolder.offsetHeight;
webglCanvas.style.width = canvasHolder.offsetWidth;
webglCanvas.style.height = canvasHolder.offsetHeight;

const rfidModeBtn = document.querySelector("#rfidMode");

const editorOptions = {};
var editor = new JSONEditor (editorContainer, editorOptions);
var gallery = new Viewer(document.getElementById("image-canvas"));
var table = new Tabulator("#tabulator");

var inEditor = new Array(4);
var previousPath = new Array(1);
var selectedImages = new Array();
var objectMesh;
var animationID;
/* --- MAIN FUNCTIONS START --- */
var prevRFIDTag = "";
var lastReceived = 0;
var statusCircle = document.querySelector("#status-circle");

var port = {
  statusTextConnect: "",
  statusTextSent: "",
  statusTextReceived: ""
};

var serial = {};

rfidModeBtn.onclick = async function () {

  if ( rfidModeBtn.value == "off" ) {
    rfidModeBtn.textContent = "Turn off RFID Mode";
    rfidModeBtn.value = "on";
    document.querySelector("#qry-loc-selector").value = "marmosets";
    //document.querySelector("#qry-loc-selector").onchange;
    qryLocOnChange();
    document.querySelector("#field-selector").value = "rfid";
    fieldValueOnChange();

    port.statusTextConnect = "Reconnecting USB Device";
    console.log( port.statusTextConnect );
    var event = {};
    event.type = "Reconnect";
    await findUSBDevice ( event );
     
  } else if ( rfidModeBtn.value == "on" ) {
    rfidModeBtn.textContent = "Turn on RFID Mode";
    rfidModeBtn.value = "off";
    queryForm.reset();
    resetKeywordPlaceholder();

    port.connected = false;
    port.disconnect();
    port.statusTextConnect = "USB Device Disconnected";
    console.log( port.statusTextConnect );
    statusCircle.style.backgroundColor = "black";
  }
};

/* query form submission */
queryForm.addEventListener("submit", event => {
  event.preventDefault();

  let qryLocation = document.querySelector("#qry-loc-selector").value;
  let field = document.querySelector("#field-selector").value;
  let keyword0 = document.querySelector("#keyword-input-0").value;
  let keyword1 = document.querySelector("#keyword-input-1").value;
  let keyword2 = document.querySelector("#keyword-input-2").value;

  let keywords = [keyword0, keyword1, keyword2];

  mkquery(qryLocation, field, keywords);
});

async function mkquery (location, field, keywordArr) {  
  async function loadData(doc, arr) {
    await arr.push(doc.data());
  }

  var arr = new Array();

  switch (location) {
    case "marmosets":

      var marmosetsQuery = queryMarmosets( field, keywordArr[0] );
      await marmosetsQuery.get().then(async querySnapshot => {
        if ( !querySnapshot.empty ) {
          let promises = querySnapshot.docs.map(doc => loadData(doc, arr));
          await Promise.all(promises);
        } else {
          console.log("Found No Documents");
        }
      }).catch( error => {
        console.log( "Error getting document: ", error );
      });
      await displayDatabaseTable(arr, "marmosets");
      console.log(arr);
      break;

    case "mkturkdata":
      var mkturkdataQuery = queryMkturkdata(field, keywordArr);
      var querySnapshot = await mkturkdataQuery.get()
      .then(async querySnapshot => {
        if (!querySnapshot.empty) {
          let promises = querySnapshot.docs.map(doc => loadData(doc, arr));
          await Promise.all(promises);
        } else {
          console.log("Found No Documents");
        }
      }).catch(error=> {
        console.error("Error getting document:", error);
      });
//       await querySnapshot.docs.map(doc => loadData(doc, arr));

      await displayDatabaseTable(arr, "mkturkdata");
      console.log(arr);
      break;

    case "mkturkfiles":
      listPrefixesAndItems(rootRef);
      break;
  }
}

function queryMarmosets (field, keyword) {
  var query;
  if (field != "birthdate") {
    query = marmosetsCollection.where( field, "==", keyword );
  } else if (field == "birthdate") {
    var strArr = keyword.split(";");
    strArr[1] = strArr[1].trim();
    var len = strArr[1].length;

    if (strArr[1][0] == "+" && strArr[1][1] == "-" && !isNaN(strArr[1][2])) {
      let refDate = new Date(strArr[0]);
      let lowerDate = 
        new Date(refDate.getTime() - Number(strArr[1].substring(2, len)) * 86400000);
    
      let upperDate = 
        new Date(refDate.getTime() + Number(strArr[1].substring(2, len)) * 86400000);
    
      query = marmosetsCollection.where(field, ">=", lowerDate)
                         .where(field, "<=", upperDate);
    } else if (strArr[1][0] == "+" && !isNaN(strArr[1][1])) {
      let refDate = new Date(strArr[0]);
      let upperDate =
        new Date(refDate.getTime() + Number(strArr[1].substring(1, len)) * 86400000);
      query = marmosetsCollection.where(field, ">=", refDate)
                         .where(field, "<=", upperDate);
    } else if (strArr[1][0] == "-" && !isNaN(strArr[1][1])) {
      let refDate = new Date(strArr[0]);
      let lowerDate =
        new Date(refDate.getTime() - Number(strArr[1].substring(1, len)) * 86400000);
      query = marmosetsCollection.where(field, ">=", lowerDate)
                         .where(field, "<=", refDate);
    }
  }
  console.log(query);
  return query;
}

function queryMkturkdata (field, keywords) {
  console.log(keywords);

  var query;

  if (!isEmptyObject(keywords[0]) &&
      !isEmptyObject(keywords[1]) &&
      !isEmptyObject(keywords[2])) {
    //agent, doctype, currentdate
    var strArr = keywords[2].split(";"); //parse date range based on semicolon
    if (strArr.length > 1){
      strArr[1] = strArr[1].trim(); //remove spaces
    }
    else{
      strArr[1]=""
    }
    var len = strArr[1].length;

    if (strArr[1][0] == "+" && strArr[1][1] == "-" && !isNaN(strArr[1][2])) {
      let refDate = new Date(strArr[0]).getTime();
      let lDate = refDate - Number(strArr[1].substring(2, len)) * 86400000;
      let uDate = refDate + Number(strArr[1].substring(2, len)) * 86400000;

      query = mkturkdataCollection.where("CurrentDateValue", ">=", lDate)
                          .where("CurrentDateValue", "<=", uDate)
                          .where("Agent", "==", keywords[0])
                          .where("Doctype", "==", keywords[1]);

    } else if (strArr[1][0] == "+" && !isNaN(strArr[1][1])) {
      let refDate = new Date(strArr[0]).getTime();
      let uDate = refDate + Number(strArr[1].substring(2, len)) * 86400000;

      query = mkturkdataCollection.where("CurrentDateValue", ">=", refDate)
                          .where("CurrentDateValue", "<=", uDate)
                          .where("Agent", "==", keywords[0])
                          .where("Doctype", "==", keywords[1]);
    } else if (strArr[1][0] == "-" && !isNaN(strArr[1][1])) {
      let refDate = new Date(strArr[0]).getTime();
      let lDate = refDate - Number(strArr[1].substring(2, len)) * 86400000;
      query = mkturkdataCollection.where("CurrentDateValue", ">=", lDate)
                          .where("CurrentDateValue", "<=", refDate)
                          .where("Agent", "==", keywords[0])
                          .where("Doctype", "==", keywords[1]);
    } else {
      let refDate = new Date(strArr[0]).getTime();
      let uDate = refDate + 86400000; //within that day

      query = mkturkdataCollection.where("CurrentDateValue", ">=", refDate)
                          .where("CurrentDateValue", "<=", uDate)
                          .where("Agent", "==", keywords[0])
                          .where("Doctype", "==", keywords[1]);
    }
  } else if (!isEmptyObject(keywords[0]) &&
             !isEmptyObject(keywords[1]) &&
             isEmptyObject(keywords[2])) {
    
    //agent, doctype
    query = mkturkdataCollection.where("Agent", "==", keywords[0])
                        .where("Doctype", "==", keywords[1]);

  } else if (!isEmptyObject(keywords[0]) &&
             isEmptyObject(keywords[1]) &&
             !isEmptyObject(keywords[2])) {
    //agent, curdate
    var strArr = keywords[2].split(";");
    if (strArr.length > 1){
      strArr[1] = strArr[1].trim(); //remove spaces
    }
    else{
      strArr[1]=""
    }
    var len = strArr[1].length;

    if (strArr[1][0] == "+" && strArr[1][1] == "-" && !isNaN(strArr[1][2])) {
      let refDate = new Date(strArr[0]).getTime();
      let lDate = refDate - Number(strArr[1].substring(2, len)) * 86400000;
      let uDate = refDate + Number(strArr[1].substring(2, len)) * 86400000;

      query = mkturkdataCollection.where("CurrentDateValue", ">=", lDate)
                          .where("CurrentDateValue", "<=", uDate)
                          .where("Agent", "==", keywords[0]);

    } else if (strArr[1][0] == "+" && !isNaN(strArr[1][1])) {
      let refDate = new Date(strArr[0]).getTime();
      let uDate = refDate + Number(strArr[1].substring(2, len)) * 86400000;
      query = mkturkdataCollection.where("CurrentDateValue", ">=", refDate)
                          .where("CurrentDateValue", "<=", uDate)
                          .where("Agent", "==", keywords[0]);
    } else if (strArr[1][0] == "-" && !isNaN(strArr[1][1])) {
      let refDate = new Date(strArr[0]).getTime();
      let lDate = refDate - Number(strArr[1].substring(2, len)) * 86400000;
      query = mkturkdataCollection.where("CurrentDateValue", ">=", lDate)
                          .where("CurrentDateValue", "<=", refDate)
                          .where("Agent", "==", keywords[0]);
    } else {
      let refDate = new Date(strArr[0]).getTime();
      let uDate = refDate + 86400000; //within that day

      query = mkturkdataCollection.where("CurrentDateValue", ">=", refDate)
                          .where("CurrentDateValue", "<=", uDate)
                          .where("Agent", "==", keywords[0]);
    }


  }
  else if (isEmptyObject(keywords[0]) &&
             !isEmptyObject(keywords[1]) &&
             !isEmptyObject(keywords[2])) {
    //doctype, CurrentDateValue
    var strArr = keywords[2].split(";");
    if (strArr.length > 1){
      strArr[1] = strArr[1].trim(); //remove spaces
    }
    else{
      strArr[1]=""
    }
    var len = strArr[1].length;

    if (strArr[1][0] == "+" && strArr[1][1] == "-" && !isNaN(strArr[1][2])) {
      let refDate = new Date(strArr[0]).getTime();
      let lDate = refDate - Number(strArr[1].substring(2, len)) * 86400000;
      let uDate = refDate + Number(strArr[1].substring(2, len)) * 86400000;

      query = mkturkdataCollection.where("CurrentDateValue", ">=", lDate)
                          .where("CurrentDateValue", "<=", uDate)
                          .where("Doctype", "==", keywords[1]);

    } else if (strArr[1][0] == "+" && !isNaN(strArr[1][1])) {
      let refDate = new Date(strArr[0]).getTime();
      let uDate = refDate + Number(strArr[1].substring(2, len)) * 86400000;
      query = mkturkdataCollection.where("CurrentDateValue", ">=", refDate)
                          .where("CurrentDateValue", "<=", uDate)
                          .where("Doctype", "==", keywords[1]);
    } else if (strArr[1][0] == "-" && !isNaN(strArr[1][1])) {
      let refDate = new Date(strArr[0]).getTime();
      let lDate = refDate - Number(strArr[1].substring(2, len)) * 86400000;
      query = mkturkdataCollection.where("CurrentDateValue", ">=", lDate)
                          .where("CurrentDateValue", "<=", refDate)
                          .where("Doctype", "==", keywords[1]);
    } else {
      let refDate = new Date(strArr[0]).getTime();
      let uDate = refDate + 86400000; //within day
      query = mkturkdataCollection.where("CurrentDateValue", "==", refDate)
                          .where("Doctype", "==", keywords[1]);
    }

  } else if (!isEmptyObject(keywords[0]) &&
             isEmptyObject(keywords[1]) &&
             isEmptyObject(keywords[2])) {
    //agent
    query = mkturkdataCollection.where("Agent", "==", keywords[0]);
  } else if (isEmptyObject(keywords[0]) &&
             !isEmptyObject(keywords[1]) &&
             isEmptyObject(keywords[2])) {
    //doctype
    query = mkturkdataCollection.where("Doctype", "==", keywords[1]);
  } else if (isEmptyObject(keywords[0]) &&
             isEmptyObject(keywords[1]) &&
             !isEmptyObject(keywords[2])) {
    //CurrentDateValue
    console.log("curdate only");
    var strArr = keywords[2].split(";");
    strArr[1] = strArr[1].trim();
    var len = strArr[1].length;

    if (strArr[1][0] == "+" && strArr[1][1] == "-" && !isNaN(strArr[1][2])) {
      let refDate = new Date(strArr[0]).getTime();
      let lDate = refDate - Number(strArr[1].substring(2, len)) * 86400000;
      let uDate = refDate + Number(strArr[1].substring(2, len)) * 86400000;

      query = mkturkdataCollection.where("CurrentDateValue", ">=", lDate)
                          .where("CurrentDateValue", "<=", uDate);

    } else if (strArr[1][0] == "+" && !isNaN(strArr[1][1])) {
      let refDate = new Date(strArr[0]).getTime();
      let uDate = refDate + Number(strArr[1].substring(2, len)) * 86400000;
      query = mkturkdataCollection.where("CurrentDateValue", ">=", refDate)
                          .where("CurrentDateValue", "<=", uDate);
    } else if (strArr[1][0] == "-" && !isNaN(strArr[1][1])) {
      let refDate = new Date(strArr[0]).getTime();
      let lDate = refDate - Number(strArr[1].substring(2, len)) * 86400000;
      query = mkturkdataCollection.where("CurrentDateValue", ">=", lDate)
                          .where("CurrentDateValue", "<=", refDate);
    } else {
      let refDate = new Date(strArr[0]).getTime();
      let uDate = refDate + 86400000; //within day

      query = mkturkdataCollection.where("CurrentDateValue", ">=", refDate)
                          .where("CurrentDateValue", "<=", uDate)
    }   
  }
  return query;
}




/* --- MAIN FUNCTIONS END --- */

/* --- HELPER FUNCTIONS START --- */

function displayDatabaseTable(data, database) {

  data = handleDate(data, database);
  if (database == "marmosets") {
    table.destroy();
    table = new Tabulator("#tabulator", {
      data: data,
      index: "name",
      layout: "fitColumns",
      initialSort: [
        {column: "name", dir: "asc"}
      ],
      columns: [
        {title: "<input id='select-all' type='checkbox' onchange='updateSelectAll()'/>", width: 15, headerSort: false},
        {title: "Name", field: "name"},
        {title: "Sex", field: "sex"},
        {title: "DOB", field: "birthdate"},
        {title: "RFID", field: "rfid"},
      ],
      selectable: true,
      selectableRangeMode: "click",
      rowClick: function(e, row) {
        e.stopPropagation();
        destroyThreeObjects();
        editorContainer.style.zIndex = 3;
        updateBtn.style.zIndex = 3;
        canvasHolder.style.zIndex = 2;
        webglCanvas.style.zIndex = 1;
        console.log(row._row.data);
        displayJson(row._row.data);
        trackInEditor("marmosets", row._row.data);
      }
    });
    let filterField = document.querySelector("#filter-field");
    let filterValue = document.querySelector("#filter-value");

    filterValue.onkeyup = function() {
      table.setFilter(filterField.value, "like", filterValue.value);
    }
  } else if (database == "mkturkdata") {
    table.destroy();
    table = new Tabulator("#tabulator", {
      data: data,
      index: "Agent",
      layout: "fitColumns",
      initialSort: [
        {column: "Agent", dir: "asc"}
      ],
      columns: [
        {title: "<input id='select-all' type='checkbox' onchange='updateSelectAll()'/>", width: 15, headerSort: false},
        {title: "Agent", field: "Agent"},
        {title: "Doctype", field: "Doctype"},
        {title: "CurrentDate", field: "CurrentDate"},
        {title: "FirestoreDocRoot", field: "FirestoreDocRoot", visible: false}
      ],
      selectable: true,
      selectableRangeMode: "click",
      rowClick: function(e, row) {
        e.stopPropagation();
        destroyThreeObjects();
        editorContainer.style.zIndex = 3;
        updateBtn.style.zIndex = 3;
        canvasHolder.style.zIndex = 2;
        webglCanvas.style.zIndex = 1;
        displayJson(row._row.data);
        trackInEditor("mkturkdata", row._row.data);
      }
    });
    
    let filterField = document.querySelector("#filter-field");
    let filterValue = document.querySelector("#filter-value");

    filterValue.onkeyup = function() {
      table.setFilter(filterField.value, "like", filterValue.value);
    }  
  }
}


function handleDate (data, database) {
  if (database == "marmosets") {
    for (var i in data) {
      for (var key in data[i]) {
        if (data[i].hasOwnProperty(key)) {
          if (key.toLowerCase().includes("date")) {
            data[i][key] = data[i][key].toDate().toJSON();
          }
          switch (key) {
            case "albumin":
              data[i].albumin[0] = data[i].albumin[0].toDate().toJSON();
              break;

            case "grouphoused":
              data[i].grouphoused[0] = data[i].grouphoused[0].toDate().toJSON();
              break;
          }
        }
      }
    }
  } else if (database == "mkturkdata") {
    for (var i in data) {
      for (var key in data[i]) {
        if (data[i].hasOwnProperty(key)) {
          if (key.toLowerCase().includes("date") && key != "CurrentDateValue") {
            if (typeof(data[i][key]) != "undefined" && data[i][key] != "" && data[i][key] != null){
              data[i][key] = data[i][key].toDate().toJSON();            
            }
            else{
              data[i][key] = "value unavailable"
            }
          }
        }
      }
    }
  }
  return data;
}

function displayJson (doc) {
  try {
    editor.destroy();
    editor = new JSONEditor(editorContainer, editorOptions, doc);
  } catch (error) {
    console.error("JSONEditor failed:", error);
  }
}


function qryLocOnChange() {
  let qryLocation = document.querySelector("#qry-loc-selector").value;

  switch (qryLocation) {
    case "marmosets":

      removeElementsByClassName("field-options");

      let nameMarmosets = document.createElement("option");
      nameMarmosets.setAttribute("class", "field-options");
      nameMarmosets.setAttribute("value", "name");
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

      let fieldSelectorMarmosets = document.querySelector("#field-selector");
      fieldSelectorMarmosets.appendChild(nameMarmosets);
      fieldSelectorMarmosets.appendChild(sexMarmosets);
      fieldSelectorMarmosets.appendChild(rfidMarmosets);
      fieldSelectorMarmosets.appendChild(breedingMarmosets);
      fieldSelectorMarmosets.appendChild(birthdateMarmosets);
      fieldSelectorMarmosets.onchange();

      //let nameFilter = document.createElement("option");
      //nameFilter.setAttribute("class", "field-options");
      //nameFilter.setAttribute("value", "name");
      //nameFilter.textContent = "name";

      //let sexFilter = document.createElement("option");
      //sexFilter.setAttribute("class", "field-options");
      //sexFilter.setAttribute("value", "sex");
      //sexFilter.textContent = "sex";

      //let rfidFilter = document.createElement("option");
      //rfidFilter.setAttribute("class", "field-options");
      //rfidFilter.setAttribute("value", "rfid");
      //rfidFilter.textContent = "RFID";

      //let birthdateFilter = document.createElement("option");
      //birthdateFilter.setAttribute("class", "field-options");
      //birthdateFilter.setAttribute("value", "birthdate");
      //birthdateFilter.textContent = "birthdate";

      //let filterSelectorMarmosets = document.querySelector("#filter-field");
      //filterSelectorMarmosets.appendChild(nameFilter);
      //filterSelectorMarmosets.appendChild(sexFilter);
      //filterSelectorMarmosets.appendChild(rfidFilter);
      //filterSelectorMarmosets.appendChild(birthdateFilter);
      break;

    case "mkturkdata":

      removeElementsByClassName("field-options");

      // Abbreviation Legend
      // Doctype & CurrentDateValue => typeCurDateValue
      // Agent & Doctype & CurrentDate => agentTypeCurDate
      // Agent & CurrentDateValue => agentCurDateValue

      let agentTypeCurDate = document.createElement("option");
      agentTypeCurDate.setAttribute("class", "field-options");
      agentTypeCurDate.setAttribute("value", "agentTypeCurDate");
      agentTypeCurDate.textContent = "Agent & Doctype & CurrentDate";

      let fieldSelectorMkturk = document.querySelector("#field-selector");
      fieldSelectorMkturk.appendChild(agentTypeCurDate);
      fieldSelectorMkturk.onchange();
      
      //let agentFilter = document.createElement("option");
      //agentFilter.setAttribute("class", "field-options");
      //agentFilter.setAttribute("value", "Agent");
      //agentFilter.textContent = "Agent";

      //let doctypeFilter = document.createElement("option");
      //doctypeFilter.setAttribute("class", "field-options");
      //doctypeFilter.setAttribute("value", "Doctype");
      //doctypeFilter.textContent = "Doctype";

      //let curdateFilter = document.createElement("option");
      //curdateFilter.setAttribute("class", "field-options");
      //curdateFilter.setAttribute("value", "CurrentDate");
      //curdateFilter.textContent = "CurrentDate";

      //let filterSelectorMkturkdata = document.querySelector("#filter-field");
      //filterSelectorMkturkdata.appendChild(agentFilter);
      //filterSelectorMkturkdata.appendChild(doctypeFilter);
      //filterSelectorMkturkdata.appendChild(curdateFilter);

      break;

    case "mkturkfiles":

      removeElementsByClassName("field-options");

      //let storageNameFilter = document.createElement("option");
      //storageNameFilter.setAttribute("class", "field-options");
      //storageNameFilter.setAttribute("value", "name");
      //storageNameFilter.textContent = "Name";

      //let filterSelectorMkturkfiles = document.querySelector("#filter-field");
      //filterSelectorMkturkfiles.appendChild(storageNameFilter);
      
      break;
  }
}

function fieldValueOnChange() {
  let field = document.querySelector("#field-selector").value;

  switch (field) {
    case "name":
      resetKeywordPlaceholder();
      let case0 = document.querySelector("#keyword-input-0");
      case0.setAttribute("placeholder", "name");
      break;

    case "sex":
      resetKeywordPlaceholder();
      let case1 = document.querySelector("#keyword-input-0");
      case1.setAttribute("placeholder", "sex");
      break;

    case "rfid":
      resetKeywordPlaceholder();
      let case2 = document.querySelector("#keyword-input-0");
      case2.setAttribute("placeholder", "RFID");
      break;

    case "breeding":
      resetKeywordPlaceholder();
      let case3 = document.querySelector("#keyword-input-0");
      case3.setAttribute("placeholder", "breeding");
      break;

    case "birthdate":
      resetKeywordPlaceholder();
      let case4 = document.querySelector("#keyword-input-0");
      case4.setAttribute("placeholder", "birthdate (e.g. July 8, 2019; +-7)");
      break;

    case "agentTypeCurDate":
      resetKeywordPlaceholder();

      let case6_0 = document.querySelector("#keyword-input-0");
      let case6_1 = document.querySelector("#keyword-input-1");
      let case6_2 = document.querySelector("#keyword-input-2");

      case6_0.setAttribute("placeholder", "Agent");
      case6_1.setAttribute("placeholder", "Doctype");
      case6_2.setAttribute("placeholder", "CurrentDate (e.g. July 8, 2019; +-7)");
      break;
  }
}

function removeElementsByClassName(className) {
  var elements = document.getElementsByClassName(className);
  while (elements.length > 0) {
    elements[0].parentNode.removeChild(elements[0]);
  }
}

function resetKeywordPlaceholder() {
  var keywordInputs = document.getElementsByClassName("keyword-input");
  for ( i = 0; i < keywordInputs.length; i++ ) {
    keywordInputs[i].placeholder = '';
  }
}

function isEmptyObject(obj) {
  var name;
  for (name in obj) {
    return false;
  }
  return true;
}

function trackInEditor(loc, data) {
  // inEditor[0] = location
  // inEditor[1] = data
  // inEditor[2] = doc.id
  
  if (loc == "marmosets") {
    inEditor[0] = "marmosets";
    inEditor[1] = data;
    inEditor[2] = data.name;
  } else if (loc == "mkturkdata") {
    inEditor[0] = "mkturkdata";
    inEditor[1] = data;
    if (data.Doctype == "images")
      inEditor[2] = data.Imagesdoc;
    else if (data.Doctype == "task")
      inEditor[2] = data.Taskdoc;
  } else if (loc == "mkturkfiles") {
    //handled in fetchFile();
    //inEditor[3] = metadata.contentType
  } else {
    console.error("Wrong Location");
  }
}

function jsonDiff(obj1, obj2) {
  var result = {};
  var change;

  for (var key in obj1) {
    if (typeof obj2[key] == "object" && typeof obj1[key] == "object") {
      change = jsonDiff(obj1[key], obj2[key]);
      if (isEmptyObject(change) === false) {
        result[key] = change;
      }
    } else if (obj2[key] != obj1[key]) {
      result[key] = obj2[key];
    }
  }
  return result;
}

updateBtn.addEventListener("click", ( event ) => {
  event.preventDefault();
  event.stopPropagation();

  //var diff = DeepDiff.noConflict();
  //var lhs = inEditor[1];
  //var rhs = editor.get();

  //var differences = diff(lhs, rhs);
  //console.log("diff:", differences);
  if (inEditor[0] == "marmosets" || inEditor[0] == "mkturkdata") {
    db.collection(inEditor[0]).doc(inEditor[2]).update(
      jsonDiff(inEditor[1], editor.get())
    ).then(()=>{
      console.log("Document successfully updated:", inEditor[2]);
    }).catch(error => {
      console.error("Error updating document:", error);
    });
  } else if (inEditor[0] == "mkturkfiles") {
    console.log(editor.get());
    let uploadFile = new Blob([JSON.stringify(editor.get(), null, 1)]);
    let metadata = {
      contentType: inEditor[3]
    };
    inEditor[2].put(uploadFile, metadata).then(snapshot => {
      console.log("Uploaded", snapshot);
    });
  } else {
    console.error("Location Error");
  } 
});

backBtn.addEventListener("click", event => {
  event.stopPropagation();
  event.preventDefault();
  console.log(previousPath[0]);
  listPrefixesAndItems(storageRef.child(previousPath[0]));
});

async function listPrefixesAndItems (ref) {

  backBtn.disabled = (ref.fullPath == "mkturkfiles") ? true: false;

  var pathArr = await ref.fullPath.split("/");
  console.log("pathArr:", pathArr);
  var metadataArray = new Array();
  var timeA, list, promises;
  previousPath[0] = "";

  for (var i = 0; i < pathArr.length - 1; i++) {
    previousPath[0] += pathArr[i] + "/";
  }
  console.log(previousPath[0]);
 
  // async function to load metadata into array
  async function loadMetadata (objectArray) {
    await objectArray.getMetadata().then(md => {
      metadataArray.push({
        name: md.name,
        contentType: md.contentType,
        fullPath: md.fullPath,
        size: md.size, 
        timeCreated: md.timeCreated
      });
    });
  }

  timeA = Date.now();
  list = await ref.listAll();

  list.prefixes.forEach(prefix => {
    metadataArray.push({
      name: prefix.name,
      contentType: "folder",
      fullPath: prefix.fullPath,
      size: "null"
    });
  });

  promises = list.items.map(loadMetadata);
  await Promise.all(promises);
  console.log("TIME:", Date.now() - timeA);

  displayStorageTable(metadataArray);
}

function displayStorageTable(metadataArray) {
  table.destroy();
  table = new Tabulator("#tabulator", {
    data: metadataArray,
    index: "name",
    responsiveLayout: true,
    layout: "fitColumns",
    resizableColumns: true,
    initialSort: [
      {column: "name", dir: "des"}
    ],
    columns: [
      {title: "<input id='select-all' type='checkbox' onchange='updateSelectAll()'/>", width: 15, headerSort: false}, 
      {title: "Name", field: "name"},
      {title: "Type", field: "contentType"},
      {title: "Path", field: "fullPath"},
      {title: "Size", field: "size"},
    ],
    selectable: true,
    selectableRangeMode: "click",
    rowDblClick: async function(e, row) {
      e.stopPropagation();
      if (row._row.data.contentType == "folder") {
        console.log(row._row.data.fullPath);
        listPrefixesAndItems(storageRef.child(row._row.data.fullPath));
      } else if (row._row.data.contentType.includes("text") ||
                 row._row.data.contentType.includes("json")) {
        
        destroyThreeObjects();

        editorContainer.style.zIndex = 3;
        updateBtn.style.zIndex = 3;
        canvasHolder.style.zIndex = 2;
        webglCanvas.style.zIndex = 1;

        fetchJson(storageRef.child(row._row.data.fullPath));
        inEditor[3] = row._row.data.contentType;
      } else if (row._row.data.contentType.includes("image")) {

        destroyThreeObjects();
        
        canvasHolder.style.zIndex = 3;
        editorContainer.style.zIndex = 2;
        updateBtn.style.zIndex = 2;
        webglCanvas.style.zIndex = 1;
        removeElementsByClassName("imageList");

        let fileRef = storageRef.child(row._row.data.fullPath);
        gallery.destroy();
        fetchImage(fileRef);
      } else if (row._row.data.contentType == "application/octet-stream" &&
                 row._row.data.name.includes(".glb")) {
        webglCanvas.style.zIndex = 3;
        canvasHolder.style.zIndex = 2;
        editorContainer.style.zIndex = 1;
        updateBtn.style.zIndex = 1;
        console.log("do face glb stuff");
        console.time("loadMesh");
        objectMesh = await loadMesh(row._row.data.fullPath);
        console.log("objectMesh:", objectMesh);
        console.timeEnd("loadMesh");

        console.time("init scene");
        await initThree();
        console.timeEnd("init scene");

        scene.add(objectMesh.scene);
        requestAnimationFrame(animate);
        renderer.render(scene, camera);

        function animate() {
          animationID = requestAnimationFrame(animate);
          renderer.render(scene, camera);
        }
      }
    },
    rowClick: async function(e, row) {
      e.stopPropagation();
      if (row._row.data.contentType == "folder") {
        console.log(row._row.data.fullPath);
      } else if (row._row.data.contentType.includes("text") ||
                 row._row.data.contentType.includes("json")) {
        
        destroyThreeObjects();

        editorContainer.style.zIndex = 3;
        updateBtn.style.zIndex = 3;
        canvasHolder.style.zIndex = 2;
        webglCanvas.style.zIndex = 1;

        fetchJson(storageRef.child(row._row.data.fullPath));
        inEditor[3] = row._row.data.contentType;
      } else if (row._row.data.contentType.includes("image")) {

        destroyThreeObjects();
        
        canvasHolder.style.zIndex = 3;
        editorContainer.style.zIndex = 2;
        updateBtn.style.zIndex = 2;
        webglCanvas.style.zIndex = 1;
        removeElementsByClassName("imageList");

        let fileRef = storageRef.child(row._row.data.fullPath);
        gallery.destroy();
        fetchImage(fileRef);
      } else if (row._row.data.contentType == "application/octet-stream" &&
                 row._row.data.name.includes(".glb")) {
        webglCanvas.style.zIndex = 3;
        canvasHolder.style.zIndex = 2;
        editorContainer.style.zIndex = 1;
        updateBtn.style.zIndex = 1;
        console.log("do face glb stuff");
        console.time("loadMesh");
        objectMesh = await loadMesh(row._row.data.fullPath);
        console.log("objectMesh:", objectMesh);
        console.timeEnd("loadMesh");

        console.time("init scene");
        await initThree();
        console.timeEnd("init scene");

        scene.add(objectMesh.scene);
        requestAnimationFrame(animate);
        renderer.render(scene, camera);

        function animate() {
          animationID = requestAnimationFrame(animate);
          renderer.render(scene, camera);
        }
      }
    },
    rowSelectionChanged: function(data, rows) {
      let isNotImage = !imageTypeTest(data) ? true: false;
      showSelectedImages.disabled = isNotImage;
      if (!isNotImage) {
        selectedImages = data;
      }
    },
  });
  filterValue.onkeyup = function () {
    table.setFilter("name", "like", filterValue.value);
  }
}

function updateSelectAll() {
  let selectAllBox = document.querySelector("#select-all");
  if (selectAllBox.checked == true) {
    table.selectRow();
  } else {
    table.deselectRow();
  }
}


showSelectedImages.addEventListener("click", async event => {

  destroyThreeObjects();
 
  canvasHolder.style.zIndex = 3;
  editorContainer.style.zIndex = 2;
  updateBtn.style.zIndex = 2;
  webglCanvas.style.zIndex = 1;

  removeElementsByClassName("imageList");
  for (var i = 0; i < selectedImages.length; i++) {
    await storageRef.child(selectedImages[i].fullPath).getDownloadURL().then(async url => {
      selectedImages[i].url = await url;
    });
    let img = document.createElement("img");
    img.src = selectedImages[i].url;
    let li = document.createElement("li");
    li.setAttribute("class", "imageList");
    li.appendChild(img);
    imageCanvas.appendChild(li);
  }
  console.log(selectedImages);
  gallery.destroy();
  gallery = new Viewer(document.getElementById("image-canvas"));
});



function fetchJson (fileRef) {
  fileRef.getDownloadURL().then(url => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = function () {
      let response = JSON.parse(xhr.responseText);

      editor.destroy();
      editor = new JSONEditor(editorContainer, editorOptions, response);
      inEditor[0] = "mkturkfiles";
      inEditor[1] = response;
      inEditor[2] = fileRef;
    }
    xhr.send();
  });
}

async function fetchImage (fileRef) {
  let img = document.createElement("img");
  await fileRef.getDownloadURL().then(async url => {
    img.src = await url;
  });
  let li = document.createElement("li");
  li.setAttribute("class", "imageList");
  li.appendChild(img);
  imageCanvas.appendChild(li);
  gallery = new Viewer(document.getElementById("image-canvas"));
}

function imageTypeTest(data) {
  if (data.length == 0 || data.length == 1) {
    return false;
  } else {
    for (var i = 0; i < data.length; i++) {
      if (!data[i].contentType.includes("image")) {
        return false;
      }
    }
    return true;
  }
}

downloadFileBtn.onclick = async function() {
  let row = table.getSelectedRows();
  let qryLocation = document.querySelector("#qry-loc-selector");

  if ( qryLocation.value == "mkturkfiles" && !row[0]._row.data.contentType.includes("folder") ) {
    console.log("yes");
    storageRef.child(row[0]._row.data.fullPath).getDownloadURL().then(async url => {
      //let fname = window.prompt("Save As..");
      //console.log("fname", fname);
      console.log("url", url);
      let res = await fetch(url);
      let blob = await res.blob();
      saveAs(blob, row[0]._row.data.name);
    });
  } else if ( qryLocation.value == "marmosets" ) {
    let docRef = marmosetsCollection.doc(row[0]._row.data.name);
    docRef.get().then(doc => {
      console.log(doc.data());
      let blob = new Blob([JSON.stringify(doc.data(), null, 1)], {type: "application/json; charset=utf-8"});
      let fname = row[0]._row.data.name;
      saveAs(blob, fname);
    });
  } else if (qryLocation.value == "mkturkdata" ) {
    var docName = row[0]._row.data.FirestoreDocRoot + "_" + row[0]._row.data.Doctype;
    let docRef = mkturkdataCollection.doc(docName);
    docRef.get().then(doc => {
      let blob = new Blob([JSON.stringify(doc.data(), null, 1)], {type: "application/json; charset=utf-8"});
      saveAs(blob, docName);
    });
  }
}


function destroyThreeObjects() {
  try {
    objectMesh = null;
    camera = null;
    controls = null;
    material = null;
    renderer = null;
    scene = null;
    lightPos = null;
    loader = null;
    light = null;
    cancelAnimationFrame(animationID);
    console.log( "ThreeJS Objects destroyed" );
  } catch ( error ) {
    console.error( "Error:", error );
  }
}

var renderer, camera, scene, controls, material, model, modelPos, light;
const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );

async function initThree () {
  console.time("start");
  renderer = new THREE.WebGLRenderer({ canvas: webglCanvas, antialias: true });

  /* FROM YOUNAH'S THREEJS SETUP PARAM */
  //renderer.setPixelRatio(window.devicePixelRatio);
  //renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0xFFFFFF);
  /* YOUNAH'S THREEJS SETUP PARAM (END)*/



  //renderer.setClearColor( 0x7F7F7F );
  renderer.physicallyCorrectLight = true;
  renderer.toneMappingExposure = 10;
  renderer.gammaOutput = true;
  renderer.gammaFactor = 2.2;

  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera( 45, webglCanvas.width/webglCanvas.height, 0.1, 2000 );
  cameraPos = new THREE.Vector3(0, 0, 10);
  camera.position.set( cameraPos.x, cameraPos.y, cameraPos.z );

  scene.add(camera);

  lightPos = new THREE.Vector3(0, 2, 0);
  directionalLight.position.set( lightPos.x, lightPos.y, lightPos.z );

  scene.add( directionalLight );

  // ambient light
  light = new THREE.AmbientLight( 0x404040, 0.1 );
  scene.add( light );

  controls = new THREE.OrbitControls( camera, renderer.domElement );
  controls.target = new THREE.Vector3( 0, 0, 0 );

  console.timeEnd("start");
  console.log("scene:", scene);
}

var loader, material;
async function loadMesh(filePath) {

  try {
    var meshRef = await storageRef.child(filePath);
    var meshUrl = await meshRef.getDownloadURL().catch( e => console.error("Error:", e) );

    loader = new THREE.GLTFLoader();

    return new Promise( function (resolve, reject) {
      try {
        loader.load(meshUrl, function(gltfmesh){
          gltfmesh.scene.traverse(child => {
            if (child.material) {
              console.log("child material:", child.material);
              material = 
                new THREE.MeshPhongMaterial({ color: 0xFF0000, map: child.material.map });
              child.material = material;
              child.material.needsUpdate = true;
            }
          });
          resolve(gltfmesh);
        });
      } catch (e) {
        console.error("Error:", e);
      }
    });

  } catch (e) {
    console.error("Error:", e);
  }
}

/* --- HELPER FUNCTIONS END --- */

async function findUSBDevice ( event ) {
  if ( event.type == "AutoConnect" || event.type == "Reconnect") {
    //devices = await navigator.usb.getDevices();
    //console.log ("devices:", devices);
    //ports = devices.map ( device => new serial.Port ( device ) );
    //console.log ("ports:", ports);
    //if ( ports.length == 0 ) {
      //port.statusTextConnect = "NO USB DEVICE";
      //console.log ( port.statusTextConnect );
    //} else {
      //var statusText = "";

      //if ( ports.length == 0 ) {
        //port.statusTextConnect = "NO USB DEVICE AUTO FOUND";
        //console.log ( port.statusTextConnect );
      //} else {
        //var statusText = "";

        //if ( event.type == "AutoConnect" ) {
          //statusText = "AUTO-CONNECTED USB DEVICE ON PAGE LOAD";
        //} else if ( event.type == "Reconnect" ){
          //statusText = "RECONNECTED USB DEVICE";
        //}

        //port = ports[0];
      //}

      //try {
        //await port.connect();
      //} catch ( error ) {
        //console.error ( error );
      //}

      //port.statusTextConnect = statusText;
      //console.log ( port.statusTextConnect );
    try {
      const filters = [
        { "vendorId": 0x2341 },
      ];

      device = await navigator.usb.requestDevice({ "filters": filters });
      console.log("device:", device);
      port = new serial.Port ( device );
      console.log("port:", port);

      await port.connect();
      port.statusTextConnect = "USB DEVICE AUTO CONNECTED";
      console.log ( port.statusTextConnect );
    } catch ( error ) {
      console.log ( error );  
    }   
  }

  if ( event.type == "pointerup" || event.type == "touchend" || 
    event.type == "mouseup" ) {
    event.preventDefault();

    try {
      const filters = [
        { "vendorId": 0x2341, "productId": 0x8036 },
        { "vendorId": 0x2341, "productId": 0x8037 }
      ];

      device = await navigator.usb.requestDevice({ "filters": filters });
      port = new serial.Port ( device );

      await port.connect();
      port.statusTextConnect = "USB DEVICE CONNECTED BY USER ACTION";
      console.log ( port.statusTextConnect );
    } catch ( error ) {
      console.log ( error );
    }
    waitforClick.next(1);
  }

}

serial.Port = function ( device ) {
  this.device_ = device;
};

serial.Port.prototype.connect = async function() {
  //console.log("this.device_:", this.device_);
  await this.device_.open();

  if ( this.device_.configuration === null ) {
    return this.device_.selectConfiguration(1);
  }

  await this.device_.claimInterface(2);
  await this.device_.selectAlternateInterface(2,0);
  await this.device_.controlTransferOut({
    "requestType": "class",
    "recipient": "interface",
    "request": 0x22,
    "value": 0x01,
    "index": 0x02,
  });

  this.connected = true;
  inRangeTest();
  readLoop ( this );
};

serial.Port.prototype.onReceive = async data => {
  let textDecoder = new TextDecoder();

  port.statusTextReceived = "RECEIVED CHAR <-- USB: " 
    + textDecoder.decode ( data );
  
  console.log ( "port.statusTextReceived:", port.statusTextReceived );

  var tagStart = port.statusTextReceived.indexOf( "{tag", 0 );
  if ( tagStart > 0 ) {
    var tagEnd = port.statusTextReceived.indexOf( "}", 0 );
  }

  let rfid = port.statusTextReceived.slice( tagStart + 4, tagEnd );

  statusCircle.style.backgroundColor = "green";

  if (rfid != prevRFIDTag || Date.now() - lastReceived > 3000) {
    document.querySelector("#keyword-input-0").value = rfid;
    document.querySelector("#field-selector").value = "rfid";
    prevRFIDTag = rfid;
    
    let qryLocation = document.querySelector("#qry-loc-selector").value;
    let field = document.querySelector("#field-selector").value;
    let keyword0 = document.querySelector("#keyword-input-0").value;
    let keyword1 = document.querySelector("#keyword-input-1").value;
    let keyword2 = document.querySelector("#keyword-input-2").value;

    let keywords = [keyword0, keyword1, keyword2];

    await mkquery(qryLocation, field, keywords);

    displayJson(table.rowManager.rows[0].data);
    trackInEditor("marmosets", table.rowManager.rows[0].data);
  }
  lastReceived = Date.now();
};

serial.Port.prototype.onReceiveError = error => {
  console.error ( "onReceiveError:", error );
};

serial.Port.prototype.disconnect = async function() {
  await this.device_.controlTransferOut({
    "requestType": "class",
    "recipient": "interface",
    "request": 0x22,
    "value": 0x00,
    "index": 0x02
  });

  await this.device_.close();
  console.log("after close device:", this.device_);

  port.statusTextConnect = "USB DEVICE DISCONNECTED";
  console.log( port.statusTextConnect );
};

async function readLoop ( port ) {
  try {
    let result = await port.device_.transferIn(5, 128);
    port.onReceive ( result.data );
    readLoop ( port );
  } catch ( error ) {
    port.onReceiveError ( error );
  }
}

function pingUSB () {
  if ( port.connected == true ) {
    var pingdur = 100;
    var msgstr = "{" + pingdur.toString() + "}";
    let textEncoder = new textEncoder();
    port.device_.trnasferOut( 4, textEncoder.encode ( msgstr ) );

    port.statusTextSent = "Pinging! Transferred Char --> USB:" + msgstr;
    console.log ( port.statusTextSent );

    pingTimer = setTimeout ( () => {
      clearTimeout ( pingTimer )
      pingUSB()}, 5000 )
  }
}

function inRangeTest() {

  if (port.connected && (Date.now() - lastReceived > 1000)) {
    console.log(port.connected);
    console.log("Status: (RED) No Tag in Range");
    statusCircle.style.backgroundColor = "red";
  }

  if (port.connected) {
    setTimeout(inRangeTest, 1500);
  }
}
