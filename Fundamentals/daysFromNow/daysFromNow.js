/* daysFromNow, Javascript, Date
* Calculates the date of n days from today as a string representation.
*
* 1. Use new Date() to get the current date, Math.abs() and Date.prototype.getDate()
* to update the date accordingly and set to the result using Date.prototype.setDate().
* 2. Use Date.prototype.toISOString() to return a string in yyyy-mm-dd format.
*/

const daysFromNow = n => {
  let d = new Date();

  d.setDate(d.getDate() + Math.abs(n));
  return d.toISOString().split('T')[0];
};

console.log('Teri, meri / Yours and mine..: ', daysFromNow(4));

// Returns
// Teri, meri / Yours and mine..:  2021-02-14