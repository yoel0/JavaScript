/* smoothScroll, Javascript, Browser, CSS
* Smoothly scrolls the element on which it's called into the
* visible area of the browser window.
*
* 1. Use Element.scrollIntoView() to scroll the element.
* 2. Use { behavior: 'smooth' } to scroll smoothly.
*/

const smoothScroll = (element) =>
  document.querySelector(element).scrollIntoView({
    behavior: 'smooth'
  });

// silk smooth scroll to the element with the id of myID.
smoothScroll('#myID');
// silk smooth scroll to the first element with the class of myClass.
smoothScroll('.myClass');