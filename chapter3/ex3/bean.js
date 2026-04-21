function countBs(str) {
    num = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "B") {
            num++;
        }
    }
    return num;
}

function countChar(str, chr) {
    num = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] === chr) {
            num++;
        }
    }
    return num;
}

console.log(countBs("BOB"));
console.log(countChar("kakkerlak", "k"));
