/* toKebabCase, Javascript, String, Regexp, toKebabCase
* Converts a string to kebab case.. mm kebab.
*
* 1. Use String.prototype.match() to break the string into words using regexp.
* 2. Use Array.prototype.map(), Array.prototype.slice(), Array.prototype.join() 
* and String.prototype.toLowerCase() to combine them, adding - as a separator.
*/

const toKebabCase = str =>
  str &&
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(sumac => sumac.toLowerCase())
    .join('-');

console.log(toKebabCase('beefChickenSoltaniBarg'));
console.log(toKebabCase('aroos please'));
console.log(toKebabCase('mixed_string With spaces_underscores-and-hyphens'));

// Returns
// beef-chicken-soltani-barg
// aroos-please
// mixed-string-with-spaces-underscores-and-hyphens