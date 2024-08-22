// 7. FILTER
// Given an array, return a new array that only includes the numbers.

const arr = [1, 2, "a", true, {}, undefined, 55, false, "hi", null, 166, NaN]; // [1, 2, 55, 166]

function returnNumber(array) {
    const onlyNumber = array.filter((item) => typeof item === "number" && Number(item));
    console.log(onlyNumber);
}

returnNumber(arr);

// Write a function which remove users with language equals to 'ru'.

const users1 = [
    {
        username: "Yuri Gagarin",
        lang: "ru",
    },
    {
        username: "Nil Armstrong",
        lang: "ENG",
    },
];
filterUsers(users1); // [{ username: "Nil Armstrong, lang: "ENG" }]

function filterUsers(arr) {
    const removeRu = arr.filter((user) => user.lang !== "ru");
    console.log(removeRu);
}

// Write a function which filters object by field.

const users2 = [
    {
        username: "Yuri Gagarin",
        lang: "ru",
        isAstronaut: true,
    },
    {
        username: "Nil Armstrong",
        lang: "ENG",
        isAstronaut: true,
    },
    {
        username: "Elon Musk",
        isAstronaut: false,
    },
];

filterByField(users2, "isAstronaut"); // [{ username: "Yuri Gagarin", lang: "ru", isAstronaut: true, }, { username: "Nil Armstrong, lang: "ENG" }]

function filterByField(arr, field) {
    field = arr.filter((user) => user.isAstronaut === true);
    console.log(field);
}