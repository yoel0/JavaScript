/* initialize2DArray, Javascript, Array
* Initializes a 2D array of given width and height and value.
*
* 1. Use Array.from() and Array.prototype.map() to generate 
* h rows where each is a new array of size w.
* 2. Use Array.prototype.fill() to initialize all items with value val.
* 3. Omit the last argument, val, to use a default value of null.
*/

const initialize2DArray = (w, h, v = null) =>
  Array.from({length: h}).map(() => Array.from({length: w}).fill(v));

console.log(initialize2DArray(3, 3, 7));

// Returns
// [ [ 7, 7, 7 ], [ 7, 7, 7 ], [ 7, 7, 7 ] ]