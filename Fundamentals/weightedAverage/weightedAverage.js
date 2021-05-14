/* weightedAverage, Javascript, Math
 * Calculates the weighted average of two or more numbers.
 *
 * 1. Use Array.prototype.reduce() to create the weighted sum
 * of the values and the sum of the weights.
 * 2. Divide them with each other to get the weighted average.
 */

const weightedAverage = (nums, weights) => {
  const [sum, weightSum] = weights.reduce(
    (acc, w, i) => {
      acc[0] = acc[0] + nums[i] * w;
      acc[1] = acc[1] + w;
      return acc;
    },
    [0, 0]
  );
  return sum / weightSum;
};

console.log(weightedAverage([1, 2, 3], [0.6, 0.2, 0.3]));

// Returns
// 1.727272727272727