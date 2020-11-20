/* rangeGenerator, Javascript, Function, Generator
* Creates a generator, that generates all values 
* in the given range using the given step.
*
* 1. Use a while loop to iterate from start to end, 
* using yield to return each value and then incrementing by step.
* 2. Omit the third argument, step, to use a default value of 1.
*/

const invokeRange = function* (creation, destruction, growth = 1) {
  let i = creation;
  while (i < destruction) {
    yield i;
    i += growth;
  }
};

for (let i of invokeRange(8, 26))
console.log('%c waz my range', 'background: orange; color: white; display: block;', i);

// Returns
// 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25