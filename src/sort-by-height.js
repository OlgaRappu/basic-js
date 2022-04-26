const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
function compare(a, b) {
  if (a > b) return 1; // если первое значение больше второго
  if ((a == b)) return 0; // если равны
  if (a < b) return -1; // если первое значение меньше второго
}
arr1 = [];
for(i=0;i<arr.length;i++) {
  if (arr[i]!=-1) arr1.push(arr[i]);}
    arr1.sort(compare);
for(i=0;i<arr.length;i++) {
  if (arr[i]!=-1) arr[i] = arr1.shift();}
  return arr;
}

module.exports = {
  sortByHeight
};
