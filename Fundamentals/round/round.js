/* round, Javascript, Math
 * Rounds a number to a specified amount of digits.
 *
 * 1. Use Math.round() and template literals to round the 
 * number to the specified number of digits.
 * 2. Omit the second argument, decimals, to round to an integer.
 */ 

const roundRage = (n, decimals = 0) =>
  Number(`${Math.round(`${n}e${decimals}`)}e-${decimals}`);

console.log(roundRage(1.005, 2));
// Returns
// 1.01