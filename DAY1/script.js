console.log("Welcome to various methods on console"); //general output of logging information
console.clear();  // clear the console
console.warn("warn in the document"); // Outputs a warning message
console.error("This display a error message");
console.assert(); //writes a message to the console, but only if an expression evaluates to false
console.count("warn in the document"); //show the number of times this line has been called with the given label.
console.group(); //indicate the start of a message group
console.log("Hello again, this time inside a group!");
console.groupEnd(); //method to end the group
console.log("and we are back.");
console.groupCollapsed("create a new line"); //Creates a new inline group, indenting all following output by another level
