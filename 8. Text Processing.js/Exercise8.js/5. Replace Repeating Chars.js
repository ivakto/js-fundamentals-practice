//Write a function that receives a single string and replace any sequence of the same letters with a single corresponding letter.

function solve(string) {
    let result = '';
    for (let i = 0; i < string.length; i++) {
        if(string[i] !== string[i-1]) {
            result += string[i];
        }
    }
    console.log(result);
}

solve('aaaaabbbbbccccddddfffggg');