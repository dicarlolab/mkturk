"use strict";
exports.__esModule = true;
exports.StandardScaler = void 0;
var tf = require("@tensorflow/tfjs");
var StandardScaler = /** @class */ (function () {
    function StandardScaler() {
    }
    /*
     * X: shape needs to be
     */
    StandardScaler.prototype.fit = function (X) {
        var _this = this;
        return tf.tidy(function () {
            var xTmp = tf.stack(X);
            var xMoments = tf.moments(xTmp, 0);
            _this.mean = xMoments.mean.arraySync();
            var varTmp = tf.where(tf.equal(xMoments.variance, 0), tf.onesLike(xMoments.variance), xMoments.variance);
            _this["var"] = varTmp.arraySync();
        });
    };
    StandardScaler.prototype.transform = function (X) {
        var _this = this;
        // if (this.mean && this.var) {
        //   return tf.tidy(() => {
        //     let xTmp = tf.split()
        //   })
        // } else {
        //   throw 'You must first fit the data. No mean and/or var';
        // }
        try {
            return tf.tidy(function () {
                var xTmp = tf.stack(X);
                var xTmpShape = xTmp.shape;
                var xTmpSplit = tf.split(xTmp, _this.mean.length, 1);
                for (var i = 0; i < xTmpSplit.length; i++) {
                    xTmpSplit[i] = tf.sub(xTmpSplit[i], tf.scalar(_this.mean[i]));
                    xTmpSplit[i] = tf.div(xTmpSplit[i], tf.sqrt(tf.scalar(_this["var"][i])));
                }
                return tf.stack(xTmpSplit, 1).reshape(xTmpShape).unstack();
            });
        }
        catch (e) {
            console.error('Error:', e);
        }
    };
    StandardScaler.prototype.sanityCheck = function (X) {
        return tf.tidy(function () {
            var xTmp = tf.stack(X);
            var xMoments = tf.moments(xTmp, 0);
            var mean = xMoments.mean.arraySync();
            var variance = xMoments.variance.arraySync();
            return { mean: mean, variance: variance };
        });
    };
    return StandardScaler;
}());
exports.StandardScaler = StandardScaler;
