/* hexToRGB, Javascript, String, Math
* Converts a color code to 
* an rgb() or rgba() string if alpha value is provided.
*
* 1. Use bitwise right-shift operator and mask bits with & (and) operator 
* to convert a hexadecimal color code (with or without prefixed with #) 
* to a string with the RGB values.
* 2. If it's 3-digit color code, first convert to 6-digit version.
* 3. If an alpha value is provided alongside 6-digit hex, 
* give rgba() string in return.
*/

const hexSorcery = hex => {
  let alpha = false,
    h = hex.slice(hex.startsWith('#') ? 1 : 0);
  if (h.length === 3) h = [...h].map(x => x + x).join('');
  else if (h.length === 8) alpha = true;
  h = parseInt(h, 16);
  return (
    'rgb' +
    (alpha ? 'a' : '') +
    '(' +
    (h >>> (alpha ? 24 : 16)) +
    ', ' +
    ((h & (alpha ? 0x00ff0000 : 0x00ff00)) >>> (alpha ? 16 : 8)) +
    ', ' +
    ((h & (alpha ? 0x0000ff00 : 0x0000ff)) >>> (alpha ? 8 : 8)) +
    (alpha ? `, ${h & 0x000000ff}` : '') +
    ')'
  );
};


console.log(hexSorcery('#27ae60ff'));
console.log(hexSorcery('27ae60'));
console.log(hexSorcery('#fff'));
// Returns 
// rgba(39, 174, 96, 255)
// rgb(39, 174, 0)
// rgb(255, 255, 0)