function solve(array) {

        let givenWords = array[0].split(' ');
        let wordCounts = {};

        for (let word of givenWords) {
            wordCounts[word] = 0;
        }

        for (let i = 1; i < array.length; i++) {

            let currentWord = array[i];

            if (wordCounts.hasOwnProperty(currentWord)) {
                wordCounts[currentWord] ++;
            }
        }

        let wordCountsEntries = Object.entries(wordCounts);
        wordCountsEntries.sort((a, b) => b[1] - a[1]);
        
        for (let [key, value] of wordCountsEntries) {
            console.log(`${key} - ${value}`);
        }


    }



solve([

'this sentence',

'In', 'this', 'sentence', 'you', 'have',

'to', 'count', 'the', 'occurrences', 'of',

'the', 'words', 'this', 'and', 'sentence',

'because', 'this', 'is', 'your', 'task'

]);