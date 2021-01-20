// Write to the HTML document.
document.write("<h1>Goodbye, World!</h1>");
// Console log, warn and error.
console.log("Hello, this is a log.");
console.warn("This is a Warning!");
console.error("This is an Error!!");

// Manipulate the HTML document.
// Get the value / parameter "header".
// Display to the Inner HTML at "header".
// Write to the tag/id by using document.write().
document.write(document.getElementById("header").innerHTML = "I am back again, World.");

// Get the Element by id from the input box.
// Change the value of the input box to Schnitzel.
document.getElementById("inp").value = "Schnitzel";