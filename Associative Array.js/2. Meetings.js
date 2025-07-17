function solve(input) {

    let meetings = {};

    for (let line of input) {
        let parsedData = line.split(' ');

        let [weekday, fullNme] = parsedData;


        if (meetings.hasOwnProperty(weekday)) {
            console.log(`Conflict on ${weekday}!`)
        } else {
            meetings[weekday] = fullNme;
            console.log(`Scheduled for ${weekday}`);
        }
    }

    for (let key in meetings) {
        console.log(`${key} -> ${meetings[key]}`);
    }
}

solve(['Monday Peter',

'Wednesday Bill',

'Monday Tim',

'Friday Tim']);