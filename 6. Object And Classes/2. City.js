// function solve(city) {

//     for (let key of Object.keys(city)) {
//         console.log(`${key} -> ${city[key]}`);
//     }
// }

// solve( {
//     name: "Sofia",
//     area: 492,
//     population: 123456,
//     country: "Bulgaria",
//     postcode: "1000"
// })

function solve(city) {

    for (let [key, value] of Object.entries(city)) {
        console.log(`${key} -> ${value}`);
    }
}

solve( {
    name: "Sofia",
    area: 492,
    population: 123456,
    country: "Bulgaria",
    postcode: "1000"
})