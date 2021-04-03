// When we copy Object/Arrays, it is quite dangerous because if we update the copied object/arrays
// then it will actually effect the original object/array. We are mutating state directly.

// How can we copy objects/arrays?
// 1. Shallow Copy – we only copy the first layer of the object from the original with it's reference
// 2. Deep Copy – we have copied the object fully and it does not reference any values in the original

// Shallow copy - so Not to mutate the original state directly
// To do a shallow copy, we can use the following.
// 1. Use the spread (...) syntax
// 2. Use the Object.assign() method
// 3. Use the JSON.stringify() and JSON.parse() methods

// The following illustrates how to copy an object using three methods above:
const person = {
  firstName: 'John',
  lastName: 'Doe',
};

// using spread ...
let p1 = {
  ...person,
};

// using  Object.assign() method
let p2 = Object.assign({}, person);

// using JSON
let p3 = JSON.parse(JSON.stringify(person));
// bit slow in terms of performance but the easiest to code.
// will cause some data loss if your object contains function, new Date(), undefined, etc.

// NOTE - Both spread (...) and Object.assign() perform a shallow copy while the JSON methods carry a deep copy.

// Shallow copy example
let person = {
  firstName: 'John',
  lastName: 'Doe',
};
let copiedPerson = person;

copiedPerson.firstName = 'Jane';
console.log(person);

// Output:
// {
//   firstName: 'Jane',
//   lastName: 'Doe'
// }

// And when access the object via the new variable (copiedPerson) and change the value of its property (name),
// you change the value of the property of the original object.

// Deep copy
// NOTE - In Shallow copy, we are just copying the first layer and if we accidentally
// updated the second layer or third layer that might cause some issue.
// As the name states it will do a deep copy of the object so that if you change a property of an object,
// it will not affect the other copy.

// A deep copying means that value of the new variable is disconnected from the original variable
// while a shallow copy means that some values are still connected to the original variable
// To do a deep copy - Use the JSON.stringify() and JSON.parse() methods

let person = {
  firstName: 'John',
  lastName: 'Doe',
  address: {
    street: 'North 1st street',
    city: 'San Jose',
    state: 'CA',
    country: 'USA',
  },
};

let copiedPerson = JSON.parse(JSON.stringify(person));

copiedPerson.firstName = 'Jane'; // disconnected

copiedPerson.address.street = 'Amphitheatre Parkway';
copiedPerson.address.city = 'Mountain View';

console.log(person);

// {
//   firstName: 'John',
//   lastName: 'Doe',
//   address: {
//       street: 'North 1st street',
//       city: 'San Jose',
//       state: 'CA',
//       country: 'USA'
//   }
// }

// Deep Copy – we have copied the object fully and it does not reference any values in the original
// In this example, all values in the copiedPerson object are disconnected from the original person object.
// We can't create new objects with references.
