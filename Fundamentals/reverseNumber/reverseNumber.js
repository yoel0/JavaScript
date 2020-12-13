/* reverseNumber, Javascript, Math, String
* Reverses a number.
*
* 1. Use Object.prototype.toString() to convert n to a string.
* 2. Use String.prototype.split(''), Array.prototype.reverse() 
* and String.prototype.join('') to get the reversed value of n 
* as a string.
* 3. Use parseFloat() to convert the string to a number 
* and Math.sign() to preserve its sign.
*/

// Im hungry.. are you hungry? IM HUNGRY.

const flipThisPancake = butter =>
  parseFloat(`${butter}`.split('').reverse().join('')) * Math.sign(butter);

console.log(flipThisPancake(321));
console.log(flipThisPancake(-500));
console.log(flipThisPancake(77.7));