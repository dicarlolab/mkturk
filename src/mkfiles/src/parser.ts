import * as math from 'mathjs';
import cloneDeep from 'lodash.clonedeep';
import isPlainObject from 'lodash/isPlainObject';
import isArray from 'lodash/isArray';

export class ParseEngine {

  constructor() {

  }

  public generateParamObject(obj: any) {
    
    let scheme = 'expand';
    let userObj = cloneDeep(obj);
    console.log(userObj);
    let totalLen = 1;
    let minLen = 1;
    let maxLen = 1;
    let path = [
      'CAMERAS', 'LIGHTS',
      'OBJECTS', 'IMAGES',
      'durationMS', 'IMAGEFILTERS',
      'OBJECTFILTERS'
    ];

    // Parse and generate based on smart text
    path.forEach((module, index) => {
      if (isArray(userObj[module]) && userObj[module].length > 0) {
        userObj[module] = this.parseAndGenerate2(userObj[module]);
        totalLen *= userObj[module].length;
        minLen = (userObj[module].length > minLen) ? minLen : userObj[module].length;
        maxLen = (maxLen > userObj[module].length) ? maxLen : userObj[module].length;
      } else if (isPlainObject(userObj[module])) {
        for (let key in userObj[module]) {
          if (isArray(userObj[module][key]) && userObj[module][key].length > 0) {
            userObj[module][key] = this.parseAndGenerate2(userObj[module][key]);
            totalLen *= userObj[module][key].length;
            minLen = (userObj[module][key].length > minLen) ? minLen : userObj[module][key].length;
            maxLen = (maxLen > userObj[module][key].length) ? maxLen : userObj[module][key].length;
          } else if (isPlainObject(userObj[module][key])) {
            for (let key2 in userObj[module][key]) {
              if (isArray(userObj[module][key][key2]) && userObj[module][key][key2].length > 0) {
                userObj[module][key][key2] = this.parseAndGenerate2(userObj[module][key][key2]);
                totalLen *= userObj[module][key][key2].length;
                minLen = (userObj[module][key][key2].length > minLen) ? minLen : userObj[module][key][key2].length;
                maxLen = (maxLen > userObj[module][key][key2].length) ? maxLen : userObj[module][key][key2].length;
              } else if (isPlainObject(userObj[module][key][key2])) {
                for (let key3 in userObj[module][key][key2]) {
                  if (isArray(userObj[module][key][key2][key3]) && userObj[module][key][key2][key3].length > 0) {
                    userObj[module][key][key2][key3] = this.parseAndGenerate2(userObj[module][key][key2][key3]);
                    totalLen *= userObj[module][key][key2][key3].length;
                    minLen = (userObj[module][key][key2][key3].length > minLen) ? minLen : userObj[module][key][key2][key3].length;
                    maxLen = (maxLen > userObj[module][key][key2][key3].length) ? maxLen : userObj[module][key][key2][key3].length;
                  }
                }
              }
            }
          }
        }
      }
    });

    if (scheme == 'vectorize') {
      path.forEach((module, index) => {
        if (isArray(userObj[module]) && userObj[module].length > 1) {
          let tmp = [];
          for (let i = 0; i < totalLen; i++) {
            tmp.push(userObj[module][i % userObj[module].length]);
          }
          userObj[module] = tmp;
        } else if (isPlainObject(userObj[module])) {
          for (let key in userObj[module]) {
            if (isArray(userObj[module][key]) && userObj[module][key].length > 1) {
              let tmp = [];
              for (let i = 0; i < totalLen; i++) {
                tmp.push(userObj[module][key][i % userObj[module][key].length]);
              }
              userObj[module][key] = tmp;
            } else if (isPlainObject(userObj[module][key])) {
              for (let key2 in userObj[module][key]) {
                if (isArray(userObj[module][key][key2]) && userObj[module][key][key2].length > 1) {
                  let tmp = [];
                  for (let i = 0; i < totalLen; i++) {
                    tmp.push(userObj[module][key][key2][i % userObj[module][key][key2].length]);
                  }
                  userObj[module][key][key2] = tmp;
                } else if (isPlainObject(userObj[module][key][key2])) {
                  for (let key3 in userObj[module][key][key2]) {
                    if (isArray(userObj[module][key][key2][key3]) && userObj[module][key][key2][key3].length > 1) {
                      let tmp = [];
                      for (let i = 0; i < totalLen; i++) {
                        tmp.push(userObj[module][key][key2][key3][i % userObj[module][key][key2][key3].length]);
                      }
                      userObj[module][key][key2][key3] = tmp;
                    }
                  }
                }
              }
            }
          }
        }
      });  
    } else if (scheme == 'expand') {
      path.forEach((module, index) => {
        if (
          isArray(userObj[module])
          && userObj[module].length > 1
          && userObj[module].length != maxLen
        ) {
          let err = new Error(`Length Mismatch: ${module}.length=${userObj[module].length} != maxLen=${maxLen}`);
          alert(err.message);
          throw err;
          
        } else if (isPlainObject(userObj[module])) {
          for (let key in userObj[module]) {
            if (
              isArray(userObj[module][key])
              && userObj[module][key].length > 1
              && userObj[module][key].length != maxLen
            ) {
              let err = new Error(`Length Mismatch: ${module}[${key}].length=${userObj[module][key].length} != maxLen=${maxLen}`);
              alert(err.message);
              throw err;
            } else if (isPlainObject(userObj[module][key])) {
              for (let key2 in userObj[module][key]) {
                if (
                  isArray(userObj[module][key][key2])
                  && userObj[module][key][key2].length > 1
                  && userObj[module][key][key2].length != maxLen
                ) {
                  let err = new Error(`Length Mismatch: ${module}[${key}][${key2}].length=${userObj[module][key][key2].length} != maxLen=${maxLen}`);
                  alert(err.message);
                  throw err;
                } else if (isPlainObject(userObj[module][key][key2])) {
                  for (let key3 in userObj[module][key][key2]) {
                    if (
                      isArray(userObj[module][key][key2][key3])
                      && userObj[module][key][key2][key3].length > 1
                      && userObj[module][key][key2][key3] != maxLen
                    ) {
                      let err = new Error(`Length Mismatch: ${module}[${key}][${key2}][${key3}].length=${userObj[module][key][key2][key3].length} != maxLen=${maxLen}`);
                      alert(err.message);
                      throw err;
                    }
                  }
                }
              }
            }
          }
        }
      });
    }
    // path.forEach((module, index) => {
    //   if (isArray(userObj[module]) && userObj[module].length > 1) {
    //     let tmp = [];
    //     for (let i = 0; i < totalLen; i++) {
    //       tmp.push(userObj[module][i % userObj[module].length]);
    //     }
    //     userObj[module] = tmp;
    //   } else if (isPlainObject(userObj[module])) {
    //     for (let key in userObj[module]) {
    //       if (isArray(userObj[module][key]) && userObj[module][key].length > 1) {
    //         let tmp = [];
    //         for (let i = 0; i < totalLen; i++) {
    //           tmp.push(userObj[module][key][i % userObj[module][key].length]);
    //         }
    //         userObj[module][key] = tmp;
    //       } else if (isPlainObject(userObj[module][key])) {
    //         for (let key2 in userObj[module][key]) {
    //           if (isArray(userObj[module][key][key2]) && userObj[module][key][key2].length > 1) {
    //             let tmp = [];
    //             for (let i = 0; i < totalLen; i++) {
    //               tmp.push(userObj[module][key][key2][i % userObj[module][key][key2].length]);
    //             }
    //             userObj[module][key][key2] = tmp;
    //           } else if (isPlainObject(userObj[module][key][key2])) {
    //             for (let key3 in userObj[module][key][key2]) {
    //               if (isArray(userObj[module][key][key2][key3]) && userObj[module][key][key2][key3].length > 1) {
    //                 let tmp = [];
    //                 for (let i = 0; i < totalLen; i++) {
    //                   tmp.push(userObj[module][key][key2][key3][i % userObj[module][key][key2][key3].length]);
    //                 }
    //                 userObj[module][key][key2][key3] = tmp;
    //               }
    //             }
    //           }
    //         }
    //       }
    //     }
    //   }
    // });

    console.log('userObj', userObj, 'totalLen:', totalLen);
    return userObj;
  }

  private genParamObj(type: string, obj: any) {
    
    if (type == 'CAMERAS') {
      for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
          obj[key].position = this.vectorize(obj[key].position, 'cartesianObj');
          obj[key].targetInches = this.vectorize(obj[key].targetInches, 'cartesianObj');
          obj[key].visible = this.vectorize(obj[key].visible, 'array');
        }
      }
    } else if (type == 'LIGHTS') {
      for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
          obj[key].position = this.vectorize(obj[key].position, 'cartesianObj');
          obj[key].intensity = this.vectorize(obj[key].intensity, 'array');
          obj[key].visible = this.vectorize(obj[key].visible, 'array');
        }
      }
    } else if (type == 'OBJECTS') {
      for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
          obj[key].positionInches = this.vectorize(obj[key].positionInches, 'cartesianObj');
          obj[key].rotationDegrees = this.vectorize(obj[key].rotationDegrees, 'cartesianObj');
          obj[key].sizeInches = this.vectorize(obj[key].sizeInches, 'array');
          obj[key].material.opacity = this.vectorize(obj[key].material.opacity, 'array');
          obj[key].visible = this.vectorize(obj[key].visible, 'array');
        }
      }
    } else if (type == 'IMAGES') {
      obj.imageidx = this.vectorize(obj.imageidx, 'array');
    }
  }

  private normal(mu: number, sigma: number, n: number) {
    let u1 = math.random([n]);
    let u2 = math.random([n]);

    let R_sq = math.multiply(-2, math.log(u1));
    let theta = math.multiply(2 * math.pi, u2);

    let z1 = math.dotMultiply(math.sqrt(R_sq as math.Matrix), math.cos(theta as math.Matrix));
    let sample = math.add(mu, math.multiply(z1, sigma));

    return sample;
  }

  private parseAndGenerate2 (row: any[]) {
    let sample: any;
    
    if (Object.prototype.toString.call(row[0]) === '[object String]') {
      let recipe = row[0].split('/');
      if (recipe[0] == 'normal' || recipe[0] == 'n') {
        console.log('row:', row);
        console.log('recipe:', recipe);
        let mu = Number(recipe[1].split(',')[0]);
        let sigma = Number (recipe[1].split(',')[1]);
        let n = Number(recipe[2]);
        sample = this.normal(mu, sigma, n) as number[];
        console.log(sample);
      } else if (recipe[0] == 'uniform' || recipe[0] == 'u') {
        let min = Number(recipe[1].split(',')[0]);
        let max = Number(recipe[1].split(',')[1]);
        let size = [Number(recipe[2])];
        sample = math.random(size, min, max);
      } else if (recipe[0] == 'range' || recipe[0] == 'r') {
        let start = Number(recipe[1].split(',')[0]);
        let end = Number(recipe[1].split(',')[1]);
        let step = Number(recipe[2]);
        let range = math.range(start, end, step);
        sample = [];
        range.forEach(value => {
          sample.push(Number(parseFloat(value).toPrecision(4)));
        });
      } else if (recipe[0] == 'linspace' || recipe[0] == 'l') {
        let start = Number(recipe[1].split(',')[0]);
        let end = Number(recipe[1].split(',')[1]);
        let num = Number(recipe[2]);
        let step = (end - start) / (num - 1);
        let linspace = math.range(start, end, step, true);
        sample = [];
        linspace.forEach(value => {
          sample.push(Number(parseFloat(value).toPrecision(4)));
        });
      } else if (recipe[0] == 'movie' || recipe[0] == 'm') {
        let list = recipe[1].split(',');
        let tmp: any[] = [];
        list.forEach((value: string) => {
          tmp.push(Number(parseFloat(value).toPrecision(4)));
        });
        sample = [];
        sample.push(tmp);
      } else {
        let list = recipe[0].split(',');
        sample = [];
        list.forEach((value: string) => {
          sample.push(Number(parseFloat(value).toPrecision(4)));
        });
      }
    } else {
      return row;
    }
    // else {
    //   if (isNaN(row[0]) == false) {
    //     console.log('single number', row);
    //     sample = [];
    //     sample.push(row);
    //   }
    // }

    return sample;
  }

  private parseAndGenerate(row: any) {
    let sample: any;
    if (Object.prototype.toString.call(row) === '[object String]') {
      let recipe = row.split('/');
      if (recipe[0] == 'normal' || recipe[0] == 'n') {
        console.log('row:', row);
        let mu = Number(recipe[1].split(',')[0]);
        let sigma = Number (recipe[1].split(',')[1]);
        let n = Number(recipe[2]);
        sample = this.normal(mu, sigma, n) as number[];
      } else if (recipe[0] == 'uniform' || recipe[0] == 'u') {
        let min = Number(recipe[1].split(',')[0]);
        let max = Number(recipe[1].split(',')[1]);
        let size = [Number(recipe[2])];
        sample = math.random(size, min, max);
      } else if (recipe[0] == 'range' || recipe[0] == 'r') {
        let start = Number(recipe[1].split(',')[0]);
        let end = Number(recipe[1].split(',')[1]);
        let step = Number(recipe[2]);
        let range = math.range(start, end, step);
        sample = [];
        range.forEach(value => {
          sample.push(Number(parseFloat(value).toPrecision(4)));
        });
      } else if (recipe[0] == 'linspace' || recipe[0] == 'l') {
        let start = Number(recipe[1].split(',')[0]);
        let end = Number(recipe[1].split(',')[1]);
        let num = Number(recipe[2]);
        let step = (end - start) / (num - 1);
        let linspace = math.range(start, end, step, true);
        sample = [];
        linspace.forEach(value => {
          sample.push(Number(parseFloat(value).toPrecision(4)));
        });
      } else if (recipe[0] == 'movie' || recipe[0] == 'm') {
        let list = recipe[1].split(',');
        let tmp: any[] = [];
        list.forEach((value: string) => {
          tmp.push(Number(parseFloat(value).toPrecision(4)));
        });
        sample = [];
        sample.push(tmp);
      } else {
        let list = recipe[0].split(',');
        sample = [];
        list.forEach((value: string) => {
          sample.push(Number(parseFloat(value).toPrecision(4)));
        });
      }
    } else {
      if (isNaN(row) == false) {
        console.log('single number', row);
        sample = [];
        sample.push(row);
      }
    }

    return sample;
  }

  private vectorize(obj: any, type: string) {
    let tmp: any;
    if (type == 'array') {
      tmp = [];
      obj.forEach((row: any) => {
        tmp.push(...this.parseAndGenerate(row));
      });
    } else if (type == 'cartesianObj') {
      
      tmp = {x: [], y: [], z: []};

      let tmp2: any = {x: [], y: [], z: []};

      for (let axis in obj) {
        if (obj.hasOwnProperty(axis)) {
          obj[axis].forEach((row: any) => {
            tmp2[axis].push(...this.parseAndGenerate(row));
          });
        }
      }

      if (!(tmp2.x.length == tmp2.y.length && tmp2.y.length == tmp2.z.length)) {
        tmp2.x.forEach((x: number) => {
          tmp2.y.forEach((y: number) => {
            tmp2.z.forEach((z: number) => {
              tmp.x.push(x);
              tmp.y.push(y);
              tmp.z.push(z);
            });
          });
        });
      } else {
        tmp.x = tmp2.x;
        tmp.y = tmp2.y;
        tmp.z = tmp2.z;
      }
    }
    return tmp;
  }
}

