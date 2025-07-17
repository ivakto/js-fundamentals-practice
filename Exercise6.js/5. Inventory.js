function solve(array) {

    let heroes = [];

    for (let line of array) {

        let [name, levelStr, itemStr] = line.split(" / ");

        let level = Number(levelStr);
        let items = itemStr ? itemStr.split(", ").filter(i => i) : [];
        heroes.push({name, level, items})
    }
    heroes.sort((a,b) => a.level - b.level);
    for (let hero of heroes) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items.join(", ")}`);
    }
}