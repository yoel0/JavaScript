/* btoa, Javascript, Node, String
* Creates a base-64 encoded ASCII string from a String object 
* in which each character in the string is treated as a byte of binary data.
*
* 1. Create a Buffer for the given string with binary encoding and 
* use Buffer.toString('base64') to return the encoded string.
*/

const coverMe64Ways = str => Buffer.from(str, 'binary').toString('base64');

console.log(coverMe64Ways('canYouReadThis? not unless you can decode this :) '));

// Returns
// Y2FuWW91UmVhZFRoaXM/IG5vdCB1bmxlc3MgeW91IGNhbiBkZWNvZGUgdGhpcyA6KSA=


