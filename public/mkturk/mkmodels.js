class MkModels {
  constructor() {
    this.featureExtractor;
    this.model;
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

  
}