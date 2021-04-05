/* redirect, Javascript, Browser
* Redirects to a specified URL.
*
* 1. Use Window.location.href or Window.location.replace() to redirect to url.
* 2. Pass a second argument to simulate a link click (true - default) or
* an HTTP redirect (false).
*/

const redirect = (url, asLink = true) =>
  asLink ? (window.location.href = url) : window.location.replace(url);

redirect('https://github.com/yoel0');

// 🎯