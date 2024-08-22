//Implements

//forEach
function ownForEach(array, cb) {
    for (let i = 0; i < array.length; i++) {
        cb(array[i], i);
    }
}

ownForEach(arr, (item) => console.log(item)); 

//map
function ownMap(array, cb) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(cb(array[i], i));
    }
    return newArray;
}

console.log(ownMap(arr, (item) => item * 2))

//reduce
function ownReduce(array, cb, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : array[0];
    let startIndex = initialValue !== undefined ? 0 : 1;

    for (let i = startIndex; i < array.length; i++) {
        accumulator = cb(accumulator, array[i], i);
    }
    return accumulator;
}

console.log(ownReduce(arr, (acc, item) => acc + item, 0));

