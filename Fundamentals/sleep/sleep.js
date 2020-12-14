/* sleep, Javascript, Function, Promise
* Delays the execution of an asynchronous function.
*
* 1. Delay executing part of an async function, 
* by putting it to sleep, returning a new Promise().
*/

// This function will be modeled after a song I proudly keep on repeat.
// It's called Sauda khara Khara by Good Newzz.
// let's GO, shall we?!!!

const sleepQueen = ms => new Promise(resolve => setTimeout(resolve, ms));

async function slowItDown() {
  console.log('Ho ek tere sang yaara ankh ladne LAGiii 👀');
  await sleepQueen(3000); // Wait 3 seconds.
  console.log('hai sauda khara khara! [after 3 seconds, ofc.]');
};

console.log(slowItDown());

// Returns
// Ho ek tere sang yaara ankh ladne LAGiii 👀
// Promise { <pending> }
// hai sauda khara khara! [after 3 seconds, ofc.]