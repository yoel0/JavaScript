/* dayOfYear, Javascript, Date
* Gets the day of the year (number in the range 1-366) from a Date object.
*
* 1. Use new Date() and Date.prototype.getFullYear() to get the first day of
* the year as a Date object.
* 2. Subtract the first day of the year from date and divide with the milliseconds
* in each day to get the result.
* 3. Use Math.floor() to appropriately round the resulting day count to an integer.
*/

const dayOfYear = date =>
  Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);

console.log(dayOfYear(new Date()));

// Returns
// 154