function findThirdBit(number) {
    var num = +number;
    console.log((num >> 3) & 1);
}

findThirdBit(15);