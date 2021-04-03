/* hide, Javascript, Browser, CSS
* Hides all the elements specified.
*
* 1. Use NodeList.prototype.forEach() to apply display: none
* to each element specified.
*/

const hide = (...el) => [...el].forEach(e => (e.style.display = 'none'));

hide(document.querySelectorAll('img'));
// Vanquish all <img> elements on the page.. 🦭