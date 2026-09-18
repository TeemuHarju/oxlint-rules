
// Const assigned twice
const a = 0;
a = 1;

console.log( a );

// Function with var and incorrect return type
var testFunction = (texts: string[]): string => {
  console.log("Hello World!", texts);
};

testFunction(["Hi!", "Hello!"]);

// Deprecated array syntax
// TODO: Should trigger an error for the rule 'array-type'
const x: Array<string> = ["a", "b"];

testFunction(x);
