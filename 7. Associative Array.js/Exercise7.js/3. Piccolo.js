function solve(array) {

    let set = new Set();

    for(let line of array) {
        let [direction, carNumber] = line.split(', ');

        if (direction === 'IN') {
            set.add(carNumber);
        } else if (direction === 'OUT') {
            set.delete(carNumber);
        }
    }

    if (set.size === 0) {
        console.log('Parking Lot is Empty');
    } else {
        Array.from(set)
        .sort()
        .forEach(car => console.log(car));
    }
}

solve(['IN, CA2844AA',

'IN, CA1234TA',

'OUT, CA2844AA',

'IN, CA9999TT',

'IN, CA2866HI',

'OUT, CA1234TA',

'IN, CA2844AA',

'OUT, CA2866HI',

'IN, CA9876HH',

'IN, CA2822UU']);

solve(['IN, CA2844AA',

'IN, CA1234TA',

'OUT, CA2844AA',

'OUT, CA1234TA'] );