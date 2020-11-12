/* isAnagram, Javascript, String, Regexp
* Checks if a string is an anagram of another string 
* (case-insensitive, ignores spaces, punctuation and special characters).
*
* 1. Use String.prototype.toLowerCase() and String.prototype.replace() 
* with an appropriate regular expression to remove unnecessary characters.
* 2. Use String.prototype.split(''), Array.prototype.sort() and 
* Array.prototype.join('') on both strings to normalize them, 
* then check if their normalized forms are equal.
*/

const anagramCheck = (starString, moonString) => {
  const normalize = aString =>
    aString
      .toLowerCase()
      .replace(/[^a-z0-9]/gi, '')
      .split('')
      .sort()
      .join('');
  return normalize(starString) === normalize(moonString);
};

console.log(anagramCheck('listen', 'silent'));
// Returns
// true