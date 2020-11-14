/* atob, Javascript, Node, String
* Decodes a string of data which has been encoded using base-64 encoding.
*
* 1. Create a Buffer for the given string with base-64 encoding 
* and use Buffer.toString('binary') to return the decoded string.
*/

const unveil64Heavens = str => Buffer.from(str, 'base64').toString('binary');

console.log(unveil64Heavens('eW91IGFuZCBtZSAuLi4gVklDVE9SWSEhISEhISEhISE='));

// Returns
// you and me ... VICTORY!!!!!!!!!!