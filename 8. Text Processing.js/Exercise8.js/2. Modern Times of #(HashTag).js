//The input will be a single string.
//Find all special words starting with #.
//  If the found special word does not consist only of letters, then it is invalid and should not be printed.
//Finally, print out all the special words you found without the label (#) on a new line.

function solve(string) {
    
    let parsedData = string.split(' ');

    for (let word of parsedData) {

        if (word.startsWith('#')) {
            let cleanWord = word.replace('#', '');
             if (cleanWord.length > 0 && cleanWord.split('').every(ch => isLetter(ch))) {
                console.log(cleanWord);
        }
    }
}
function isLetter(char) {
    return char.toLowerCase() !== char.toUpperCase();
}
}

solve('Nowadays everyone uses # to tag a #special word in #socialMedia');