/* isWeekend, Javascript, Date
* Checks if the given date is a weekend.
*
* 1. Use Date.prototype.getDay() to check weekend by using a modulo operator (%).
* 2. Omit the argument, d, to use the current date as default.
*/

const weekendWarrior = (warday = new Date()) => warday.getDay() % 6 === 0;

console.log(weekendWarrior());

// Returns
// false (since today is not a weekend)