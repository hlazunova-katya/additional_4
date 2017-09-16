const bigInt = require('big-int');
module.exports = function multiply(first, second) {
  // your solution
return (bigInt(first).mul(second)).toString();
}
