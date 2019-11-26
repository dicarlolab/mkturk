export class Mkquery {
  public rfidMode: boolean;

  constructor() {
    this.rfidMode = false;
  };

  public mkquery() {
    let queryString = this._mkquery("birthdate", "1/1/2015; +-100");
    console.log(queryString);
  }

  private _mkquery(field: string, keyword: string) {
    if (keyword.toLowerCase().includes("date")) {
      const DAY_TO_MS: number = 86400000;
      let dateStr: string[];
      let refDate: Date;

      dateStr = keyword.split(";");
      dateStr.length === 2 ? dateStr[1].trim() : dateStr[1] = "";
      refDate = new Date(dateStr[0]);

      if (dateStr[1].includes("+-")) {
        let upperDate: Date;
        let lowerDate: Date;
        let range: number;
        let queryStr: string;

        range = Number(dateStr[1].substring(2, dateStr[1].length));
        upperDate = new Date(refDate.getTime() + range * DAY_TO_MS);
        lowerDate = new Date(refDate.getTime() - range * DAY_TO_MS);
        queryStr = ".where(" + `"${field}` + ", '>=', " + "new Date("
          + String(lowerDate.getTime()) + ")).where(" + `"${field}"`
          + ", '<=', " + "new Date(" + String(upperDate.getTime()) + "))";

        return queryStr;
      }
    }
  }
}