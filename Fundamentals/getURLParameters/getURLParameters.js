/* getURLParameters, Javascript, Browser, String, Regexp
* Creates an object containing the parameters of the current URL.
*
* 1. Use String.prototype.match() with an appropriate regular expression 
* to get all key-value pairs.
* 2. Use Array.prototype.reduce() to map 
* and combine them into a single object.
* 3. Pass location.search as the argument to apply to the current url.
*/

const queryParamWhoDis = url =>
(url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(
  (a, v) => (
    (a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=')
    + 1)), a
        ),
        {}
);

console.log(queryParamWhoDis('github.com'));
console.log(queryParamWhoDis('https://www.reddit.com/search/?q=github'));

// Returns 
// {}
// { q: 'github' }