function solve(word, symbol, checkWord) {
    let result = word.replace('_', symbol);
    if (result === checkWord) {
        console.log("Matched");
    } else {
        console.log("Not Matched");
    }
}

solve('Str_ng', 'I', 'Strong');
solve('Str_ng', 'i', 'String' );