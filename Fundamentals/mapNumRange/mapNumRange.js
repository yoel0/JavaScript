/* mapNumRange, Javascript, Math
* Maps a number from one range to another range.
*
* 1. Return num mapped between outMin-outMax from inMin-inMax.
*/

const mapNumRange = (n, inMin, inMax, outMin, outMax) =>
  ((n - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;

console.log(mapNumRange(5, 0, 10, 0, 100));

// Returns
// 50