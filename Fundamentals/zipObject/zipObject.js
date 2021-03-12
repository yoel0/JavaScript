/* zipObject, Javascript, Array, Object
 * Associates properties to values, given array of
 * valid property identifiers and an array of values.
 *
 * 1. Use Array.prototype.reduce() to build an object
 * from the two arrays.
 * 2. If the length of props is longer than values,
 * remaining keys will be undefined.
 * 3. If the length of values is longer than props,
 * remaining values will be ignored.
 */

const zipObject = (props, values) =>
  props.reduce(
    (object, prop, index) => ((object[prop] = values[index]), object),
    {}
  );

console.log(zipObject(['ini', 'mini', 'myni', 'mo'], [1, 2, 3, 4]));
console.log(zipObject(['ini', 'mini', 'myni', 'mo'], [1, 2, 3]));

// Returns
// { ini: 1, mini: 2, myni: 3, mo: 4 }
// { ini: 1, mini: 2, myni: 3, mo: undefined }