// Write a function that receives a text as a first parameter and a single word as a second. 
// Find all occurrences of that word in the text and replace them with the corresponding count of '*'.

function solve(text, word) {

    while (text.includes(word)) {
        text = text.replace(word, '*'.repeat(word.length))
    }
    console.log(text);
}

solve('Find the hidden word', 'hidden');