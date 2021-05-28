/* formatNumber, Javascript, String, Math
 * Formats a number using the local number format order.
 *
 * 1. Use Number.prototype.toLocaleString() to convert a number
 * to using the local number format separators.
 */

const formatNumber = (num, locale) => num.toLocaleString(locale);

console.log(formatNumber(123456));
// Optionally we can add a locale if do not want our default.
// I decided adding this would be a nice zesty touch.
console.log(formatNumber(123456, 'ru-RU'));

// Returns
// 123,456
// 123 456