class MkModels {
  constructor() {
    this.featureExtractor;
    this.model;
    this.dataObj = {};
    this.dataObj.xTrain = [];
    this.dataObj.yTrain = [];
    this.cvs;
    this.hasSampleFeatures = false;
    this.hasTestFeatures = false;
  }

  bindCanvasElement(canvas) {
    this.cvs = canvas;
  } 

  async loadFeatureExtractor(url, tfhub) {
    this.featureExtractor = await tf.loadGraphModel(url, tfhub);
  }

  normalizePixelValues(canvas) {
    let offset = tf.scalar(127.5);
    let tensor = (
      tf.browser.fromPixels(canvas)
        .resizeNearestNeighbor([224, 224])
        .toFloat()
        .sub(offset)
        .div(offset)
        .expandDims()
    );
    return tensor;
  }

  buildClassifier(config) {
    this.model = tf.sequential();
    this.model.add(tf.layers.dense({
      units: config.outputUnits,
      inputShape: [config.inputShape],
      activation: config.activation
    }));
    this.model.compile({
      optimizer: tf.train.adam(),
      loss: config.loss,
      metrics: ['accuracy']
    });
    this.model.summary();
  }

  buildSvmClassifier(config) {
    this.model = tf.sequential();
    this.model.add(tf.layers.dense({
      units: 1,
      inputShape: [config.inputShape],
      activation: 'linear',
      kernelRegularizer: tf.regularizers.l2(),
    }));

    function hingeLoss(yTrue, yPred) {
      console.log('hinge yTrue:');
      yTrue.print(true);
      console.log('hinge yPred:');
      yPred.print(true);
      // let loss = tf.maximum(0., 1 - yTrue * yPred);
      let loss = tf.losses.hingeLoss(yTrue, yPred);
      console.log('hinge loss:');
      loss.print(true);
      return loss;
    }

    this.model.compile({
      optimizer: tf.train.adam(),
      loss: hingeLoss,
      metrics: ['accuracy']
    });
    this.model.summary();
  }


}