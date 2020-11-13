/* JSONToFile, Javascript, Node
* Writes a JSON object to a file.
*
* 1. Use fs.writeFileSync(), template literals and JSON.stringify() 
* to write a json object to a .json file.
*/

const fs = require('fs');

const JSONToFile = (object, filename) =>
  fs.writeFileSync(`${filename}.json`, JSON.stringify(object, null, 2));

JSONToFile({ test: 'did we pass'}, 'oneJSONKing');
// creates 'oneJSONKing.json' and writes object to 'oneJSONKing.json'