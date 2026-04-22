function range(start, end, num = 1) {
    arr = [];
    if(num < 0) {
        for (let i = start; i >= end; i += num) {
            arr.push(i);
        }
        return arr;
    }
    for (let i = start; i <= end; i += num) {
        arr.push(i);
    }
    return arr;
}

function sum(arr) {
    num = 0;
    for (let i = 0; i < arr.length; i++) {
        num += arr[i];
    }
    return num;
}

console.log(range(1, 10));
console.log(range(5, 2, -1));
console.log(sum(range(1, 10)));
