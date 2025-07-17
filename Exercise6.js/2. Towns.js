function solve(array) {

    let result = [];

    for (let record of array) {
        [cityName, latitude, longitude] = record.split(" | ");

        let city = {
            "town" : cityName,
            "latitude": Number(latitude).toFixed(2),
            "longitude": Number(longitude).toFixed(2)
        };
        result.push(city);
    }
    for(let town of result) {
        console.log(town);
    }
}

solve(['Sofia | 42.696552 | 23.32601',

'Beijing | 39.913818 | 116.363625']);

solve(['Plovdiv | 136.45 | 812.575'] );