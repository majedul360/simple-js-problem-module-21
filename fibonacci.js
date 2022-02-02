// shomantor dhara 

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89 

// 3th = 2th + 1th 
// 4th = 3th + 2th 
// 5th = 4th + 3th 
// 7th = 6th + 5th || (7-1) + (7-2)

/* let fibonacci = [0, 1];
for (let i = 2; i < 10; i++) {
    fibonacci[i] = (fibonacci[i -1]) + (fibonacci[i -2]);
}
console.log(fibonacci);
 */

// fabonanci using function and for loop

function getFabonacci (number) {
    if (number< 0) {
        return "please input the positive number";
    }
    else if(number< 2) {
        return "please input the number greather than 2";
    }
    else if (typeof(number) != "number") {
        return "please set a number";
    }
    else {
        let fabonacci = [0, 1];
    for(let i = 2; i < number; i++) {
        fabonacci[i] = fabonacci[i -1] + fabonacci[i -2];
        console.log(fabonacci[i]);
    }

    return fabonacci;
    }

}

let input = 13;
let seeFabonacci = getFabonacci(input);
console.log(seeFabonacci);

var sentence = "I am hardworking. I am determined. I will be a web developer.";
var count = 0;
for(var i = 0; i < sentence.length; i++){
  var letter = sentence[i];
  if(count == 'a'){
    count++;
  }
}
console.log(count)