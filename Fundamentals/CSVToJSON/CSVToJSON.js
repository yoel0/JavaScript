/* CSVToJSON, Javascript, Browser, String, Regexp
* Converts a comma-separated values (CSV) string to a 2D array of objects. 
* The first row of the string is used as the title row.
*
* 1. Use Array.prototype.slice() and Array.prototype.indexOf('\n') 
* and String.prototype.split(delimiter) to separate the first row (title row) into values.
* 2. Use String.prototype.split('\n') to create a string for each row, 
* then Array.prototype.map() and String.prototype.split(delimiter) 
* to separate the values in each row.
* 3. Use Array.prototype.reduce() to create an object for each row's values, 
* with the keys parsed from the title row.
* 4. Omit the second argument, delimiter, to use a default delimiter of ,.
*/

const csvToJSON = (data, delimiter = ',') => {
  const titles = data.slice(0, data.indexOf('\n')).split(delimiter);
  return data
    .slice(data.indexOf('\n') + 1)
    .split('\n')
    .map(v => {
      const values = v.split(delimiter);
      return titles.reduce(
        (obj, title, index) => ((obj[title] = values[index]), obj),
        {}
      );
    });
};

console.log(csvToJSON('key1,key2\na,b\nc,d'));
console.log(csvToJSON('key1;key2\na;b\nc;d', ';'));

/* Returns 
[ { key1: 'a', key2: 'b' }, { key1: 'c', key2: 'd' } ]
[ { key1: 'a', key2: 'b' }, { key1: 'c', key2: 'd' } ]
*/