/* copySign, Javascript, Math
* Returns the absolute value of the first number, but the sign of the second.
*
* 1. Use Math.sign() to check if the two numbers have the same sign.
* 2. Return x if they do, -x otherwise.
*/

const pariah = (x, y) => Math.sign(x) === Math.sign(y) ? x : -x;

console.log(
  pariah(1, 2),
  "You can",
  pariah(1, -2),
  "be the",
  pariah(-1, 2),
  "Straw to",
  pariah(-1, -2),
  "my Berry.",
);

// Returns 
// 1 You can -1 be the 1 Straw to -1 my Berry.