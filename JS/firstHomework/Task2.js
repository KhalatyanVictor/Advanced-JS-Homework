// 2. How to take arguments in sum function?
function sum() {
    const args = Object.values(arguments);
    return args.reduce((sum, item) => {
        return sum + item;
    });
}

console.log(sum(1, 2, 3, 4));