function minimum(num1, num2) {
    if (num1 < num2) {
        return num1;
    }
    if (num2 < num1) {
        return num2;
    }
    if (num1 === num2) {
        return -1;
    }
}

console.log(minimum(1, 2));
console.log(minimum(3, 1));

