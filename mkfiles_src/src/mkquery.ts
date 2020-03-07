import * as firebase from "firebase/app";
import "firebase/functions";

const functions = firebase.functions();
const listTables = functions.httpsCallable('listTables');
const bqQuery = functions.httpsCallable('bqQuery');

export class Mkquery {
  public rfidMode: boolean;
  
  constructor() {
    this.rfidMode = false;

  };
  /**
   * Connects and returns query strings
   * 
   * @param {{field: string, keyword: string}[]} queryParams
   * @returns {string} returns a string of connected query strings
   */
  public mkquery(queryParams: {field: string, keyword: string}[]) {
    let queryString: string;
    
    queryString = "";
    queryParams.forEach(queryParam => {
      queryString += this._mkquery(queryParam.field, queryParam.keyword);
    });

    return queryString;
  }
  
  /**
   * Generates and returns individual query string for a given field and keyword
   * 
   * @param {string} field
   * @param {string} keyword
   * @returns {string} returns generated query string
   * @private
   */
  private _mkquery(field: string, keyword: string) {
    if (field.toLowerCase().includes("date")) {
      const DAY_TO_MS: number = 86400000;
      let dateStr: string[];
      let refDate: Date;

      dateStr = keyword.split(";");
      dateStr.length === 2 ? dateStr[1] = dateStr[1].trim() : dateStr[1] = "";
      refDate = new Date(dateStr[0]);

      if (dateStr[1].includes("+-")) {
        let upperDate: Date;
        let lowerDate: Date;
        let range: number;
        let queryStr: string;

        range = Number(dateStr[1].substring(2, dateStr[1].length));
        upperDate = new Date(refDate.getTime() + range * DAY_TO_MS);
        lowerDate = new Date(refDate.getTime() - range * DAY_TO_MS);
        queryStr = ".where(" + `"${field}"` + ", '>=', " + "new Date("
          + String(lowerDate.getTime()) + ")).where(" + `"${field}"`
          + ", '<=', " + "new Date(" + String(upperDate.getTime()) + "))";

        return queryStr;
      }

      else if (dateStr[1].includes("+") && !dateStr[1].includes("-")) {
        let upperDate: Date;
        let range: number;
        let queryStr: string;

        range = Number(dateStr[1].substring(1, dateStr[1].length));
        upperDate = new Date(refDate.getTime() + range * DAY_TO_MS);
        queryStr = ".where(" + `"${field}"` + ", '>=', " + "new Date("
          + String(refDate.getTime()) + ")).where(" + `"${field}"`
          + ", '<=', " + "new Date(" + String(upperDate.getTime()) + "))";

        return queryStr;
      }

      else if (dateStr[1].includes("-") && !dateStr[1].includes("+")) {
        let lowerDate: Date;
        let range: number;
        let queryStr: string;

        range = Number(dateStr[1].substring(1, dateStr[1].length));
        lowerDate = new Date(refDate.getTime() + range * DAY_TO_MS);
        queryStr = ".where(" + `"${field}"` + ", '>=', " + "new Date("
          + String(lowerDate.getTime()) + ")).where(" + `"${field}"`
          + ", '<=', " + "new Date(" + String(refDate.getTime()) + "))";

        return queryStr;
      }

      else if ( !(dateStr[1].includes("+") || dateStr[1].includes("-")) ) {
        let upperDate: Date;
        let queryStr: string;
        
        upperDate = new Date(refDate.getTime() + DAY_TO_MS);
        queryStr = ".where(" + `"${field}"` + ", '>=', " + "new Date("
          + String(refDate.getTime()) + ")).where(" + `"${field}"` + ", '<=', "
          + "new Date(" + String(upperDate.getTime()) + "))";

        return queryStr;
      }
    }
    else {
      let queryStr: string;

      queryStr = ".where(" + `"${field}"` + ", '==', " + `"${keyword}"` + ")";

      return queryStr;
    }
  }



  public async decodeQuery(query: firebase.firestore.Query) {
    async function loadData(doc: any, arr: any[]) {
      await arr.push(doc.data());
    }

    let arr = new Array();

    await query.get().then(async querySnapshot => {
      if (!querySnapshot.empty) {
        let promises = querySnapshot.docs.map(doc => loadData(doc, arr));
        await Promise.all(promises);
      }
      
      else {
        console.log("Found No Documents");
        alert("Found No Documents");
      }
    }).catch(e => {
      console.error("Error getting documents:", e);
    });

    return arr;
  }

  // public async mkbquery(agent: string, date: string) {
  //   let ret = await listTables('fixationdata');
  //   let tableMetadataList = ret.data;
  //   let tableList: any[] = [];
  //   tableMetadataList.forEach((tableMetadata: any) => {
  //     tableList.push(tableMetadata.tableReference.tableId);
  //   });
  //   console.log(tableList);
  // }
  
  public mkbquery(dataset: string, agent: string, date: string) {
    let queryDateLower: string | Date = new Date(date);
    let queryDateUpper: string | Date = new Date(date);
    queryDateUpper.setDate(queryDateUpper.getDate() + 1);
    queryDateLower = queryDateLower.toJSON().split('T')[0];
    queryDateUpper = queryDateUpper.toJSON().split('T')[0];

    let str = `SELECT *
              FROM \`sandbox-ce2c5.${dataset}.${agent}\`
              WHERE timestamp BETWEEN '${queryDateLower}' AND '${queryDateUpper}'
              ORDER BY timestamp ASC`;
    console.log("querystr", str);
    return str;
  }

  public async decodeBigQuery(queryStr: string) {
    let test = await bqQuery(queryStr);
    return test;
  }
  
}