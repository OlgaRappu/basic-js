const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(_s1, _s2) {
s1 = _s1.split('');  
s2 = _s2.split(''); 
count=0;
for(i=0;i<s1.length;i++){
  for(j=0; j<s2.length;j++)
    {if (s1[i] == s2[j]) 
      { count++;
        s2.splice(j, 1); 
        j=s2.length-1;
      }
    }
}
  return count;
}
module.exports = {
  getCommonCharacterCount
};
