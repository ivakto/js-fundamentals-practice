function solve(input) {
    
    let numbers = input
        .shift()
        .split(' ')
        .map(Number);

    for (let command of input) {
        let commandParts = command.split(' ');
        let commandName = commandParts[0];

        if (commandName === 'Add') {
            let value = Number(commandParts[1]);
            numbers.push(value);
        } else if (commandName === 'Remove') {
            let value = Number(commandParts[1]);
            numbers = numbers.filter(num => num !== value);
        } else if (commandName === "RemoveAt") {
            let index = Number(commandParts[1]);
            numbers.splice(index, 1);
        } else if (commandName === 'Insert') {
            let number = Number(commandParts[1]);
            let index = Number(commandParts[2]);
            numbers.splice(index, 0, number);
        }
    }

    console.log(numbers.join(' '));
}

solve(['4 19 2 53 6 43', 'Add 3', 'Remove 2', 'RemoveAt 1', 'Insert 8 3']);