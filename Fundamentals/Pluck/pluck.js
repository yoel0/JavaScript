/* pluck, Javascript, Array, Object
* Converts an array of objects into an array 
* of values corresponding to the specified key.
*
* 1. Use Array.prototype.map() to map the array of objects 
* to the value of key for each one.
*/

const cherryPick = (arr, key) => arr.map(i => i[key]);

const warlords = [
  { name: 'Brendan Eich', power: 'JavaScript' },
  { name: 'Evan You', power: 'Vue' },
  { name: 'Ryan Dahl', power: 'Node' },
  { name: 'Graydon Hoare', power: 'Rust' },
  { name: 'Sam Miyakawa', power: 'Maps' },
];

console.log(cherryPick(warlords, 'power'));

// Returns
// [ 'JavaScript', 'Vue', 'Node', 'Rust', 'Maps' ]