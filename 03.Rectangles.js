function rectangles(value) {
    var width = +value[0],
        height = +value[1];

    var area = width * height;
    var perimeter = (2 * width) + (2 * height)

    console.log(area.toFixed(2) + " " +perimeter.toFixed(2));
}