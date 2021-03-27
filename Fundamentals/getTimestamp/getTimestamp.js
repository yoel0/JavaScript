/* getTimestamp, Javascript, Date
* Gets the Unix timestamp from a Date object.
*
* 1. Use Date.prototype.getTime() to get the timestamp in milliseconds
* and divide by 1000 to get the timestamp in seconds.
* 2. Use Math.floor() to appropriately round the resulting timestamp
* to an integer.
* 3. Omit the argument, date, to use the current date.
*/

const getTimestamp = (date = new Date()) => Math.floor(date.getTime() / 1000);

console.log(getTimestamp());

// Returns
// 1616835119