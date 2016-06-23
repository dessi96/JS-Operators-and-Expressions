function calculateArea(value) {
    var a = +value[0],
        b = +value[1],
        h = +value[2];

    var area = h * ((a + b) / 2);

    console.log(area.toFixed(7))
}
