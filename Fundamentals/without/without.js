/* without, Javascript, Array
* Filters out the elements of an array that have one of the specified 
* values.
*
* 1. Use Array.prototype.includes() to find values to exclude.
* 2. Use Array.prototype.filter() to create an array excluding them.
*/

// Your Passion, Your Fire, Your Strength is UNSTOPPABLE.
// EVERYDAY YOU WAKE UP LEVEL UP.
// AIM HIGH THE ONLY WAY IS UP.
// ASTRONAUT? INFACT JUGGERNAUT
// ONCE YOU GET TO MOVING LIFE HITS LIKE A FEATHER.

const without = (a, ...args) => a.filter(v => !args.includes(v));

console.log(
  without(['come', 10, 'get', 20, 'this', Infinity, 'lvl', 999],
  10, 20, Infinity
  )
);

// Returns
// [ 'come', 'get', 'this', 'lvl', 999 ]