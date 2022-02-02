// find smallest Number of an array 
function smallestNumber (arry) {
    let smallestElement = arry[0];

    for (let i = 0; i < arry.length; i++) {
        if (arry[i] < smallestElement) {
            smallestElement = arry[i];
        }
    }
    return smallestElement;
}

let input = [24, 45, 12, 50, 2, 70, 20];
let getSmallNumber = smallestNumber(input);
console.log(getSmallNumber);

// find smallest number from three numbers 

function smallNumber (number1, number2, number3) {
    if (number1 < number2 && number1 < number3) {
        return (`small number is ${number1}`)
    }
    else if (number2 < number1 && number2 < number3) {
        return (`small number is ${number2}`)
    }
    return (`small number is ${number3}`);
}

let chekYourNumber = smallNumber(30, 20, 40);
console.log(chekYourNumber);

// array ar vitore thaka onek gulo shonkhar gor ber korte hobe 

function average (numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum = (sum + numbers[i]);
        
    }
    return sum / numbers.length;
}

let setNumbers = [10, 20, 30, 40, 50, 60,];
let averageNumber = average(setNumbers);
console.log(averageNumber);

// area of rectangle 

function rectangle (w, h) {
    return w * h;
}

console.log(rectangle(10, 20));

// Q15: What code you have to write to know the number of “a” in a string

var sentence = "I am hardworking. I am determined. I will be a web developer.";
var count = 0;
for(var i = 0; i < sentence.length; i++){
    var letter = sentence[i];
  if(sentence[i] == 'a'){
    count++;
  }
}
console.log(count)

// How do I get the second largest element from an array in javascript 

function secondLargestNumber (setNumber) {
    let firstLargeNumber = setNumber[0];
    let secondLargeNumber = setNumber[0]; //[10, 20, 30, 60, 80]

    for (let i = 0; i < setNumber.length; i++) {
        if(setNumber[i] > firstLargeNumber) {
            secondLargeNumber = firstLargeNumber;
            firstLargeNumber = setNumber[i];
        }
    } 

    return secondLargeNumber;
}

let setInput = [10, 20, 30, 60, 80];
let getSecondLargeNumber = secondLargestNumber(setInput);
console.log(getSecondLargeNumber);

// How do I get the smallest element from an array in javascript 

function smaller (setInput) {
    let smallNumber = setInput[0];
    for (let i = 0; i < setInput.length; i++) {
        if (setInput[i] < smallNumber) {
            smallNumber = setInput[i];
        }
    }
    return smallNumber;
}

let setYourNumber = [40, 50, 10, 20, 30];
let getYourSmallNumber = smaller(setYourNumber);
console.log(getYourSmallNumber);

// How do I get the second smallest element from an array in javascript 

function getSecondSmallNumber (setYourNum) {
    let firstSmallestNumber = setYourNum[0];
    let secondSmallestNumber = setYourNum[0];
    for (let i = 0; i < setYourNumber.length; i++) {
        if (setYourNum[i] < firstSmallestNumber) {
            secondSmallestNumber = firstSmallestNumber;
            firstSmallestNumber = setYourNum[i];
        }
    }
    return secondSmallestNumber;
}

let setYourInput = [20, 30, 40, 60, 70];
let getYourSmallestNumber = getSecondSmallNumber(setYourInput);
console.log(getYourSmallestNumber);