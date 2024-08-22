// 6. Try out all examples from here

var a = {
    valueOf: function() {
        return 'hello'; // This will log hello
    }
};

var b = {
    valueOf: function() {
        return 3; // This will log 3
    }
};

var c = {
    valueOf: function() {
        return new Number(3); // This will log Number: 3
    }
};
var d = {
    toString: function() {
        return 123; // This will log 123
    }
};

var e = {
    toString: function() {
        return new Number(3); // This will log Number: 3
    }
};

// binary + operator

//1 null + undefined === NaN
//2 null + true === 1
//3 null + false === 0
//4 null + 3 === 3
//5 null + NaN === NaN
//6 null + 'hello' === 'nullhello'
//7 null + a + b + c + d + e + f === ReferenceError
//8 undefined + true === NaN
//9 undefined + false === NaN
//10 undefined + 5 === NaN
//11 undefined + NaN === NaN
//12 undefined + 'hello' === 'undefinedhello'
//13 undefined + a + b + c + d + e + f === Referance Error
//14 true + false === 1
//15 true + 2 === 3
//16 true + NaN === NaN
//17 true + 'hello' === 'truehello'
//18 true + a + b + c + d + e + f === Error
//19 false + 4 === 4
//20 false + NaN === NaN
//21 false + 'hello' === 'falsehello'
//22 false + a + b + c + d + e + f === ReferenceError
//23 5 + 3 === 8
//24 5 + NaN === NaN
//25 5 + 'hello' === '5hello'
//26 5 + a + b + c + d + e + f === ReferenceError
//27 'hello' + NaN === 'helloNaN'
//28 'hello' + a + b + c + d + e + f === ReferenceError

// unary - operator

// -null === 0
// -undefined === NaN
// -true === -1
// -false === 0
// -5 === -5
// -'hello' === NaN
// -'234' === -234
// -'234.32e3' === -23432
// -new Number(NaN) === NaN
// -new String('hello') === NaN
// -(/google.com/) === NaN
// -([]) === 0
// -([2]) === -2
// -([2, 3]) === NaN
// -(function() { }) === NaN
// -(a) === Referance Error

// % operator

// 234 % 2 === 0
// 234 % 3 === 0
// 23.23 % 2 === 1.23 False
// 234.23 % 2.223 === 0.815
