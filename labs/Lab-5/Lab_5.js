const readline = require('readline-sync');

// Hàm đếm số lần xuất hiện của từ trong câu
function countWords(sentence) {
    const words = sentence.split(/\s+/);
    const wordCount = {};

    for (const word of words) {
        const cleanWord = word.replace(/[.,?!]/g, '');

        if (cleanWord) {
            wordCount[cleanWord] = (wordCount[cleanWord] || 0) + 1;
        }
    }

    return wordCount;
}

// Nhập câu 
const inputSentence = readline.question("Enter a sentence: ");

// Đếm số lần xuất hiện của từ
const result = countWords(inputSentence);

// In kết quả
console.log("Word Frequency:");
for (const word in result) {
    console.log(`${word}: ${result[word]}`);
}