//Finding maximum value/minimum value from an integer array
//let intArr = [1, 2, 3, 4, 5];
// Minimum: 1
// Maximum: 5
 let intArr = [1, 2, 3, 4, 5];
 let min = intArr[0];
 let max = intArr[0];
 for (i = 1; i < intArr.length; i++){
 if (intArr[i] < min){
    min = intArr[i];
 }
 if (intArr[i] > max){
    max = intArr[i]
 }
 }
 console.log(`Minimun: ${min}`);
 console.log(`Maximun: ${max}`);