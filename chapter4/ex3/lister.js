function arrayToList(arr) {
    list = null;
    for (let i = arr.length - 1; i >= 0; i--) {
        list = prepend(arr[i], list);
    }
    return list;
}

function listToArray(obj) {
    arr = [];
    for (let node = list; node; node = node.rest) {
        arr.push(node.value); 
    }
    return arr;
}

function prepend(element, list) {
    return {value: element, rest: list};
}

function nth(list, counter) {
    count = 0;
    for (let node = list; node; node = node.rest) {
        if (count === counter) {
            return node.value;
        }
        count++;
    }
    return -1;
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(arrayToList([1, 2, 3]));
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
