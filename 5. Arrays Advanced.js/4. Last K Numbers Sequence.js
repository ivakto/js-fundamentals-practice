function solve(n, k) {
    let result = [1];

    for (let i = 1; i < n; i++) {
        let startIndex = i - k;
        if (startIndex < 0) {
            startIndex = 0;
        }
        let previousNumbers = result.slice(startIndex, i);

        let sum = 0;
        for (let number of previousNumbers) {
            sum += number;
        }

        result[i] = sum;
    }

    console.log(result.join(" "));
}