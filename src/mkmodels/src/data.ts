import * as tf from '@tensorflow/tfjs';

export class StandardScaler {
  public mean: number[];
  public var: number[];

  constructor() {

  }

  /*
   * X: shape needs to be 
   */
  public fit(X: tf.Tensor[]) {
    return tf.tidy(() => {
      let xTmp = tf.stack(X);
      let xMoments = tf.moments(xTmp, 0);
      this.mean = xMoments.mean.arraySync() as number[];
      let varTmp = tf.where(
        tf.equal(xMoments.variance, 0),
        tf.onesLike(xMoments.variance),
        xMoments.variance
      );
      this.var = varTmp.arraySync() as number[];
    });
  }

  public transform(X: tf.Tensor[]) {
    // if (this.mean && this.var) {
    //   return tf.tidy(() => {
    //     let xTmp = tf.split()
    //   })
    // } else {
    //   throw 'You must first fit the data. No mean and/or var';
    // }
    try {
      return tf.tidy(() => {
        let xTmp = tf.stack(X);
        let xTmpShape = xTmp.shape;
        let xTmpSplit = tf.split(xTmp, this.mean.length, 1);
        for (let i = 0; i < xTmpSplit.length; i++) {
          xTmpSplit[i] = tf.sub(xTmpSplit[i], tf.scalar(this.mean[i]));
          xTmpSplit[i] = tf.div(xTmpSplit[i], tf.sqrt(tf.scalar(this.var[i])));
        }
        return tf.stack(xTmpSplit, 1).reshape(xTmpShape).unstack();
      });
    } catch (e) {
      console.error('Error:', e);
    }
  }

  public sanityCheck(X: tf.Tensor[]) {
    return tf.tidy(() => {
      let xTmp = tf.stack(X);
      let xMoments = tf.moments(xTmp, 0);
      let mean = xMoments.mean.arraySync();
      let variance = xMoments.variance.arraySync();
      return {mean: mean, variance: variance};
    });
  }
}

export class DataCreator {
  constructor() {

  }

  public createDatasets(obj: any) {
    
  }
}