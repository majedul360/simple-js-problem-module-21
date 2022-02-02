// find largest element of arry 
let arry = [10, 20, 70, 80, 30, 40, 50];
let i = 0;
let element = arry[i];

while (i < arry.length) {
    if (arry[i] > element) {
        element = arry[i];
    }
    i++;
}
console.log(element);

// find largest element of array 

function largestElement (number) {
    let largeElement = number[0];

    for (let i = 0; i < number.length; i++) {
        if(number[i] > largeElement) {
            largeElement = number[i];
        }
    }
    return largeElement;
}

let inputArray = [10, 20, 30, 70, 60, 40, 90];
let getLargeElement = largestElement(inputArray)
console.log(getLargeElement);