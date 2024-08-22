// Exercise 3.4: Array-like Object
// Objective: Create an object that mimics an array with elements like item1, item2, and item3.
// Expected Result: The object should produce the string "item1,item2,item3" when converted to
// a string.

const arrLikeObj = {
    0: "Item1",
    1: "Item2",
    2: "Item3",
    length: 3,
    string: function () {
        let result = "";
        for (let i = 0; i < arrLikeObj.length; i++) {
            if (i > 0) {
            result += ", ";
        }
        result += arrLikeObj[i];
        }
        return result;
    },
};

console.log(arrLikeObj.string());