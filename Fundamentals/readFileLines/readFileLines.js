/* readFileLines, Javascript, Node, Array
* Returns an array of lines from the specified file.
*
* 1. Use fs.readFileSync() to create a Buffer from a file.
* 2. Convert buffer to string using buf.toString(encoding) function.
* 3. Use String.prototype.split(\n) to create an array of lines from the contents of the file.
*/

const fs = require('fs');

const storyTeller = filename =>
  fs
    .readFileSync(filename)
    .toString('UTF8')
    .split('\n');

let arr = storyTeller('./yoel.txt');

console.log(arr);

/*
contents of yoel.txt :
    Impossible, declare POSSIBLE.
    Cannot, declare CAN.
    Disbelief, declare BELIEF.
    Doubt, How DARE they. Let them hear us SHOUT.
    Hate, invoke LOVE.
    Give me your dreams. I will swallow them, digest them and birth them in to reality.
    Every scar will build the most beautiful future, they never believed in.
    They can beat you down infinitely but they can never take away the smile you and I wear most proudly.
    One day they will understand the difference between happiness and misery is only a choice.
    -Yoel
  ___________________________
*/

/* Returns Array
[
  'Impossible, declare POSSIBLE.',
  'Cannot, declare CAN.',
  'Disbelief, declare BELIEF.',
  'Doubt, How DARE they. Let them hear us SHOUT.',
  'Hate, invoke LOVE.',
  'Give me your dreams. I will swallow them, digest them and birth them in to reality.',
  'Every scar will build the most beautiful future, they never believed in.',
  'They can beat you down infinitely but they can never take away the smile you and I wear most proudly.',
  'One day they will understand the difference between happiness and misery is only a choice.',
  '-Yoel'
]
*/