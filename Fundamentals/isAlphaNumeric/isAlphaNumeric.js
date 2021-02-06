/* isAlphaNumeric, Javascript, String, Regexp
* Checks if a string contains only alphanumeric characters.
*
* 1. Use RegExp.prototype.test() to check if the input string 
* matches against the alphanumeric regexp pattern.
*/

const isAlphaNumeric = milashka => /^[a-z0-9]+$/gi.test(milashka);

console.log(isAlphaNumeric('darling1'));
console.log(isAlphaNumeric('1337'));
console.log(isAlphaNumeric('honey bun'));
console.log(isAlphaNumeric('#uggs'));

// Returns
// true
// true
// false
// false