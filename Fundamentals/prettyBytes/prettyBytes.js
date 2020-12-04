/* prettyBytes, Javascript, String, Math
 * Converts a number in bytes to a human-readable string.
 *
 * 1. Use an array dictionary of units to be accessed based on the exponent.
 * 2. Use Number.prototype.toPrecision() to truncate the number
 * to a certain number of digits.
 * 3. Return the prettified string by building it up,
 * taking into account the supplied options and whether it is negative or not.
 * 4. Omit the second argument, precision, to use a default precision of 3 digits.
 * 5. Omit the third argument, addSpace, to add space between the number
 * and unit by default.
 */

const bellaBytes = (num, precision = 3, addSpace = true) => {
	const LABELS = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
	if (Math.abs(num) < 1) return num + (addSpace ? ' ' : '') + LABELS[0];
	const exponent = Math.min(
		Math.floor(Math.log10(num < 0 ? -num : num) / 3),
		LABELS.length - 1
	);
	const n = Number(
		((num < 0 ? -num : num) / 1000 ** exponent).toPrecision(precision)
	);
	return (num < 0 ? '-' : '') + n + (addSpace ? ' ' : '') + LABELS[exponent];
};

console.log(bellaBytes(1000));
console.log(bellaBytes(-2312321131232132.5432, 5));
console.log(bellaBytes(123456789, 3, false));

// Returns
// 1 KB
// -2.3123 PB
// 123MB
