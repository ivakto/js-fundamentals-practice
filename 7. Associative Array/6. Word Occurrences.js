function solve(array) {

    let map = new Map();

    for (let word of array) {
        if (map.has(word)) {
            map.set(word, map.get(word) + 1);
        } else {
            map.set(word, 1);
        }
    }

    let sorted = Array.from(map.entries())
        .sort((a, b) => b[1] - a[1] );

    for (let [key, value] of sorted) {
        console.log(`${key} -> ${value} times`);
    }    
}

solve(["Here", "is", "the", "first", "sentence",

"Here", "is", "another", "sentence", "And",

"finally", "the", "third", "sentence"]);