// Walking through this chara ba leben.

const list = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4
      }
    }
  }
}


const nextLargerNodes = head => {
  // Declaring our constant Array variables.
  const stack = [], res = [];
  // Declaring our Counter variable.
  // Is going to be used only to assign values to indices in the res Array.
  let idx = 0;

  // for ([initialExpression]; [conditionExpression]; [incrementExpression])
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration
  // After each run our for loop will refire on the IncrementExpression and check conditionExpression.
  for (let node = head; node; node = node.next) {
    // While the stack has items and the previous node value is lower then the current value.
      while (stack.length && stack[stack.length - 1][1] < node.val) {
        // We assign a new element to the res Array at the index inside of the pop'd stack element.
        // and at that index we are placing the current node value.
          res[stack.pop()[0]] = node.val;
      }
      // Push an Array of the incremented index and the value of the CURRENT node.
      // Traveling through the list there is no way to go backwards only forwards,
      // this is why this is a single-linkedlist not a double-linkedlist.
      stack.push([idx++, node.val]);
  }
  // After the for loop is done running, we have a stack of next node values that were less than
  // their preceding node values and those node values are paired with the index where they will be
  // added to the res Array. Each less than node will be assigned a value of 0.
  // Think of this as our Clean Up operation.
  while (stack.length) { res[stack.pop()[0]] = 0; }
  // Lastly we return the results Array.
  return res;
};

// list.next.next.next.next you get a pizza she gets a pizza they all get pizzas.
// ?. Optional Chaining = if it is undefined just return undefined do not try to get the property.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
// console.log(nextLargerNodes(list.next.next.next.next?.next));
console.log(nextLargerNodes(list));