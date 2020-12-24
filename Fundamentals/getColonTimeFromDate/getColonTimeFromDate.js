/* getColonTimeFromDate, Javascript, Date, String
* Returns a string of the form HH:MM:SS from a Date object.
*
* 1. Use Date.prototype.toTimeString() and String.prototype.slice() 
* to get the HH:MM:SS part of a given Date object.
*/

const callTimeFromDate = date => date.toTimeString().slice(0, 8);

console.log(callTimeFromDate(new Date()));

// Returns 
// 21:30:35