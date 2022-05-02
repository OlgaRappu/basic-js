const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) 
{
let res = '';
  str = String(str);
  let separator;
  let addition;
  if (options !=undefined)
  if (options.repeatTimes != undefined) n = options.repeatTimes;
  else n = 0;
  if (options.separator != undefined) separator = options.separator;
  else separator = '+';
  if (options.addition != undefined) addition = String(options.addition);
  else if (options.addition === null) addition = 'null'; 
  else addition = '';
  if (options.additionRepeatTimes != undefined) m = 
   options.additionRepeatTimes;
    else  m=0;
  if (options.additionSeparator != undefined)  additionSeparator = 
  options.additionSeparator;
   else additionSeparator = '|';
   for (i=0;i<n;i++ )
   {res = res+str+addition; ;
    for(j=0;j<m-1;j++)
    {     res=res+additionSeparator+addition;     }
    if (i<(n-1))  res=res+separator;
  }
  if (n==0 && m ==0)
  res = str+addition;
  return res;
  
}
module.exports = {
  repeater
};
