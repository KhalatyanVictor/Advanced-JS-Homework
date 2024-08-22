// Reference Type Coercion
// Exercise 3.1: Representing a Person

// Objective: Create an object that represents a person with properties like firstName, lastName,
// and age.
// Expected Result: The object should produce the string "Name: John Doe, Age: 30" when
// converted to a string.

const obj = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
};

function toString(object) {
    return `${object.firstName} ${object.lastName}`;
}

function valueOf(object) {
    return object.age;
}

console.log(`Name: ${toString(obj)}, Age: ${valueOf(obj)}`);