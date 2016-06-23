function pointInCircle(value) {
    var x = +value[0],
        y = +value[1];

    var inCircle = ((x - 0) * (x - 0) + (y - 0) * (y - 0)) <= 2 * 2;
    var distance = Math.sqrt(x * x + y * y);
    if (inCircle) {
        console.log("yes " + distance.toFixed(2));
    }
    else {
        console.log("no " + distance.toFixed(2));
    }
}