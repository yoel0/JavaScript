/* find, Javascript, Array
* Finds the value in the object that matches the given value.
*
* 1. Use Array.prototype.find() to return the value of the first element 
* in the array. If no value matches the mandate, undefined is returned.
* 2. Use an Anonymous Function as the argument.
*/

// Here we will iterate through an Array of Objects,
// to find a specific value.
//! This can be considered one of the most common tasks,
//! that you can call out to in a practical real working experience.
//* Let's go bro/sis 🎯.

let users = [
  { id: 0, name: 'donkey' },
  { id: 1, name: 'shrek' },
  { id: 2, name: 'fiona' }
];

let user = users.find(usr => usr.name === 'donkey');

console.log(user);

// Returns
// { id: 0, name: 'donkey' }