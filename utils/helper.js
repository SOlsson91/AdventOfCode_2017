module.exports = {
  readFile: function(file){
    let fs = require("fs");
    let numbers = fs.readFileSync(file).toString("utf-8").replace(/(\r\n|\n|\r)/gm,"").split("");
    for(let number in numbers){
      numbers[number] = parseInt(numbers[number]);
    }
    return numbers;
  }
}
