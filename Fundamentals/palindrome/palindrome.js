/* palindrome, Javascript, String
* Checks if the given string is a palindrome.
*
* 1. Normalize the string to String.prototype.toLowerCase() and 
* use String.prototype.replace() to remove non-alphanumeric characters from it.
* 2. Use the spread operator (...) to split the normalized string 
* into individual characters.
* 3. Use Array.prototype.reverse(), String.prototype.join('') 
* and compare the result to the normalized string.
*/

const scanPalindrome = str => {
  const eightBall = str.toLowerCase().replace(/[\W_]/g, '');
  return eightBall === [...eightBall].reverse().join('');
};

console.log(scanPalindrome('nurses run'));

// Returns
// true


