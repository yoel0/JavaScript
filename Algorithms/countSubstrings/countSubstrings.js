/* countSubstrings, Javascript, String, Algorithm
* Counts the occurrences of a substring in a given string.
*
* 1. Use Array.prototype.indexOf() to look for searchValue in str.
* 2. Increment a counter if the value is found and update the index, i.
* 3. Use a while loop that will return as soon as the value returned 
* from Array.prototype.indexOf() is -1.
*/

const substringRatatouille = (string, searchValue) => {
  let count = 0,
    i = 0;
  while (true) {
    const r = string.indexOf(searchValue, i);
    if (r !== -1) [count, i] = [count + 1, r + 1];
    else return count;
  }
};

console.log(substringRatatouille('runbaby baby baby run baby run', 'run'));

// Returns 
// 3