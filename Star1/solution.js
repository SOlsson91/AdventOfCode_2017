let fs = require("fs");
let numbers = fs.readFileSync("./numbers.txt").toString("utf-8").replace(/(\r\n|\n|\r)/gm,"").split("");
for(let number in numbers){
  numbers[number] = parseInt(numbers[number]);
}

function addIfNextSame(){
  let sum = [];
  let first = numbers[0];
  for(let i = 1; i < numbers.length; ++i){
    if(first === numbers[i]){
      sum.push(first);
    }
    first = numbers[i];
  }
  if(numbers[0] === numbers[numbers.length - 1]){ sum.push(numbers[0]); }
  return sum.reduce((a, b) => a + b, 0);
}

function addIfOtherHalfSame(){
  let sum = [];
  let first = 0;
  for(let i = 0; i < numbers.length; ++i){
    first = numbers[i];
    if(first === numbers[(numbers.length/2) + i] && i < numbers.length/2){
      sum.push(first);
    }
    else if(first === numbers[i - (numbers.length/2)] && i >= numbers.length/2){
      sum.push(first);
    }
  }
  return sum.reduce((a, b) => a + b, 0);
}
console.log("Result: ", addIfOtherHalfSame());
