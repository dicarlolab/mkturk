import * as math from 'mathjs';
import cloneDeep from 'lodash.clonedeep';

export class ParseEngine {

  constructor() {

  }

  public generateParamObject(obj: any) {
    let userObj = cloneDeep(obj);
    for (let key in userObj) {
      if (userObj.hasOwnProperty(key)) {
        if (key == 'CAMERAS') {
          // generatedParamObj.CAMERAS = this.genParamObj(key, userObj[key]);
          // console.log('key', key, 'Obj[CAMERAS]:', userObj[key])
          this.genParamObj('CAMERAS', userObj[key]);
        } else if (key == 'LIGHTS') {
          // generatedParamObj.LIGHTS = this.genParamObj(key, userObj[key]);
          // console.log('key', key, 'Obj[LIGHTS]:', userObj[key])
          this.genParamObj('LIGHTS', userObj[key]);
        } else if (key == 'OBJECTS') {
          // generatedParamObj.OBJECTS = this.genParamObj(key, userObj[key]);
          // console.log('key', key, 'Obj[OBJECTS]:', userObj[key])
          this.genParamObj('OBJECTS', userObj[key]);
        } else if (key == 'IMAGES') {
          // generatedParamObj.IMAGES = this.genParamObj(key, userObj[key]);
          // console.log('key', key, 'Obj[IMAGES]:', userObj[key]);
          this.genParamObj('IMAGES', userObj[key]);
        }
      }
    }
    // console.log('userObjComplete', userObj);
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

  private parseAndGenerate(row: any) {
    let sample: any;
    if (Object.prototype.toString.call(row) === '[object String]') {
      let recipe = row.split('/');
      if (recipe[0] == 'normal' || recipe[0] == 'n') {
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

