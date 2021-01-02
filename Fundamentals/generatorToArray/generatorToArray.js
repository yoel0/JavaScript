/* generatorToArray, Javascript, Function, Array, Generator
* Converts the output of a generator function to an array.
*
* 1. Use the spread operator (...) to convert the output of 
* the generator function to an array.
*/

const generatorToArray = gen => [...gen];

const datGewdGood = new Set([1, 2, 1, 3, 1, 4]);

console.log(generatorToArray(datGewdGood.entries()));

// Returns
// [ [ 1, 1 ], [ 2, 2 ], [ 3, 3 ], [ 4, 4 ] ]