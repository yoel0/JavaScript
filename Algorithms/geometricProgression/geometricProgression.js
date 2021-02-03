/* geometricProgression, Javascript, Math, Algorithm
* Initializes an array containing the numbers in the specified range 
* where start and end are inclusive and the ratio between two terms is step. 
* Returns an error if step equals 1.
*
* 1. Use Array.from(), Math.log() and Math.floor() to create an array of the 
* desired length, Array.prototype.map() to fill with the desired values in a range.
* 2. Omit the second argument, start, to use a default value of 1.
* 3. Omit the third argument, step, to use a default value of 2.
*/

const g2Step = (end, start = 1, step = 2) =>
  Array.from({ length: Math.floor(Math.log(end / start) / Math.log(step)) + 1 })
  .map((_, i) => start * step ** i);

console.log(g2Step(256) + '\n');
console.log(g2Step(256, 3) + '\n');
console.log(g2Step(256, 1, 4) + '\n');

// Returns
// 1,2,4,8,16,32,64,128,256
// 3,6,12,24,48,96,192
// 1,4,16,64,256