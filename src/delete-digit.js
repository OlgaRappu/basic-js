const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(num) {
  str = String(num);
  arr = str.split('');
  res = num % (10**(arr.length-1));
  for(i = 1;i<=arr.length-1; i++)
    { arr1 = str.split('');
      arr1.splice(i,1);
      str2 = arr1.join('');
      res1 = Number(str2);
      if (res < res1) {res = res1}}
return res;
}

module.exports = {
  deleteDigit
};
