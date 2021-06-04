/* fromTimestamp, Javascript, Date
* Creates a Date object from a Unix timestamp.
*
* 1. Convert the timestamp to milliseconds by multiplying with 1000.
* 2. Use new Date() to create a new Date object.
*/
// Unix Timestamp: 1622792000

const fromTimestamp = timeMagic => new Date(timeMagic * 1000);

console.log(fromTimestamp(1622792000));

// Returns
// 2021-06-04T07:33:20.000Z