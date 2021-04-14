/* quarterOfYear, Javascript, Date
 * Returns the quarter and year to which the supplied date belongs to.
 *
 * 1. Use Date.prototype.getMonth() to get the current month in the
 * range (0, 11), add 1 to map it to the range (1, 12).
 * 2. Use Math.ceil() and divide the month by 3 to get the current quarter.
 * 3. Use Date.prototype.getFullYear() to get the year from the given date.
 * 4. Omit the argument, date, to use the current date by default.
 */

const quarterOfYear = (date = new Date()) => [
  Math.ceil((date.getMonth() + 1) / 3),
  date.getFullYear()
];

console.log(quarterOfYear(new Date('04/13/2021')));
console.log(quarterOfYear());

// Returns
// [ 2, 2021 ]
// [ 2, 2021 ]