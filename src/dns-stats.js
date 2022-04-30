const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  res = {};
  res1 = [];
  all_keys = [];
  if (domains == []) return res
  else 
  {for(let i = 0; i<domains.length; i++)
    { res1[i] = domains[i].split('.');}
  }
   for (let i=0; i<res1.length;i++) 
    { d ='';
      for (let j=res1[i].length-1; j>=0;j--)
      { d=d+'.'+res1[i][j];
        all_keys.push(d); 
        }
      }
   
for(i=0; i<all_keys.length;i++)
  if ( !(all_keys[i] in res)) 
  { res[all_keys[i]]=1}
  else
  res[all_keys[i]]++;
  return res; 
}

module.exports = {
  getDNSStats
};
