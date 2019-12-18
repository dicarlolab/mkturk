import { Mkchart } from "./mkmedia";

export class Mkquery {
  public rfidMode: boolean;
  public mkc: Mkchart;
  
  constructor() {
    this.rfidMode = false;
    this.mkc = new Mkchart();
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
}