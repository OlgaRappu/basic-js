const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) 
  { let dep = 0;
    if (Array.isArray(arr)) {
      let res = [];
      for(let i=0; i<arr.length;i++) 
        {
          res[i] = this.calculateDepth(arr[i]);
        }
      dep = Math.max(0, ...res) + 1;
    return dep;
   }
    else return 0;
  }
}

module.exports = {
  DepthCalculator
};
