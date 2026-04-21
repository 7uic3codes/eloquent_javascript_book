function isEven(num) {
    if (num === 0) {
        return "even";
    }
    if (num === 1) {
        return "odd";
    }
    if (num < 0) {
        return isEven(num + 2);
    }
    return isEven(num - 2);
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
