/* linearSearch, Javascript, Array, Algorithm
 * Finds the first index of a given element in an array 
 * using the linear search algorithm.
 *
 * 1. Use a for...in loop to iterate over the indexes of the given array.
 * 2. Check if the element in the corresponding index is equal to item.
 * 3. If the element is found, return the index, using the unary + operator 
 * to convert it from a string to a number.
 * 4. If the element is not found after iterating over the whole array, return -1.
 */ 

const linearSearch = (array, item) => {
  for (const i in array) {
    if (array[i] === item) return +i;
  }
  return 'does not exist in array';
};

console.log(linearSearch([1, 2, 3], 3)); 
// Returns 2, 3 is the 2nd index.
console.log(linearSearch([1, 2, 3], 4)); 
// Returns 'does not exist in array' since element is not found.