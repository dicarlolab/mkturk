class MkModels {
  constructor() {
    this.featureExtractor;
    this.model;
    this.dataObj = {};
    this.dataObj.xTrain = [];
    this.dataObj.yTrain = [];
    this.dataObj.yTrainLabels = [];
    this.dataObj.xTest = [];
    this.dataObj.yTest = [];
    this.cvs;
    this.hasSampleFeatures = false;
    this.hasTestFeatures = false;
    this.inputShape; // inputShape (number[]);
    this.units; // units (number);
    this.oneHotArr;
    // this.loss; // loss (string): 'categoricalCrossentropy'|'binaryCrossentropy';
    // this.activation; // activation (string): 'softmax'|'sigmoid';
    // this.optimizer;
  }

  bindCanvasElement(canvas) {
    this.cvs = canvas;
  } 

  async loadFeatureExtractor(url, tfhub) {
    this.featureExtractor = await tf.loadGraphModel(url, tfhub);
  }

  normalizePixelValues(canvas) {
    // let offset = tf.scalar(127.5);
    // let tensor = (
    //   tf.browser.fromPixels(canvas)
    //     .resizeNearestNeighbor([224, 224])
    //     .toFloat()
    //     .sub(offset)
    //     .div(offset)
    //     .expandDims()
    // );
    let offset = tf.scalar(255.0);
    let tensor = (
      tf.browser.fromPixels(canvas)
        .resizeNearestNeighbor([224, 224])
        .toFloat()
        .div(offset)
        .expandDims()
    );
    return tensor;
  }

  buildClassifier(task) {
    let config = task.ModelConfig;
    
    // determine inputShape on the fly using the output shape of featureExtractor
    let dummyFeature = this.featureExtractor.execute(this.normalizePixelValues(this.cvs));
    this.inputShape = [Math.max(...dummyFeature.shape)];
    this.units = task['ImageBagsTest'].length;
    this.model = tf.sequential();


    
    if (config.mode == 'default') {
      let loss = (this.units > 2) ? 'categoricalCrossentropy' : 'binaryCrossentropy';
      let activation = (this.units > 2) ? 'softmax' : 'sigmoid';
      this.model.add(tf.layers.dense({
        units: this.units,
        inputShape: this.inputShape,
        activation: activation
      }));
      this.model.compile({
        optimizer: tf.train.adam(),
        loss: loss,
        metrics: ['accuracy']
      });
      this.model.summary();
    } else if (config.mode == 'advanced') {
      let configKeys = Object.keys(config);
      let optimizer = (
        configKeys.includes('learningRate') ? tf.train.adam(config.learningRate) : tf.train.adam()
      );
      this.units = (
        configKeys.includes('imageBagsTrainIdxs') ? config['imageBagTrainIdxs'].length : this.units
      );

      let activation;
      let loss;
      if (configKeys.includes('activation')) {
        activation = config['activation'];
      } else {
        activation = (this.units > 2) ? 'softmax' : 'sigmoid';
      }

      if (configKeys.includes('loss')) {
        loss = config['loss'];
      } else {
        loss = (this.units > 2) ? 'categoricalCrossentropy' : 'binaryCrossentropy';
      }

      this.model.add(tf.layers.dense({
        units: this.units,
        inputShape: this.inputShape,
        activation: activation
      }));
      this.model.compile({
        optimizer: optimizer,
        loss: loss,
        metrics: ['accuracy']
      });
      this.model.summary();
    }
    this.oneHotArr = this.createOneHot(this.units);
    // this.model.add(tf.layers.dense({
    //   units: config.outputUnits,
    //   inputShape: [config.inputShape],
    //   activation: config.activation
    // }));
    // this.model.compile({
    //   optimizer: tf.train.adam(),
    //   loss: config.loss,
    //   metrics: ['accuracy']
    // });
    // this.model.summary();
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

  getMkModelBoundingBox(params) {
    let srcX, srcY, srcWidth, srcHeight;
    if (!params.image.imageidx.includes(NaN) && !params.image.imageidx[0].includes(NaN) && params.image.imagebag) { // IF background image
      srcX = params.boundingBoxes2D.x[0][0] * params.ScreenRatio;
      srcY = (params.boundingBoxes2D.y[0][0] - params.offsettop) * params.ScreenRatio;
      if (Array.isArray(params.image.sizeInches)) {
        srcWidth = Math.round(
          Math.max(...params.image.sizeInches)
          * params.ViewportPPI
          * params.ScreenRatio
        );
      } else {
        srcWidth = Math.round(
          params.image.sizeInches
          * params.ViewportPPI
          * params.ScreenRatio
        );
      }
      srcHeight = srcWidth;
    } else { // NO background image. 
      let offsetX;
      if (Array.isArray(params.object[Object.keys(params.object)[0]].sizeInches)) {
        // offsetX = (
        //   params.object[Object.keys(params.object)[0]].sizeInches[params.idx] * params.ViewportPPI
        // );
        offsetX = (
          Math.max(...params.object[Object.keys(params.object)[0]].sizeInches) * params.ViewportPPI
        );
      } else {
        offsetX = (
          params.object[Object.keys(params.object)[0]].sizeInches * params.ViewportPPI
        );
      }
      let offsetY = offsetX;
      srcX = (
        params.boundingBoxes3D.x[0][0]
        + params.boundingBoxes3D.x[0][1]
        - offsetX
      );
      
      srcY = (
        (params.boundingBoxes3D.y[0][0] - params.offsettop)
        + (params.boundingBoxes3D.y[0][1] - params.offsettop)
        - offsetY
      );

      srcHeight = Math.round(offsetX * params.ScreenRatio);
      srcWidth = srcHeight;
    }

    return { sx: srcX, sy: srcY, sWidth: srcWidth, sHeight: srcHeight };
  }

  removeItemOnce(arr, idx) {
    if (idx > -1) {
      arr.splice(idx, 1);
    }
    return arr;
  }

  createOneHot(units) {
    let arr = [];
    for (let i = 0; i < units; i++) {
      arr[i] = Array(units).fill(0);
      arr[i][i] = 1;
    }
    return arr;
  }

  getOneHotIdx(correctItem) {
    return correctItem % this.units;
  }

}