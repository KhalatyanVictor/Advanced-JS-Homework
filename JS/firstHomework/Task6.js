  // 8. REDUCE
  // Given an array, return the sum of numbers that are 18 or over.

    const arr = [1, 22, 55, 166, 5, 36, 11, 205, 333, 95, 62, 10, 43];

    function sumOver18(array) {
        const sum = array.reduce((sum, over18) => {
            if (Number(over18) >= 18) {
            return sum + over18;
        }
        return sum;
    }, 0);
    console.log(sum);
}

sumOver18(arr);

// Write a function which calculates average age of users.
const users = [
    {
        username: "Yuri Gagarin",
        lang: "ru",
        age: 56,
    },
    {
        username: "Nil Armstrong",
        lang: "ENG",
        age: 54,
    },
];
getAverageAge(users); // 55

function getAverageAge(arr) {
    const totalAge = arr.reduce((sum, user) => {
        return sum + user.age;
    }, 0);

    const averageAge = totalAge / arr.length;

    console.log(averageAge);
    return averageAge;
}



