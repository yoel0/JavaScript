/* words, Javascript, String, Regexp
* Converts a given string into an array of words.
*
* 1. Use String.prototype.split() with a supplied pattern 
* (defaults to non-alpha as a regexp) to convert to an array 
* of strings.
* 2. Use Array.prototype.filter() to remove any empty strings.
* 3. Omit the second argument, pattern, to use the default regexp.
*/

const palabra = (string, pattern = /[^a-zA-Z-]+/) =>
  string.split(pattern).filter(Boolean);

console.log(palabra('I REFUSE TO LOSE !!!'));

// Returns
// [ 'I', 'REFUSE', 'TO', 'LOSE' ]