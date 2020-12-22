class MkModels {
  constructor() {
    this.featureExtractor;
    this.model;
    this.dataObj = {};
    this.dataObj.xTrain = [];
    this.dataObj.yTrain = [];
  }

  async loadFeatureExtractor(url) {
    this.featureExtractor = await tf.loadGraphModel(url, { fromTFHub: true });
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

  // buildClassifier() {
  //   this.model = tf.sequential();
  //   this.model.add(tf.layers.dense({
  //     units: 1,
  //     inputShape: [2048],
  //     activation: 'sigmoid'
  //   }));
  //   this.model.compile({
  //     optimizer: tf.train.adam(),
  //     loss: 'binaryCrossentropy',
  //     metrics: ['accuracy']
  //   });
  //   this.model.summary();
  // }

  buildClassifier() {
    this.model = tf.sequential();
    this.model.add(tf.layers.dense({
      units: 2,
      inputShape: [2048],
      activation: 'sigmoid'
    }));
    this.model.compile({
      optimizer: tf.train.adam(),
      loss: 'binaryCrossentropy',
      metrics: ['accuracy']
    });
    this.model.summary();
  }


}