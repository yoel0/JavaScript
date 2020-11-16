/* mask, Javascript, String
* Replaces all but the last num of characters 
* with the specified mask character.
*
* 1. Use String.prototype.slice() to grab the portion 
* of the characters that will remain unmasked.
* 2. Use String.padStart() to fill the beginning 
* of the string with the mask character up to the original length.
* 3. If num is negative, the unmasked characters will be 
* at the start of the string.
* 4. Omit the second argument, num, to keep a default 
* of 4 characters unmasked.
* 5. Omit the third argument, mask, to use a default 
* character of '*' for the mask.
*/

const enshroud = (cc, num = 4, enshroud = '*') =>
  `${cc}`.slice(-num).padStart(`${cc}`.length, enshroud);

console.log(enshroud(1234567890));
console.log(enshroud(1234567890, 3));
console.log(enshroud(1234567890, -6, '💋'));

// Returns
// ******7890
// *******890
// 💋💋💋7890




