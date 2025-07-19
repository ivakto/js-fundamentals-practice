//The input will be given as two separated strings (a word as a first parameter and a text as a second).
//Write a function that checks given text for containing a given word. The comparison should be case insensitive. 
//Once you find a match, print the word and stop the program.
//If you don't find the word print: "{word} not found!"

function solve(searchWord, text) {
    
    let wordsFromText = text.toLowerCase().split(' ');
    
    if (wordsFromText.includes(searchWord.toLowerCase())) {
        console.log(searchWord);
    } else {
        console.log(`${searchWord} not found!`);
    }
}

solve('stop', 'JavaScript is the best programming language');