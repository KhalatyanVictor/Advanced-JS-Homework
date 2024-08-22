// 5. SORT
// Create a function that takes an array of numbers arr, a string str and return an array of numbers as per the
// following rules:
// "Asc" returns a sorted array in ascending order.
// "Desc" returns a sorted array in descending order.

function sortedArray(array, sortingType) {
    switch (sortingType) {
        case "Asc":
            return array.sort((a, b) => a - b);
        case "Desc":
            return array.sort((a, b) => b - a);
        default:
        return array;
    }
}

console.log(sortedArray([2, 45, 3, 21, 67, 678], "Asc"));