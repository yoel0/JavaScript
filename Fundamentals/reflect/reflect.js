/* reflect, Javascript, Object
* Source: [MDN]
* Reflect is a built-in object that provides methods
* for interceptable JavaScript operations.
* ! Reflect is not a function object, so it's not constructible.
* Reflect.ownKeys(target)
* Returns an array of the target object's own (not inherited) property keys.
*
* 1. Use Reflect.ownKeys to detect whether an object contains certain properties.
*/

const human = {
  name: 'Yoel',
  favFood: 'KBBQ',
  punchline: function() {
    console.log(`Your code has got that Paprika, bae - ${this.name}`);
  }
};

console.log(Reflect.ownKeys(human));

// Returns
// [ 'name', 'favFood', 'punchline' ]