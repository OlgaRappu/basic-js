const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
if (names[0])
{res = [];
k = [];
res[0] = names[0];
k[0]=1;
for(i=1;i<names.length;i++)
{k[i] = 1;
res[i] = names[i];
for(j=0;j<i;j++)
if (res[i]==res[j]) {
  res[i]=res[j]+'('+k[j]+')'; k[j]++;
   }
}
 return res;}
  else return [];
  }

module.exports = {
  renameFiles
};
