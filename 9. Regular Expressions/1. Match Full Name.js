function solve(names) {

    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;

    let results = names.matchAll(pattern);

    let output = [];

    for (let match of results) {
        output.push(match[0]);
    }

    console.log(output.join(' '));
}