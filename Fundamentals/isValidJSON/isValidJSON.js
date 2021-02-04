/* isValidJSON, Javascript, Type
 * Checks if the provided string is a valid JSON.
 *
 * 1. Use JSON.parse() and a try... catch block to check if 
 * the provided string is a valid JSON.
 */ 

const drJSON = rx => {
  try {
    JSON.parse(rx);
    return true;
  } catch (bug) {
    return false;
  }
};

console.log(drJSON('{"song": "Luv Sic Pt 3", "artist": "Nujabes"}'));
// Notice below that I will remove the "" from the key[artist] #badboii
console.log(drJSON('{"song": "Luv Sic Pt 3", artist: "Nujabes"}'));
console.log(drJSON(null));

// Returns
// true
// false
// true