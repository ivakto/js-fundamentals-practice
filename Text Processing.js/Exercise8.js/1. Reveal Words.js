// Write a function, which receives two parameters.
//The first parameter will be a string with some words separated by ', '.
//The second parameter will be a string that contains templates containing '*'.
//Find the word with the same length as the template and replace it.

function solve(str1, str2) {

    let searchWordArr = str1.split(', ');
    let searchWords = {};
    
    for (let word of searchWordArr) {
        let key = '*'.repeat(word.length);
        searchWords[key] = word;
    }
    let sentence = str2.split(' ');

    for (let i = 0; i < sentence.length; i++) {
        let currentWord = sentence[i];
        if (searchWords.hasOwnProperty(currentWord)) {
            sentence[i] = searchWords[currentWord];
        }
    }
    console.log(sentence.join(' '));
}

solve('great, learning', 'softuni is ***** place for ******** new programming languages');