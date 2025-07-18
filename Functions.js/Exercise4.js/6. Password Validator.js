function passwordValidtor(password) {

    function lengthValidator(pass, min, max) {
        return pass.length >= min && pass.length <= max;
    }

    function checkRange(num, min, max) {
        return num >= min && num <= max;
    }

    function checkLettersDigits(pass){
        for (let i = 0; i < pass.length; i++) {
            let asciiCode = pass[i].charCodeAt(0);

            if (!checkRange(asciiCode, 48, 57) && !checkRange(asciiCode, 65, 90) && !checkRange(asciiCode, 97, 122)) {
                return false;
            }

        }
        return true;
    }

    function countDigits(pass) {
        let result = 0;
        for (let i = 0; i < pass.length; i++) {
            let asciiCode = pass[i].charCodeAt(0);

            if (checkRange(asciiCode, 48, 57)) {
                result ++;
            }
        }
        return result;
    }

    let isValid = true;

    if (!lengthValidator(password, 6, 10)) {
        console.log("Password must be between 6 and 10 characters");
        isValid = false;
    }
    
    if (!checkLettersDigits(password)) {
        console.log("Password must consist only of letters and digits");
        isValid = false;
    }

    if (countDigits(password) < 2) {
        console.log("Password must have at least 2 digits");
        isValid = false;
    }
    if (isValid) {
        console.log("Password is valid");
    }
}

passwordValidtor('logIn');