/* byteSize, Javascript, String
* Returns the length of a string in bytes.
*
* 1. Convert a given string to a Buffer Object.
* 2. Use Buffer.length to get the length of the string in bytes.
*/

const byteSize = str => Buffer.from(str).length;

console.log(byteSize('🧋'));
console.log(byteSize('Ah la la la la la la la la'));

// Returns
// 4
// 26