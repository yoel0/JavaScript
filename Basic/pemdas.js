/* pemdas, Javascript, Math
 * Display basic order of operations when firing off code.
 * [ORDER OF OPERATIONS]
 * P arenthesis = (this) then that addition / substraction 
 * E xponents = ** 
 * M ultiply = *
 * D ivision = /
 * A ddition = +
 * S ubtraction = -
 */

function snatchPerimeter(width, height) {
  return (width + height) * 2;
  // return width * 2 + height * 2; // not pemdas
};

console.log(snatchPerimeter(6, 6));