/* sampleSize, Javascript, Array, Algorithm
* Gets n random elements at unique keys from array 
* up to the size of array.
*
* 1. Shuffle the array using the Fisher-Yates algorithm.
* 2. Use Array.prototype.slice() to get the first n elements.
* 3. Omit the second argument, n to get only one element at random 
* from the array.
*/

const brewMagic = ([...arr], n = 1) => {
  let potion = arr.length;
  while (potion) {
    const mix = Math.floor(Math.random() * potion--);
    [arr[potion], arr[mix]] = [arr[mix], arr[potion]];
  }
  return arr.slice(0, n);
};

console.log(brewMagic([1, 2, 3, 4, 5], 4));

// Potion Brewed[Returned]:
// [ 5, 3, 4, 1 ]