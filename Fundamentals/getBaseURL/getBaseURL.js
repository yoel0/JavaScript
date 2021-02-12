/* getBaseURL, Javascript, String, Browser, Regexp
* Gets the current URL without any parameters or fragment identifiers.
*
* 1. Use String.prototype.replace() with an appropriate regular expression 
* to remove everything after either '?' or '#', if found.
*/

const getBaseURL = url => url.replace(/[?#].*$/, '');

console.log(getBaseURL(
  'https://babeljs.io/repl/#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&spec=false&loose=false&code_lz=MYewdgzgLgBApgGzgWzmWBeGAeAFgRgD4AJRBEAGhgHcQAnBAEwEJsB6AwgbgChRJY_KAEMAlmDh0YWRiGABXVOgB0AczhQAokiVQAQgE8AkowAUAcjogQUcwEpeAJTjDgUACIB5ALLK6aRklTRBQ0KCohMQk6Bx4gA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=react&prettier=false&targets=&version=7.12.15&externalPlugins='
));

// Returns
// https://babeljs.io/repl/