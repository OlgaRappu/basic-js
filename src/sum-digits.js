const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(num) {
str = String(num);
  while (str.length > 1)
    { result = 0;
      for(i=0;i<str.length;i++) { result = result + Number(str[i])}
      str = String(result);
    }
return result;
}

module.exports = {
  getSumOfDigits
};
