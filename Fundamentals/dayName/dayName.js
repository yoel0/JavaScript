/* dayName, Javascript, Date
* Gets the name of the weekday from a Date object.
*
* 1. Use Date.prototype.toLocaleDateString() with 
* the { weekday: 'long' } option to retrieve the weekday.
* 2. Use the optional second argument to get a language-specific name 
* or omit it to use the default locale.
*/

const lullabyOfDays = (date, locale) =>
  date.toLocaleDateString(locale, { weekday: 'long' });

console.log(lullabyOfDays(new Date())); // default locale
console.log(lullabyOfDays(new Date('11/18/2020'), 'de-DE')); // Deutsche
console.log(lullabyOfDays(new Date('11/18/2020'), 'hi-IN')); // Hindi Indian
console.log(lullabyOfDays(new Date('11/18/2020'), 'ko-KR')); // Korean
console.log(lullabyOfDays(new Date('11/18/2020'), 'zh-CN')); // Simplified Chinese

// Returns
// Wednesday
// Mittwoch
// बुधवार
// 수요일
// 星期三


