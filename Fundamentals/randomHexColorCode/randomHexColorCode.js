/* randomHexColorCode, Javascript, Math, Random
 * Generates a random hexadecimal color code.
 *
 * 1. Use Math.random() to generate a random 24-bit (6 * 4bits)
 * hexadecimal number.
 * 2. Use bit shifting and then convert it to an hexadecimal string
 * using Number.prototype.toString(16).
 */

const randomHexColorCode = () => {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  const geil = '#' + n.slice(0, 6);

  return geil;
};

console.log('I do it for MAMA 🎈: ', randomHexColorCode());

// Returns
// I do it for MAMA 🎈:  #c39977