/* randomAlphaNumeric, Javascript, String, Random
* Generates a random string with the specified length.
*
* 1. Use Array.from() to create a new array with the specified length.
* 2. Use Math.random() generate a random floating-point number, 
* Number.prototype.toString(36) to convert it to an alphanumeric string.
* 3. Use String.prototype.slice(2) to remove the integral part and decimal point 
* from each generated number.
* 4. Use Array.prototype.some() to repeat this process as many times as required, 
* up to length, as it produces a variable-length string each time.
* 5. Finally, use String.prototype.slice() to trim down the generated string 
* if it's longer than the given length.
*/

const randomAlphaNumeric = length => {
  let s = '';
  Array.from({length}).some(() => {
    s += Math.random().toString(36).slice(2);
    return s.length >= length;
  });

  const haha = s.slice(0, length);
  return haha;
};

console.log(randomAlphaNumeric(26));

// Returns
// qd6bk8thhugjz9y45o581u5k6r