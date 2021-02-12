/* getBaseURL, Javascript, String, Browser, Regexp
* Gets the current URL without any parameters or fragment identifiers.
*
* 1. Use String.prototype.replace() with an appropriate regular expression 
* to remove everything after either '?' or '#', if found.
*/

const getBaseURL = url => url.replace(/[?#].*$/, '');

console.log(getBaseURL(
  'https://babeljs.io/repl/#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011'
));

// Returns
// https://babeljs.io/repl/