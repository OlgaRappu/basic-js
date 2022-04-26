const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
if (Array.isArray(members)) 
{  
len = members.length;
res = [];
for(i=0; i<len; i++) {
  if((typeof members[i]) == 'string') {
    res.push(members[i].trimStart()[0])}
}
name = res.join('');
if (name == '') return false;  
name1 = name.toUpperCase();
res = name1.split(''); 
res.sort();
name = res.join('');return name;}
else {return false;}
}  

module.exports = {
  createDreamTeam
};
