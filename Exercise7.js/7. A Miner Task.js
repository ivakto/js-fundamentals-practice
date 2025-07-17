function solve(array) {
    let resources = {};
    let currentResource = '';

    for (let i = 0; i < array.length; i++) {

        if (i % 2 === 0) {
            currentResource = array[i];
        } else {
            let quantity = Number(array[i]);

            if (!resources.hasOwnProperty(currentResource)) {
                resources[currentResource] = 0;
            }

            resources[currentResource] += quantity;
        }
    }

    for (let resource in resources) {
        console.log(`${resource} -> ${resources[resource]}`);
    }
}

solve([

'Gold',

'155',

'Silver',

'10',

'Copper',

'17'

] );

