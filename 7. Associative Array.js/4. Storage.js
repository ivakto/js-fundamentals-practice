function solve(input) {
    let map = new Map();

    for (let line of input) {
        let parsedData = line.split(' ');
        let items = parsedData[0];
        let quantity = Number(parsedData[1]);  // Convert to number

        if (map.has(items)) {
            let existingQuantity = map.get(items);
            let newQuantity = existingQuantity + quantity;
            map.set(items, newQuantity);
        } else {
            map.set(items, quantity);
        }
    }

    for (let [key, value] of map.entries()) {
        console.log(`${key} -> ${value}`);
    }
}

solve(['tomatoes 10', 'coffee 5', 'olives 100', 'coffee 40']);