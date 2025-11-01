function solve(input) {
    let text = input[0];

    let pattern = /\b(?<day>\d{2})([-\.\/])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})\b/g;

    let mathes = text.matchAll(pattern);

    for (let match of mathes) {

        let day = match.groups['day'];
        let month = match.groups['month'];
        let year = match.groups['year'];

        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);

    }
}