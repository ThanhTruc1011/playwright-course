const readline = require('readline-sync');
let height = Number(readline.question('Your height:'));
let weight = Number(readline.question('Your weight:'));

//console.log(bmi);

if (isNaN(height) || isNaN(height) || height <= 0 || weight <= 0) {
    console.log("Invalid value");
} else {
    let bmi = weight / (height * height);
    let toFixedNumber = bmi.toFixed(1);
    let type;
    if (bmi < 18.5) {
        type = "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
        type = "Normal weight";
    } else if (bmi >= 25 && bmi <= 29.9) {
        type = "Over.weight";
    } else {
        type = "Obesity";
    }
    console.log(`bmi: ${toFixedNumber}`);
    console.log(`type: ${type}`);
}