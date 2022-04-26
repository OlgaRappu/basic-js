const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats
 => 3`
 *
 */
function countCats(cats) {
  num = 0;
for(i=0;i<cats.length;i++)
  { for(j=0;j<cats[i].length; j++)
    if (cats[i][j] === '^^') {num++}
  }
  return num;
}

module.exports = {
  countCats
};
