function solve(jsonArray) {
    
    let dictionary = {};

    for (let jsonStr of jsonArray) {
        let entry = JSON.parse(jsonStr);
        let termKey = Object.keys(entry)[0]; // връща масив с всички клчове
        let definition = entry[termKey];
        dictionary[termKey] = definition; // автоматично се презаписва
    }

    let sortedTerms = Object.keys(dictionary).sort(); // не подаваме нищо, защото сортира по азбучен ред

    for (let term of sortedTerms) {
        console.log(`Term: ${term} => Definition: ${dictionary[term]}`);
    }

}