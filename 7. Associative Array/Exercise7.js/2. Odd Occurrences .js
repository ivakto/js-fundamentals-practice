function solve(input) {

let map = new Map();
let words = input.split(' ');


for (let word of words) {
    let lower = word.toLowerCase();

    if (map.has(lower)) {
        map.set(lower, map.get(lower) + 1);
    } else {
        map.set(lower, 1);
    }
}
let result = [];

for (let [word, count] of map) {
    if (count % 2 !== 0) {
        result.push(word);
    }
}
console.log(result.join(' '));

}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');