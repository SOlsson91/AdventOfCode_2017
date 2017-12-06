const helper = require('../utils/helper');

module.exports = {
  memoryMove: function(inputRow, showSizeOfLoops){
    let cycles = 0;
    let scenarios = []
    let run = true;
    let arr = inputRow[0].split("\t");

    for(let i = 0; i < arr.length; ++i){
      arr[i] = parseInt(arr[i]);
    }
    scenarios.push(arr);
    while(run){
      let row = scenarios[scenarios.length - 1].slice();

      let highestValue = 0;
      for(let i = 0; i < row.length; ++i){
        if(row[i] > row[highestValue] && highestValue !== row[i]){ highestValue = i; }
      }

      let index = highestValue + 1;
      let stopIndex = row[highestValue];
      row[highestValue] = 0;
      for(let i = 0; i < stopIndex; ++i){
        if(index >= row.length){ index = 0; }
        row[index] += 1;
        index++;
      }
      for(let i = 0; i < scenarios.length; ++i){
        if(helper.arraysEqual(row, scenarios[i])){
          if(showSizeOfLoops){ console.log(scenarios.length - i) }
          run = false;
        }
      }
      scenarios.push(row);
      
    }
    return scenarios.length - 1;
  }
}
