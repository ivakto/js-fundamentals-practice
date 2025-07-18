function solve(input) {

    let movies = [];

    for (let line of input) {

        if (line.startsWith("addMovie")) {
            let name = line.substring(9);
            movies.push({"name" : name});


        } else if (line.includes("directedBy")) {
            let [name, director] = line.split(" directedBy ");
            let movie = movies.find(movie => movie.name === name);

            if (movie) {
                movie.director = director;
            } 
        
        } else if (line.includes("onDate")) {
            let [name, date] = line.split(" onDate ");
            let movie = movies.find(movie => movie.name === name);
            if (movie) {
                movie.date = date;
            }
            
        }
    }
    for (let movie of movies) {
        if (movie.director && movie.date) {
            console.log(JSON.stringify(movie));
        }
    }
}

solve([
'addMovie Fast and Furious',
'addMovie Godfather',
'Inception directedBy Christopher Nolan',
'Godfather directedBy Francis FordCoppola',
'Godfather onDate 29.07.2018',
'Fast and Furious onDate 30.07.2018',
'Batman onDate 01.08.2018',
'Fast and Furious directedBy Rob Cohen'
]);

solve([
'addMovie The Avengers',
'addMovie Superman',
'The Avengers directedBy Anthony Russo',
'The Avengers onDate 30.07.2010',
'Captain America onDate 30.07.2010',
'Captain America directedBy Joe Russo'
]);