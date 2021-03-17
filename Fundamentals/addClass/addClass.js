/* addClass, Javascript, Browser
 * Adds a class to an HTML element.
 *
 * 1. Use Element.classList and DOMTokenList.add() to add the
 * specified class to the element.
 */

const addClass = (element, className) => element.classList.add(className);

addClass(document.querySelector('div'), 'container');
// The Div will now have the 'container' class.
