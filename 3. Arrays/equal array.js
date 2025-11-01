function solve(str1, str2) {

    let areEqual = true;
    let sum = 0;
    
    for (let i = 0; i < str1.length; i++) {
        let num1 = Number(str1[i]); 
        let num2 = Number(str2[i]); 
        
        if (num1 !== num2) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            areEqual = false;
            break;
        } else {
            sum += num1; 
        }
    }
    
    if (areEqual) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}

solve(['10','20','30'], ['10','20','30']);
solve(['1','2','3','4','5'], ['1','2','4','4','5']);
solve(['1'], ['10']);