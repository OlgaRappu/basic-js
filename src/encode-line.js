const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) 
{s1 = str.split('');  
s2 = [];
num = 1;
j=0;
for(i=0;i<s1.length;i++){
  if (s1[i] == s1[i+1]) 
      num++;
  else {if (num == 1) {s2[j]= s1[i]} else {s2[j]= num + s1[i];} j++; num=1;}
                        }

  return s2.join('');
}

module.exports = {
  encodeLine
};
