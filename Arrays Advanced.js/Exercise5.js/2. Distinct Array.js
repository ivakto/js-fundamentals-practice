function solve(arr) {
    
    let array = arr.slice();
    let wagons = array.shift().split(' ').map(Number);
    let maxCapacity = Number(array.shift());

    function checkElementFit(arr, value, maxValue) {
        for (el of arr) {
            if (el + value <= maxValue) {
                return array.indexOf(el);
            }
        }
        return undefined;
    }

    for (el of array) {
        if (el.includes("Add")) {
            [_, passengers] = el.split(" ");
            wagons.push(Number(passengers));
        } else {
            let passengersToFit = Number(el);
            let freeWagon = checkElementFit(wagons, passengersToFit, maxCapacity);
            if (freeWagon !== undefined) {
                wagons[freeWagon] += passengersToFit;
            }
        }
    }
    console.log(wagons.join(" "));
    
}

solve(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75']);