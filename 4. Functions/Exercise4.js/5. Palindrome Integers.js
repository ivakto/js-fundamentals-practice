function findPalindrome (array) {

    function checkPalindrome(num) {
        let stringNum = String(num);
        let reversedNum = stringNum.split('').reverse().join('');

        return stringNum === reversedNum ? true : false;
    }

    for (el of array) {
        console.log(checkPalindrome(el));
    }
}