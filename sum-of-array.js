// add array numbers in using loop 
let numbers = [10, 20, 30, 40, 50, 60, 70];
let sum = 0;
let i = 0;

while (i < numbers.length) {
    console.log(numbers[i]);
    sum = sum + numbers[i];
    i++;
}

console.log(sum);

// add array numbers using function and for loop 

function addArray (arry) {
    let sum = 0;
    for (let i = 0; i < arry.length; i++) {
        sum = sum + arry[i];
    }
    return sum;
}

let arry = [10, 20, 30, 40, 50];
let getSum = addArray(arry);
console.log(getSum);