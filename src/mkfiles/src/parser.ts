import * as math from 'mathjs';
import cloneDeep from 'lodash.clonedeep';

export class ParseEngine {

  constructor() {

  }

  private parse(type: string, object: any) {

  }

  public generateParamObject(obj: any) {
    let generatedParamObj = {
      CAMERAS: {},
      LIGHTS: {},
      OBJECTS: {},
      IMAGES: {}
    };

    let sample = this.normal(0, 1, 10);
    console.log('sample', sample);

    let userObj = cloneDeep(obj);

    for (let key in userObj) {
      if (userObj.hasOwnProperty(key)) {
        if (key == 'CAMERAS') {
          // generatedParamObj.CAMERAS = this.genParamObj(key, userObj[key]);
          console.log('key', key, 'Obj[CAMERAS]:', userObj[key])
          this.genParamObj('CAMERAS', userObj[key]);
        } else if (key == 'LIGHTS') {
          // generatedParamObj.LIGHTS = this.genParamObj(key, userObj[key]);
          console.log('key', key, 'Obj[LIGHTS]:', userObj[key])
          this.genParamObj('LIGHTS', userObj[key]);
        } else if (key == 'OBJECTS') {
          // generatedParamObj.OBJECTS = this.genParamObj(key, userObj[key]);
          console.log('key', key, 'Obj[OBJECTS]:', userObj[key])
          this.genParamObj('OBJECTS', userObj[key]);
        } else if (key == 'IMAGES') {
          // generatedParamObj.IMAGES = this.genParamObj(key, userObj[key]);
          console.log('key', key, 'Obj[IMAGES]:', userObj[key])
        }
      }
    }

    console.log('userObjComplete', userObj);

  }

  private genParamObj(type: string, obj: any) {
    
    if (type == 'CAMERAS') {
      for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
          obj[key].position = this.parseAndVectorize(obj[key].position);
          obj[key].targetInches = this.parseAndVectorize(obj[key].targetInches);
        }
      }
    } else if (type == 'LIGHTS') {
      for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
          obj[key].position = this.parseAndVectorize(obj[key].position);
        }
      }
    } else if (type == 'OBJECTS') {
      for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
          obj[key].positionInches = this.parseAndVectorize(obj[key].positionInches);
          obj[key].rotationDegrees = this.parseAndVectorize(obj[key].rotationDegrees);
        }
      }
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

  private parseAndVectorize(obj: any) {
    let tmp: any = {x: [], y: [], z: []};

    for (let axis in obj) {
      if (obj.hasOwnProperty(axis)) {
        
        obj[axis].forEach((row: any) => {
          console.log('row', row);
          if (Object.prototype.toString.call(row) === '[object String]') {
            console.log('string row', row);
            let recipe = row.split('/');
            if (recipe[0] == 'normal' || recipe[0] == 'n') {
              let mu = Number(recipe[1].split(',')[0]);
              let sigma = Number (recipe[1].split(',')[1]);
              let n = Number(recipe[2]);
              let sample = this.normal(mu, sigma, n) as number[];
              tmp[axis].push(...sample);
            } else if (recipe[0] == 'uniform' || recipe[0] == 'u') {
              let min = Number(recipe[1].split(',')[0]);
              let max = Number(recipe[1].split(',')[1]);
              let size = [Number(recipe[2])];
              let sample = math.random(size, min, max);
              tmp[axis].push(...sample);
            } else if (recipe[0] == 'range' || recipe[0] == 'r') {
              let start = Number(recipe[1].split(',')[0]);
              let end = Number(recipe[1].split(',')[1]);
              let step = Number(recipe[2]);
              let range = math.range(start, end, step);
              range.forEach(value => {
                tmp[axis].push(Number(parseFloat(value).toPrecision(4)));
              });
            } else if (recipe[0] == 'linspace' || recipe[0] == 'l') {
              let start = Number(recipe[1].split(',')[0]);
              let end = Number(recipe[1].split(',')[1]);
              let num = Number(recipe[2]);
              let step = (end - start) / (num - 1);
              let linspace = math.range(start, end, step, true);
              console.log('linspace', linspace);
              linspace.forEach(value => {
                tmp[axis].push(Number(parseFloat(value).toPrecision(4)));
              });
            }
          } else {
            if (isNaN(row) == false) {
              tmp[axis].push(row);
            }
          }
        });
      }
    }
    return tmp;
  }
}

