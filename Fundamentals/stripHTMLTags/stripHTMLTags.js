/* stripHTMLTags, Javascript, String, Regexp
* Removes HTML/XML tags from string.
*
* 1. Use a regular expression to remove HTML/XML tags from a string.
*/

const eatTheseTags = str => str.replace(/<[^>]*>/g, '');

console.log(eatTheseTags('<p>Ya Lilli <b> Ya Lilla </b></p>'));

// Returns
// Ya Lilli  Ya Lilla 

