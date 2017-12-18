module.exports = {
  fileToString: function(file){
    let fs = require("fs");
    let numbers = fs.readFileSync(file).toString("utf-8").replace(/(\r\n|\n|\r)/gm,"").split("");
    for(let number in numbers){
      numbers[number] = parseInt(numbers[number]);
    }
    return numbers;
  },

  fileToSimpleString: function(file){
    let fs = require("fs");
    let string = fs.readFileSync(file).toString("utf-8");
    return string;
  },

  fileToArray: function(file){
    let numbers = [];
    let fs = require("fs");
    let rows = fs.readFileSync(file).toString("utf-8").split("\n");
    for(let i = 0; i < rows.length; ++i){
      numbers[i] = rows[i].split("\t");
    }
    return numbers;
  },

  fileToSimpleArray: function(file){
      let fs = require("fs");
      let row = fs.readFileSync(file, "utf-8").split("\n");
      return row;
  },

  arraysEqual: function(arr1, arr2){
    if(arr1.length !== arr2.length){ return false; }
    for(let i = arr1.length; i--;){
      if(arr1[i] !== arr2[i]){ return false;}
    }
    return true;
  },
  ArrayDiff: function(a1,a2){
    let result = [];
    result.push(a1[0]-a2[0]);
    result.push(a1[1]-a2[1]);
    return result;
  }

}
