let size = 8;
let chessString = "";

for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
        if ((i + j) % 2 === 0) {
            chessString += " "
        }
        else {
            chessString += "#"
        }
    }
    chessString += "\n";
}

console.log(chessString);
