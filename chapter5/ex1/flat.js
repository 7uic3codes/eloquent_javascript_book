function flatten(arr) {
    return arr.reduce((arr1, arr2) => arr1.concat(arr2)); 
}

let arr = [[1, 2, 3], [4, 5], [6]];
// → [1, 2, 3, 4, 5, 6]
console.log(flatten(arr));
