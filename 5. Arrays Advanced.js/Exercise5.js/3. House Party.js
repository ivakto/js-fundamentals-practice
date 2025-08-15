//Write a function that keeps track of guests that are going to a house party.
//You will be given an array of strings. Each string will be one of the following:
//- "{name} is going!"
//- "{name} is not going!"
//If you receive the first type of input, you have to add the person if he/she is not in the list 
//(If he/she is in the list print: "{name} is already in the list!").
//If you receive the second type of input, you have to remove the person if he/she is in the list (if not print: "{name} is not in the list!").
//At the end print all the guests each on a separate line

function solve (arr) {

    let guestList = [];
    for (let command of arr) {
        let name = command.split(' ')[0];
        if (command.includes('is going!')) {
            if (guestList.includes(name)) {
                console.log(`${name} is already in the list!`);
            } else {
                guestList.push(name);
            }
        } else {
            if (guestList.includes(name)) {
                let indx = guestList.indexOf(name);
                guestList.splice(indx, 1);
            } else {
                console.log(`${name} is not in the list!`)
            }
        }
    }
    console.log(guestList.join('\n'));
}