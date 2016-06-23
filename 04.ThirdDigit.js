function checkThirdDigitfor7(number) {
    number = parseInt(number / 100);
    if (number % 10 == 7) {
       console.log("true");
    } else {
        console.log("false " + number%10);
    }
}

checkThirdDigitfor7(7747877);