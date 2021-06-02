/* caesarCipher, Javascript, String, Algorithm
 * Encrypts or decrypts a given string using the Caesar cipher.
 *
 * 1. Use the modulo (%) operator and the ternary operator (?) to calculate
 * the correct encryption/decryption key.
 * 2. Use the spread operator (...) and Array.prototype.map() to iterate
 * over the letters of the given string.
 * 3. Use String.prototype.charCodeAt() and String.fromCharCode() to convert
 * each letter appropriately, ignoring special characters, spaces etc.
 * 4. Use Array.prototype.join() to combine all the letters into a string.
 * 5. Pass true to the last parameter, decrypt, to decrypt an encrypted string.
 */

// lets GO, for ROME!
const caesarCipher = (str, shift, decrypt = false) => {
	const s = decrypt ? (26 - shift) % 26 : shift;
	const n = s > 0 ? s : 26 + (s % 26);
	return [...str]
		.map((l, i) => {
			const c = str.charCodeAt(i);
			if (c >= 65 && c <= 90)
				return String.fromCharCode(((c - 65 + n) % 26) + 65);
			if (c >= 97 && c <= 122)
				return String.fromCharCode(((c - 97 + n) % 26) + 97);
			return l;
		})
		.join('');
};

console.log(caesarCipher('brutus karma will collect debt owed', -3));
console.log(caesarCipher('yorqrp hxojx tfii zliibzq abyq ltba', 23, true));

// Returns
// yorqrp hxojx tfii zliibzq abyq ltba
// brutus karma will collect debt owed
