/* chainAsync, Javascript, Function
* Chains asynchronous functions.
*
* 1. Loop through an array of functions containing asynchronous
* events, calling next when each asynchronous event has completed.
*/

// 😈
const chainAsync = fns => {
  let curr = 0;
  const last = fns[fns.length - 1];
  const next = () => {
    const fn = fns[curr++];
    fn === last ? fn() : fn(next);
  };
  next();
};

chainAsync([
  next => {
    console.log('0% Hack initialized');
    setTimeout(next, 1000);
  },
  next => {
    console.log('50% Hack midpoint reached..');
    setTimeout(next, 3000);
  },
  next => {
    console.log('100% oh dang.. what do we have here toto?');
  }
]);

// Returns
// 0% Hack initialized - on 0s next -> 1s
// 50% Hack midpoint reached.. - on 1s next -> 3s
// 100% oh dang.. what do we have here toto? - on 3s