// swip variable value 
let first = 4;
let second = 5;

let temp = first;
console.log(temp);
first = second;
console.log(first);
second = temp;
console.log(second);

// array destracturing 

let subject = ['math', 200, 450];

// let subjectName = subject[0];
// let subjectPages = subject[1];
// let subjectPrice = subject[2]

// console.log(subjectName);
// console.log(subjectPages);
// console.log(subjectPrice);

let [subjectName,subjectPages, subjectPrice] = subject;

console.log(subjectName);
console.log(subjectPages);
console.log(subjectPrice);

// how do work array destructering 

function useArryDestructring () {
    //do something 
    return ["chemistray", 300, 500];
}

let getDestructring = useArryDestructring();
console.log(getDestructring);

let [bookName, bookPages, bookPrice] = getDestructring;

console.log(bookName);
console.log(bookPages);
console.log(bookPrice);



