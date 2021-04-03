// In JavaScript, a primitive (primitive value, primitive data type) is data that is not an object and has no methods.
// There are 7 primitive data types: string, number, bigint, boolean, undefined, symbol, and null

// Primitive Values
let firstNumber = 1;
let copyFirstNumber = firstNumber;

// redeclare
firstNumber = 2;

console.log(firstNumber); // 2
console.log(copyFirstNumber); // 1
// Note - If we have a variable with a Primitive value like number above
// and we copied the value of it to another variable then changing the value of the
// original or the copied variable will not effect one another.

// Reference Type - Object & Arrays
// Note - Everything is Object except primitive types
let firstArray = [1];
let copyFirstArray = firstArray;

copyFirstArray.push(2);

console.log(firstArray); // [1, 2]
console.log(copyFirstArray); // [1, 2]
// Note - If we have a variable which value is object or array and
// we copied the value to another variable then changing the value of the
// original or the copied variable will actually effect one another

// The reason is for Reference Type the variable just store 'reference' in the memory
// but not the value itself, it will not copy the value.

// When two variables pointing to the same object
// It will not copy the value instead, both variables will reference the same object in the memory

// NOTE - we can't mutate primitive types but we can mutate reference types
