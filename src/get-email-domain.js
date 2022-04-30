const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  res = '';
  emailarr = [];
  if (email == null) return res
  else 
  emailarr = email.split('@')
  res = emailarr[emailarr.length-1]
  return res; 
}

module.exports = {
  getEmailDomain
};
