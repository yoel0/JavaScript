/* slugify, Javascript, String, Regexp
* Converts a string to a URL-friendly slug.
*
* 1. Use String.prototype.toLowerCase() and String.prototype.trim()
* to normalize the string.
* 2. Use String.prototype.replace() to replace spaces, dashes and
* underscores with - and remove special characters.
*/

const slugify = string =>
  string
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+ | -+$/g, '');

console.log(slugify('father we will lead them home...'));

// Returns
// father-we-will-lead-them-home