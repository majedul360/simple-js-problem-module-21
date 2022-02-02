// use just conditional if , else 

let num1 = 20;
let num2 = 30;

if(num1 > num2) {
    console.log("largest", num1);
}
else {
    console.log('largest', num2);
}


// use function 

function findLargestValue (number1, number2, number3) {
    if (number1 > number2 && number1 > number3) {
        return (`large number is ${number1}`);
    }
    else if (number2 > number1 && number2 > number3) {
        return (`large number is ${number2}`);
    }
    return (`large number is ${number3}`)
}

let checkYourNumber = findLargestValue(29, 37, 40);
console.log(checkYourNumber); 

// find smalllest number 

function smallestNumber (firstNumber, secondNumber, thirdNumber) {
    if (firstNumber < secondNumber && firstNumber < thirdNumber) {
        return (`small number is ${firstNumber}`);
    }
    else if (secondNumber < firstNumber && secondNumber < thirdNumber) {
        return (`small number is ${secondNumber}`);
    }
    return (`small number is ${thirdNumber}`);
}

let checkSmallNumber = smallestNumber(38, 40, 89);
console.log(checkSmallNumber);