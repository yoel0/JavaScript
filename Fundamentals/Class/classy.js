/* Note breakdown: 
* Classes in JavaScript think ‘Object’ Oriented Programming.
* Classes, are reusable objects that have their own values and methods (fns to the Class).
* Classes should be reusable, they should be defined with general methods and 
* values that are specific to the class.
* Think of a Class as a blueprint for objects that you will be creating later on with new data.
* A Class is defined with the key word class and the name of the Class with its first character capitalized, 
* think of a Class's Name like a Proper Noun.
* In a Class's definition, a constructor() method is required to pass data into the Class, 
* through the constructor method's parameters.
* The key word ‘this’ refers to methods and values that are specific to and within a Class, 
* and is used for both defining initial values in a Class's constructor() method 
* and accessing existing values and methods within a class.
* Class methods are not initially defined with the key word ‘this’, but are written as functions 
* below the constructor() method.
* When accessing a Class and reusing it with new data, the new object created with a pre-defined Class 
* is called an instance of that Class.
* An instance of a Class is defined with the key word new along with the Class Name and new data being passed 
* into the Class(parameters).
*/

class Square {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  expand() {
    this.width *= 2;
    this.height *= 2;
    console.log('Expand: ', this.width, this.height);
  }

  shrink() {
    this.width /= 2;
    this.height /= 2;
    console.log('Shrink: ', this.width, this.height);
  }
}

const roblox = new Square(50, 50, "#000");

console.log(roblox);

roblox.expand();
roblox.shrink();
roblox.shrink();

// Logs
// Square { width: 50, height: 50, color: '#000' }
// Expand:  100 100
// Shrink:  50 50
// Shrink:  25 25