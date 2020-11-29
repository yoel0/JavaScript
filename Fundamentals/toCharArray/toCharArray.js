/* toCharArray, Javascript, String
* Converts a string to an array of characters.
*
* 1. Use the spread operator (...) 
* to convert the string into an array of characters.
*/

const charArrRawr = rinju => [...rinju];

const string = 'it is not what you get, it is what you become';

console.log(string + ": " + string.length + " characters, " + 
Buffer.byteLength(string, 'utf8') + " bytes");

console.log(charArrRawr('letsGO'));

// Returns
// it is not what you get, it is what you become: 45 characters, 45 bytes
// [ 'l', 'e', 't', 's', 'G', 'O' ]
