// NOTE - Rest Pattern exactly looks like Spread Operator same syntax with (...) except
// but it actually does the OPPOSITE of spread operator.
// Spread operator is to UNPACK an array to join or create a new array
// while Rest operator is to PACK elements into a New array.

// SPREAD, on RIGHT hand side of the assignment (=)
const arr = [1, 2, ...[3, 4]];
console.log(arr); // [1 , 2, 3, 4]

// array destructuring
// REST syntax because on LEFT hand side of the assignment (=) operator
// destructuring & rest of the values put into a new array with Rest operator
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others); // 1, 2, [3, 4, 5]

// Rest is packing meaning it will take rest of the remaining elements & put them into a NEW array - others
// Rest pattern basically collects the elements that are unused on array destructuring
