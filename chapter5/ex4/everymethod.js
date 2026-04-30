//With loop
function every(array, test) {

    for (const element of array) {
        if(!test(element)) {
            return false;
        }
    }
    
    return true;
}

//With some method
function everysome(array, test) {
    return array.some(test);
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true

console.log(everysome([1, 3, 5], n => n < 10));
// → true
console.log(everysome([2, 4, 16], n => n < 10));
// → false
console.log(everysome([], n => n < 10));
// → true
