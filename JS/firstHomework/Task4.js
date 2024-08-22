// 6. MAP
// Write a function which returns array of usernames.

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
getUserNames(users1);

function getUserNames(arr) {
    const usernames = arr.map((user) => user.username);
    console.log(usernames);
}

// Write a function which returns array of lengths of user names.

const users2 = [
    {
        username: "Yuri Gagarin",
        lang: "ru",
    },
    {
        username: "Nil Armstrong",
        lang: "ENG",
    },
];

getUsernameLengths(users2);

function getUsernameLengths(arr) {
    const usernameLengths = arr.map((user) => user.username.length);
    console.log(usernameLengths);
}

// Write a function which parses string integers. If it's not possible to parse, then add null.

function parseInteger(arr) {
    const stringToNumber = arr.map((item) => {
        if (isNaN(Number(item))) {
            return null;
        } else {
            return Number(item);
        }
    })
    console.log(stringToNumber);
}

parseInteger(["1", "2", "34"]);
parseInteger(["1", "px", "2323"]);