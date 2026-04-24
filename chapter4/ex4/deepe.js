function deepEqual(ob1, ob2) {
    if (ob1 === ob2) {
        return true;
    }

    if (ob1 == null || typeof ob1 != "object" ||
        ob2 == null || typeof ob2 != "object"
    ) {
        return false;
    }

    let keys1 = Object.keys(ob1);
    let keys2 = Object.keys(ob2);

    if (keys1.length != keys2.length) {
        return false;
    }

    for (let key of keys1) {
        if(!keys2.includes(key) || !deepEqual(ob1[key], ob2[key])) {
            return false;
        }
    }

    return true;
}







let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true