/* isLeapYear, Javascript, Date
* Checks if the given year is a leap year.
*
* 1. Use new Date(), setting the date to February 29th of the given year.
* 2. Use Date.prototype.getMonth() to check if the month is equal to 1.
*/

const isLeapYear = year => new Date(year, 1, 29).getMonth() === 1;

console.log(isLeapYear(2020));
console.log(isLeapYear(2021));

// Returns
// true
// false