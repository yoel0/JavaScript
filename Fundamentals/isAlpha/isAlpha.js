/* isAlpha, Javascript, String, Regexp
* Checks if a string contains only alpha characters.
*
* 1. Use RegExp.prototype.test() to check if the given 
* string matches against the alphabetic regexp pattern.
*/

const callingAlphamisPrime = string => /^[a-zA-Z]*$/.test(string);

console.log(callingAlphamisPrime('helloWorld'));
console.log(callingAlphamisPrime('123'));
console.log(callingAlphamisPrime('this Is yummy'));

// Returns
// true
// false
// false