const readline = require('readline-sync');
let x = Number(readline.question('x = '));

if (isNaN(x) || (!Number.isInteger(x))) {
    console.log("Invalid value");
} else {
    if (x % 2 == 0) {
        console.log(`${x} là số chẵn`);
    } else {
        console.log(`${x} là số lẻ`);
    }
}