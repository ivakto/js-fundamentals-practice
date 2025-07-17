function solve(chr1, chr2, chr3) {
    
    chr1ASCII = chr1.charCodeAt(0);
    chr2ASCII = chr2.charCodeAt(0);
    chr3ASCII = chr3.charCodeAt(0);

    console.log(`${chr3}${chr2}${chr1}`);
    console.log(`${chr3ASCII} ${chr2ASCII} ${chr1ASCII}`);
}

solve('a', 'b', 'c');