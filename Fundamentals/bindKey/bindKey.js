/* bindKey, Javascript, Function, Object
* Creates a function that invokes the method at a given key of an object,
* optionally prepending any additional supplied parameters to the arguments.
*
* 1. Return a function that uses Function.prototype.apply() to bind context[fn]
* to context.
* 2. Use the spread operator (...) to prepend any additional supplied parameters
* to the arguments.
*/

const bindKey = (context, fn, ...myEdict) => (...args) =>
  context[fn].apply(context, [...myEdict, ...args]);

const users = {
  user: 'Rupert',
  greet: function(greeting, punctuation) {
    return greeting + ' ' + this.user + punctuation;
  }
};

const invokeMyEdict = bindKey(users, 'greet');
console.log(invokeMyEdict('Welcome back', '!'));

// Returns
// Welcome back Rupert!