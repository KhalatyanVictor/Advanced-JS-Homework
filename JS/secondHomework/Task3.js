// Exercise 3.2: Product Price Calculation
// Objective: Create an object that represents a product with a price property.
// Expected Result: When adding 500 to the object (assuming the price is 1000), the result should
// be 1500.

const obj = {
    price: 1000,
    valueOf: function () {
        return obj.price;
    },
};

console.log(obj + 500);