function characterInRange(character1, character2) {

    function findBiggerChar(char1, char2) {
        let character1 = char1.charCodeAt(0);
        let character2 = char2.charCodeAt(0);

        if (character1 < character2) {
            return [character1, character2];
        } else {
            return [character2, character1];
        }
    }

    let [start, stop] = findBiggerChar(character1, character2);

    let result = [];   
    for (let i = start + 1; i < stop; i++) {
        result.push(String.fromCharCode(i))       
    }

    console.log(result.join(' '));

}

characterInRange('a', 'd');