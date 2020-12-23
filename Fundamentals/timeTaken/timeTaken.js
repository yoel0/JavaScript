/* timeTaken, Javascript, Function
* Measures the time it takes for a function to execute.
*
* 1. Use Console.time() and Console.timeEnd() to measure the 
* difference between the start and end times to determine 
* how long the callback took to execute.
*/

const timeTest = callback => {
  console.time('timeTaken');
  const r = callback();
  console.timeEnd('timeTaken');
  return r;
};

timeTest(() => Math.pow(2, 10));

// Returns
// timeTaken: 0.112ms