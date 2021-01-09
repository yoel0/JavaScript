/* hashNode, Javascript, Node, Promise
* Creates a hash for a value using the SHA-256 algorithm. 
* Returns a promise.
*
* 1. Use crypto.createHash() to create a Hash object with 
* the appropriate algorithm.
* 2. Use hash.update() to add the data from val to the Hash, 
* hash.digest() to calculate the digest of the data.
* 3. Use setTimeout() to prevent blocking on a long operation, 
* and return a Promise to give it a familiar interface.
*/

const crypto = require('crypto');

const hashBrowns = value =>
  new Promise(resolve =>
    setTimeout(
      () => resolve(crypto.createHash('sha256').update(value).digest('hex')),
      0
    )
  );

hashBrowns(JSON.stringify({a: 'a', b: [1, 2, 3], snickers: { c: 'bar'} })).then(console.log);

// Returns
// 82a95e9212b457d33d59a77810d9bb3959c3a577c311e5ead3be97724cab824e
// Hash Browns are now being served. <3