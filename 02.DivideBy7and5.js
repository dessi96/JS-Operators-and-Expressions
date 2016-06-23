function divideBy7and5(value) {
    var num = +value;
    if (num % 7 == 0 && num % 5 == 0){
        console.log("true " + num)
    }
    else {
        console.log("false " + num)
    }
}

divideBy7and5(5);