const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
if (date ==null) return 'Unable to determine the time of year!';
else if (typeof date == 'string'||typeof date== 'number' ||typeof date == 'string' || Array.isArray(date) || !(typeof date.getMonth === 'function') || Object.getOwnPropertyNames(date).length > 0) 
 throw new Error("Invalid date!");
else {if (date.getMonth()<=1 || date.getMonth()==11) return "winter";
  else if (date.getMonth()>1 && date.getMonth()<=4)
    return "spring";
  else if (date.getMonth()>4 && date.getMonth()<=7)
      return "summer";
  else return "fall";}
}

module.exports = {
  getSeason
};
