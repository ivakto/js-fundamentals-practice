function solve(songsArray) {

    class Song {

        constructor (typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }

    }

    let allSongs = [];
    let numberOfSongs = Number(songsArray[0]);

    for (let i = 1; i<= numberOfSongs; i++) {
        let parsedData = songsArray[i].split("_");

        let typeList = parsedData[0];
        let name = parsedData[1];
        let time = parsedData[2];

        let song = new Song(typeList, name, time);

        allSongs.push(song);
    }

    let searchTerm = songsArray.pop();

    if (searchTerm !== "all") {
        allSongs = allSongs
                .filter(song => song.typeList === searchTerm);
    }

    let songsNames = allSongs.map(song => song.name);

    for (let songName of songsNames) {
        console.log(songName);
    }
}