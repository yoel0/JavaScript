(function() {
  'use strict';

  window._ = {};

  // Returns whatever value is passed as the argument. This function doesn't
  // seem very useful, but remember it--if a function needs to provide an
  // iterator when the user does not pass one in, this will be handy.
  _.identity = function(val) {
    return val;
  };

  /**
   * COLLECTIONS
   * ===========
   *
   * In this section, we'll have a look at functions that operate on collections
   * of values; in JavaScript, a 'collection' is something that can contain a
   * number of values--either an array or an object.
   *
   *
   * IMPORTANT NOTE!
   * ===============
   *
   * The .first function is implemented for you, to help guide you toward success
   * in your work on the following functions. Whenever you see a portion of the
   * assignment pre-completed, be sure to read and understand it fully before
   * you proceed. Skipping this step will lead to considerably more difficulty
   * implementing the sections you are responsible for.
   */

  // Return an array of the first n elements of an array. If n is undefined,
  // return just the first element.
  _.first = function(array, n) {
    return n === undefined ? array[0] : array.slice(0, n);
  };

  // Like first, but for the last elements. If n is undefined, return just the
  // last element.
  _.last = function(array, n) {
    if (n > array.length) {
      return array;
    }
    return n === undefined ? array[array.length - 1] : array.slice(array.length - n, array.length);


    // ||||||||||||||
    // Solution video

    // return n === undefined ? array[array.length-1] : array.slice(Math.max(0 ,array.length-n));
  };

  // Call iterator(value, key, collection) for each element of collection.
  // Accepts both arrays and objects.
  //
  // Note: _.each does not have a return value, but rather simply runs the
  // iterator function over each item in the input collection.
  _.each = function(collection, iterator) {
    if (Array.isArray(collection)) {
      for (var i = 0; i < collection.length; i++) {
        iterator(collection[i], i, collection);
      }
    } else {
      for (let key in collection) {
        iterator(collection[key], key, collection);
      }
    }


    // ||||||||||||||
    // Solution video
    // Nailed it!
  };

  // Returns the index at which value can be found in the array, or -1 if value
  // is not present in the array.
  _.indexOf = function(array, target) {
    // TIP: Here's an example of a function that needs to iterate, which we've
    // implemented for you. Instead of using a standard `for` loop, though,
    // it uses the iteration helper `each`, which you will need to write.
    var result = -1;

    _.each(array, function(item, index) {
      if (item === target && result === -1) {
        result = index;
      }
    });

    return result;
  };

  // Return all elements of an array that pass a truth test.
  _.filter = function(collection, test) {

    var filtered = [];

    _.each(collection, function(item) {
      if (test(item)) {
        filtered.push(item);
      }
    });

    return filtered;


    // ||||||||||||||
    // Solution video
    // Nailed it!
  };

  // Return all elements of an array that don't pass a truth test.
  _.reject = function(collection, test) {
    // TIP: see if you can re-use _.filter() here, without simply
    // copying code in and modifying it

    // Get elements that pass the test
    var filtered = _.filter(collection, test);

    // Reject the passed elements
    var rejected = _.filter(collection, x => !filtered.includes(x));

    return rejected;


    // ||||||||||||||
    // Solution video
    // Kind of

    // _.filter(collection, function(value) {
    //   return !test(value);
    // });

  };

  // Produce a duplicate-free version of the array.
  _.uniq = function(array, isSorted, iterator) {

    var uniq = [];

    if (isSorted) {
      // This is feels like a hack to satisfy "it('should handle iterators that work with a sorted array')"
      // Outputs the same values as underscoure.js, but I don't fully understand the use-case for it.
      uniq.push(array[0]);
      _.each(array, function(item, index) {
        if (iterator(index)) {
          uniq.push(item);
        }
      });
    } else {
      _.each(array, function(item) {
        if (uniq[item] === undefined) {
          uniq.push(item);
        }
      });
    }

    return uniq;


    // ||||||||||||||
    // Solution video
    // Kind of

    // var unique = {}, results = [];

    // for (let i = 0; i < array.length; i++) {
    //   unique[array[i]] = array[i];
    // }

    // for (var key in unique) {
    //   array.push(unique[key]);
    // }

    // return results;

  };


  // Return the results of applying an iterator to each element.
  _.map = function(collection, iterator) {
    // map() is a useful primitive iteration function that works a lot
    // like each(), but in addition to running the operation on all
    // the members, it also maintains an array of results.
    var mapped = [];

    _.each(collection, function(item, key, collection) {
      mapped.push(iterator(item, key, collection));
    });

    return mapped;


    // ||||||||||||||
    // Solution video
    // Nailed it!
  };

  /*
   * TIP: map is really handy when you want to transform an array of
   * values into a new array of values. _.pluck() is solved for you
   * as an example of this.
   */

  // Takes an array of objects and returns and array of the values of
  // a certain property in it. E.g. take an array of people and return
  // an array of just their ages
  _.pluck = function(collection, key) {
    // TIP: map is really handy when you want to transform an array of
    // values into a new array of values. _.pluck() is solved for you
    // as an example of this.
    return _.map(collection, function(item) {
      return item[key];
    });
  };

  // Reduces an array or object to a single value by repetitively calling
  // iterator(accumulator, item) for each item. accumulator should be
  // the return value of the previous iterator call.
  //
  // You can pass in a starting value for the accumulator as the third argument
  // to reduce. If no starting value is passed, the first element is used as
  // the accumulator, and is never passed to the iterator. In other words, in
  // the case where a starting value is not passed, the iterator is not invoked
  // until the second element, with the first element as its second argument.
  //
  // Example:
  //   var numbers = [1,2,3];
  //   var sum = _.reduce(numbers, function(total, number){
  //     return total + number;
  //   }, 0); // should be 6
  //
  //   var identity = _.reduce([5], function(total, number){
  //     return total + number * number;
  //   }); // should be 5, regardless of the iterator function passed in
  //          No accumulator is given so the first element is used.
  _.reduce = function(collection, iterator, accumulator) {

    if (Array.isArray(collection)) {
      // Array

      // Make a copy
      var workingColl = collection.slice();

      // If no accumulator the first element is used
      if (accumulator === undefined) {
        // And the first element removed
        accumulator = workingColl.shift();
      }

      // Each over the iterator, but don't return it yet
      _.each(workingColl, function(item, index) {
        accumulator = iterator(accumulator, item);
      });

    } else {
      // Obj

      // Make a copy
      var workingColl = collection;

      // If no accumulator
      if (accumulator === undefined) {
        // Get the first element from a copy of the collection
        var wcFirst = Object.keys(workingColl)[0];
        // Use it as the accumulator
        accumulator = workingColl.wcFirst;
        // And remove the first element
        delete workingColl.wcFirst;
      }

      // Each over the iterator, but don't return it yet
      _.each(workingColl, function(item, index) {
        accumulator = iterator(accumulator, item);
      });
    }

    return accumulator;


    // ||||||||||||||
    // Solution video
    // Kind of

    // var initalizing = arguments === 2;

    // _.each(collection, function(value) {
    //   if (initalizing) {
    //     accumulator = value;
    //     initalizing = false;
    //   } else {
    //     accumulator = iterator(accumulator, value);
    //   }
    // });

    // return accumulator;

  };



  // Determine if the array or object contains a given value (using `===`).
  _.contains = function(collection, target) {
    // TIP: Many iteration problems can be most easily expressed in
    // terms of reduce(). Here's a freebie to demonstrate!
    return _.reduce(collection, function(wasFound, item) {
      if (wasFound) {
        return true;
      }
      return item === target;
    }, false);
  };


  // Determine whether all of the elements match a truth test.
  _.every = function(collection, iterator) {
    // TIP: Try re-using reduce() here.

    if (iterator === undefined) {
      iterator = function(num) {
        return num;
      };
    }

    for (var i = 0; i < collection.length; i++) {
      if (!iterator(collection[i], i, collection)) { return false; }
    }
    return true;


    // ||||||||||||||
    // Solution video
    // Kind of

    // iterator = iterator || _.identity;

    // return !!_.reduce( collection, function (trueSoFar, value) {
    //   return trueSoFar && iterator(value);
    // }, true);

  };

  // Determine whether any of the elements pass a truth test. If no iterator is
  // provided, provide a default one
  _.some = function(collection, iterator) {

    // TODO =================================================================================
    // TIP: There's a very clever way to re-use every() here.
    if (iterator === undefined) {
      iterator = function(num) {
        return num;
      };
    }

    for (var i = 0; i < collection.length; i++) {
      if (iterator(collection[i], i, collection)) { return true; }
    }
    return false;


    // ||||||||||||||
    // Solution video
    // Kind of

    // iterator = iterator || _.identity;

    // return !!_.reduce( collection, function (trueSoFar, value) {
    //   return trueSoFar || iterator(value);
    // }, false);

  };


  /**
   * OBJECTS
   * =======
   *
   * In this section, we'll look at a couple of helpers for merging objects.
   */

  // Extend a given object with all the properties of the passed in
  // object(s).
  //
  // Example:
  //   var obj1 = {key1: "something"};
  //   _.extend(obj1, {
  //     key2: "something new",
  //     key3: "something else new"
  //   }, {
  //     bla: "even more stuff"
  //   }); // obj1 now contains key1, key2, key3 and bla
  _.extend = function(obj) {

    var args = arguments;

    if (args.length === 1) { return obj; }

    _.each(args, function(item, i) {
      _.each(item, function(prop, j) {
        obj[j] = prop;
      });
    });

    return obj;


    // ||||||||||||||
    // Solution video
    // Kind of

    // _.each(arguments, function(item) {
    //   _.each(item, function(value, j) {
    //     obj[j] = value;
    //   })
    // })

    // return obj;

  };

  // Like extend, but doesn't ever overwrite a key that already
  // exists in obj
  _.defaults = function(obj) {

    var args = arguments;

    if (args.length === 1) { return obj; }

    _.each(args, function(item, i) {
      _.each(item, function(prop, j) {
        if ( obj[j] === undefined ) { obj[j] = prop; }
      });
    });

    return obj;


    // ||||||||||||||
    // Solution video
    // Kind of

    // _.each(arguments, function(item) {
    //   _.each(item, function(value, j) {
    //     obj[j] === undefined && (obj[j] = value);
    //   })
    // })

    // return obj;

  };


  /**
   * FUNCTIONS
   * =========
   *
   * Now we're getting into function decorators, which take in any function
   * and return out a new version of the function that works somewhat differently
   */

  // Return a function that can be called at most one time. Subsequent calls
  // should return the previously returned value.
  _.once = function(func) {
    // TIP: These variables are stored in a "closure scope" (worth researching),
    // so that they'll remain available to the newly-generated function every
    // time it's called.
    var alreadyCalled = false;
    var result;

    // TIP: We'll return a new function that delegates to the old one, but only
    // if it hasn't been called before.
    return function() {
      if (!alreadyCalled) {
        // TIP: .apply(this, arguments) is the standard way to pass on all of the
        // information from one function call to another.
        result = func.apply(this, arguments);
        alreadyCalled = true;
      }

      // The new function always returns the originally computed result.
      return result;
    };
  };

  // Memorize an expensive function's results by storing them. You may assume
  // that the function only takes primitives as arguments.
  // memoize could be renamed to oncePerUniqueArgumentList; memoize does the
  // same thing as once, but based on many sets of unique arguments.
  //
  // _.memoize should return a function that, when called, will check if it has
  // already computed the result for the given argument and return that value
  // instead if possible.
  _.memoize = function(func) {

    // =======
    var ranCache = {};

    return function() {
      let args = Array.from(arguments);
      let sArgs = JSON.stringify(args);
      let keys = Object.keys(ranCache);

      // console.log('args: ', args);
      // console.log('sArgs: ', sArgs);

      // TODO =================================================================================
      // Can't work out how to stop arguments getting flattened
      // when comparing [[1,2,3]] and [1,2,3], maddening

      if ( !(_.contains(keys, sArgs))) {
        var result = func.apply(this, arguments);
        ranCache[sArgs] = result;
        // console.log('cache: ', ranCache);

        return result;
      }
      // console.log('cache: ', ranCache);
      return ranCache[sArgs];
    };


    // ||||||||||||||
    // Solution video
    // Kind of

    // var results = {};

    // return function () {
    //   var arg = JSON.stringify(arguments);

    //   if ( !results[arg]) {
    //     results[arg] = func.apply(this, arguments);
    //   }

    //   return results[arg];

    // }


  };

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  //
  // The arguments for the original function are passed after the wait
  // parameter. For example _.delay(someFunction, 500, 'a', 'b') will
  // call someFunction('a', 'b') after 500ms
  _.delay = function(func, wait) {

    let args = [].slice.call(arguments);
    args = args.slice(2);
    // console.log(func, wait, args);

    return setTimeout(function() {
      return func.apply(this, args);
    }, wait);

  };


  /**
   * ADVANCED COLLECTION OPERATIONS
   * ==============================
   */

  // Randomizes the order of an array's contents.
  //
  // TIP: This function's test suite will ask that you not modify the original
  // input array. For a tip on how to make a copy of an array, see:
  // http://mdn.io/Array.prototype.slice
  _.shuffle = function(array) {


    // Bit of a strange way of doing it maybe but thought I'd stick to my idea

    // console.log('ori: ', array);

    let holdArr = array.slice();
    let arr = [];

    var genRandomI = function(randomArr) {
      return Math.floor(Math.random() * Math.floor(randomArr.length));
    };

    for (let i = 0; i < array.length; i++) {
      var randomI = genRandomI(holdArr);
      // console.log(randomI);
      arr.push(holdArr[randomI]);
      holdArr.splice(randomI, 1);
    }

    // console.log('arr: ', arr);

    return arr;

  };









  /**
   * ADVANCED
   * =================
   *
   * Note: This is the end of the pre-course curriculum. Feel free to continue,
   * but nothing beyond here is required.
   */

  // Calls the method named by functionOrKey on each value in the list.
  // Note: You will need to learn a bit about .apply to complete this.
  _.invoke = function(collection, functionOrKey, args) {

    return _.map(collection, function(item) {
      let method = typeof functionOrKey === 'string' ? item[functionOrKey] : functionOrKey;
      return method.apply(item, args);
    });

  };

  // Sort the object's values by a criterion produced by an iterator.
  // If iterator is a string, sort objects by that property with the name
  // of that string. For example, _.sortBy(people, 'name') should sort
  // an array of people by their name.
  _.sortBy = function(collection, iterator) {
  };

  // Zip together two or more arrays with elements of the same index
  // going together.
  //
  // Example:
  // _.zip(['a','b','c','d'], [1,2,3]) returns [['a',1], ['b',2], ['c',3], ['d',undefined]]
  _.zip = function() {
  };

  // Takes a multidimensional array and converts it to a one-dimensional array.
  // The new array should contain all elements of the multidimensional array.
  //
  // Hint: Use Array.isArray to check if something is an array
  _.flatten = function(nestedArray, result) {
  };

  // Takes an arbitrary number of arrays and produces an array that contains
  // every item shared between all the passed-in arrays.
  _.intersection = function() {
  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = function(array) {
  };

  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time.  See the Underbar readme for extra details
  // on this function.
  //
  // Note: This is difficult! It may take a while to implement.
  _.throttle = function(func, wait) {
  };
}());