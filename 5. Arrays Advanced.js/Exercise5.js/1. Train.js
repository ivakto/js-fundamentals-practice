// You will be given an array of strings.
//The first element will be a string containing wagons (numbers). 
// Each number inside the string represents the number of passengers that are currently in a wagon.
// The second element in the array will be the max capacity of each wagon (single number).
//The rest of the elements will be commands in the following format:
//· Add {passengers} – add a wagon to the end with the given number of passengers.
//· {passengers} - find an existing wagon to fit all the passengers (starting from the first wagon)
//At the end, print the final state of the train (all the wagons separated by a space).

function solve(arr) {

    let inputArray = arr.slice();
    let wagons = inputArray.shift().split(' ').map(Number);
    let maxCapacity = Number(inputArray.shift());

    function checkElement(arr, val, maxValue) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] + val <= maxValue) {
                return i; // Връщайте индекса вместо да търсите отново
            }
        }
        return undefined;
    }

    for (let el of inputArray) {
        if (el.includes('Add')) {
            [_, passengers] = el.split(' ');
            wagons.push(Number(passengers));
        } else {
            let passengersToFit = Number(el);
            let freeWagoon = checkElement(wagons, passengersToFit, maxCapacity);
            if (freeWagoon !== undefined) {
                wagons[freeWagoon] += passengersToFit; // Добавете пътниците
            }
        }
    }
    console.log(wagons.join(' '));
}