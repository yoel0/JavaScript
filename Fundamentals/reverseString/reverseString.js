/* reverseString, Javascript, String
 * Reverses a string.
 *
 * 1. Use the spread operator (...) and Array.prototype.reverse() 
 * to reverse the order of the characters in the string.
 * 2. Combine characters to get a string using String.prototype.join('').
 */ 

// Solution
const reverseString = string => [...string].reverse().join('');
console.log('reverseString: ', reverseString('desserts'));

// Alternate Solution
const reverseStringTwo = str => str.split('').reverse().join('');
console.log('reverseStringTwo: ', reverseStringTwo('desserts'));

// Alternate Recursive Solution
const reverseStringThree = forTheHorde => {
  return (forTheHorde === '') ? '' : reverseStringThree(forTheHorde.substr(1)) + forTheHorde.charAt(0);
};
console.log('reverseStringThree: ', reverseStringThree('desserts'));

// Returns
// reverseString:  stressed
// reverseStringTwo:  stressed
// reverseStringThree:  stressed
