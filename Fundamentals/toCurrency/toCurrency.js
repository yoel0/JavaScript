/* toCurrency, Javascript, Math, String
* Takes a number and returns it in the specified currency formatting.
*
* 1. Use Intl.NumberFormat to enable country / currency sensitive formatting.
*/

const currencyPlease = (n, curr, LanguageFormat = undefined) =>
  Intl.NumberFormat(LanguageFormat, {
    style: 'currency',
    currency: curr,
  }).format(n);

console.log(currencyPlease(123456.789, 'USD')); // Dolla Dolla Bill yall
console.log(currencyPlease(123456.789, 'USD', 'fa')); // USD in Farsi Lang Format.
console.log(currencyPlease(123456.789, 'EUR')); // Euro, no format assigned.
console.log(currencyPlease(123456.789, 'INR')); // Indian Rupee, no format assigned.
console.log(currencyPlease(123456.789, 'JPY')); // Japanese Yen, no format assigned.
console.log(currencyPlease(123456.789, 'ILS')); // THE SHEKEL, no format assigned.


// Returns 
// $123,456.79
// $۱۲۳٬۴۵۶٫۷۹
// €123,456.79
// ₹123,456.79
// ¥123,457
// ₪123,456.79
