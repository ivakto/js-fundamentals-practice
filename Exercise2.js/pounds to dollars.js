function solve(pounds) {

    const poundToDollar = 1.31;
    let dollars = poundToDollar * pounds;
    console.log(dollars.toFixed(3));
}

solve(80);