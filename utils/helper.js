module.exports = {
  fileToString: function(file){
    let fs = require("fs");
    let numbers = fs.readFileSync(file).toString("utf-8").replace(/(\r\n|\n|\r)/gm,"").split("");
    for(let number in numbers){
      numbers[number] = parseInt(numbers[number]);
    }
    return numbers;
  },

  fileToArray: function(file){
    let numbers = [];
    let fs = require("fs");
    let rows = fs.readFileSync(file).toString("utf-8").split("\n");
    for(let i = 0; i < rows.length; ++i){
      numbers[i] = rows[i].split("\t");
    }
    return numbers;
  }
}
