function solve(input) {
    let pattern = /\+359([ -])2\1\d{3}\1\d{4}\b/g;
    let matches = input[0].matchAll(pattern);

    let output = [];

    for (let match of matches) {
        output.push(match[0]);
    }

    console.log(output.join(', '));
}