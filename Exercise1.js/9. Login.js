function solve(array) {

    let usernanme = array.shift();   

    let password = '';

    for (let i = usernanme.length - 1; i >= 0; i--) {
        password += usernanme[i];
    }
    
    let tries = 0;
    for (let input of array) {

        if (input != password) {
            tries += 1;
            console.log("Incorrect password. Try again.");
            if (tries == 4) {
            console.log(`User ${usernanme} blocked!`);
            break;
        }
        } else {
            console.log(`User ${usernanme} logged in.`);
            break;
        }

    }
}

solve(['Acer','login','go','let me in','recA']);
