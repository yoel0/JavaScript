// Datatypes
//  6 Primitive Datatypes
// 1. undefined
// 2. null
// 3. Boolean
// 4. Number
// 5. String
// 6. Symbol
//  1 Reference Datatype
// 1. Object

// Total = 7 Datatypes

/* In JavaScript 
Primitive values are data that are stored on the stack.
Primitive value is stored directly in the location that the variable accesses.

Reference values are objects that are stored in the heap.
Referece value stored in the variable location is a pointer
to a location in memory where object is stored.

Basics: 
Objects are aggregations of properties. A property can reference an object or a primitive.
Primitives are values, they have no properties.

With the exception of null and undefined, all primitves values have object equivalents,
which wrap around the primitive values, e.g. a String object wraps around a string prmitive.
All primitives are immutable.
*/

/* Variables
var: 
Stored in Global Scope.
Function Scope.
NOT Block Scope.
Can be Reassigned.
Can be Redeclared.
Can be Hoisted.

let:
NOT Stored in Global Scope.
Function Scope.
Block Scope.
Can be Reassigned.
Can NOT be Redeclared.
Can NOT be Hoisted.

const:
NOT Stored in Global Scope.
Function Scope.
Block Scope.
Can NOT be Reassigned. 
Can NOT be Redeclared.
Can NOT be Hoisted.

*/