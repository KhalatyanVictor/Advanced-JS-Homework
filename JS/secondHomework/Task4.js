// Exercise 3.3: Date Representation
// Objective: Create an object that represents a date with properties like day, month, and year.
// Expected Results:
// The object should produce the string "08/18/2024" when converted to a string.
// When used in a numeric context, it should return a numeric value (e.g., a timestamp or days
// since a specific date).

let currentDate = new Date();

const obj = {
    year: currentDate.getFullYear(),
    month: '0' + (currentDate.getMonth() + 1),
    day: currentDate.getDate(),
    toString: function(){
        console.log(`${obj.day}/${obj.month}/${obj.year}`)
    },
    valueOf: function () {
        console.log(obj.day, obj.month, obj.year);
    }
};

obj.toString()
obj.valueOf()