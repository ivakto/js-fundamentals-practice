function solve(json) {

    let newObj = JSON.parse(json);

    for (let key of Object.keys(newObj)) {
        console.log(`${key}: ${newObj[key]}`);
    }

}

solve('{"name": "George", "age": 40, "town": "Sofia"}');