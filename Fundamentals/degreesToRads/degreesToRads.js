/* degreesToRads, Javascript, Math
 * Converts an angle from degrees to radians.
 *
 * 1. Use Math.PI and the degree to radian formula to convert
 * the angle from degrees to radians.
 */

const degreesToRads = deg => (deg * Math.PI) / 180.0;

console.log(
  degreesToRads(90.0).toFixed(4),
  'Flowers Spit Fragrance..'
);

// Returns
// 1.5708 Flowers Spit Fragrance..