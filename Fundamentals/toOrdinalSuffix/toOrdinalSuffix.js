/* toOrdinalSuffix, Javascript, Math
 * Takes a number and returns it as a string
 * with the correct ordinal indicator suffix.
 *
 * 1. Use the mod operator (%) to find values of single and tens digits.
 * 2. Find which ordinal pattern digits match.
 * 3. If digit is found in teens pattern, use teens ordinal.
 */

const ordinalSuffixPlease = number => {
	const int = parseInt(number),
		digits = [int % 10, int % 100],
		ordinals = ['st', 'nd', 'rd', 'th'],
		ordinalPattern = [1, 2, 3, 4],
		teenPattern = [11, 12, 13, 14, 15, 16, 17, 18, 19];
	return ordinalPattern.includes(digits[0]) && !teenPattern.includes(digits[1])
		? int + ordinals[digits[0] - 1]
		: int + ordinals[3];
};

console.log(ordinalSuffixPlease('123'));
console.log(ordinalSuffixPlease('76'));
console.log(ordinalSuffixPlease('1'));

// Returns 
// 123rd
// 76th
// 1st