function solve(group, type, day) {

    let price = 0;

    if (day === "Friday") {
        if (type === "Students") {
            if (group >= 30) {
                price = group*8.45*0.85;  
            }
            else {
                price = group*8.45;
            }

        }
        else if (type === "Business") {
            if (group >= 100) {
                price = (group-10)*10.9;
            }
            else {
                price = group*10.9;
            }
        }
        else if (type === "Regular") {
            if (group >= 10 && group <= 20) {
                price = group*15*0.95;
            }
            else {
                price = group*15;
            }
        }
    }

    else if (day === "Saturday") {
        if (type === "Students") {
            if (group >= 30) {
                price = group*9.8*0.85;  
            }
            else {
                price = group*9.8;
            }

        }
        else if (type === "Business") {
            if (group >= 100) {
                price = (group-10)*15.6;
            }
            else {
                price = group*15.6;
            }
        }
        else if (type === "Regular") {
            if (group >= 10 && group <= 20) {
                price = group*20*0.95;
            }
            else {
                price = group*20;
            }
        }
    }

    else if (day === "Sunday") {
        if (type === "Students") {
            if (group >= 30) {
                price = group*10.46*0.85;  
            }
            else {
                price = group*10.46;
            }

        }
        else if (type === "Business") {
            if (group >= 100) {
                price = (group-10)*16;
            }
            else {
                price = group*16;
            }
        }
        else if (type === "Regular") {
            if (group >= 10 && group <= 20) {
                price = group*22.5*0.95;
            }
            else {
                price = group*22.5;
            }
        }
    }

    console.log(`Total price: ${price.toFixed(2)}`)
}

solve(30, "Students", "Sunday");
solve(40, "Regular", "Saturday");