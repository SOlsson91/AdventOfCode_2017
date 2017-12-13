module.exports = {
  calculateStepsToNumber: function(input){
    let spiral = createSpiralArray(input);
    let result = calculateStepsFromMiddle(spiral, input);
    return (Math.abs(result[0]) + Math.abs(result[1]));
  }
}

function calculateSizeOfArray(searchedNumber){
  let addToSearchedNumber = 0;
  while(!Number.isInteger(Math.sqrt(searchedNumber + addToSearchedNumber))){
    addToSearchedNumber++;
  }
  return searchedNumber + addToSearchedNumber;
}

Array.matrix = function(numrows, numcols, initial){
   var arr = [];
   for (var i = 0; i < numrows; ++i){
      var columns = [];
      for (var j = 0; j < numcols; ++j){
         columns[j] = initial;
      }
      arr[i] = columns;
    }
    return arr;
}


function createSpiralArray(searchedNumber){
  let spiral = [];
  let size = calculateSizeOfArray(searchedNumber);
  let square = Math.sqrt(size);

  let index = size;
  let startSize = size / square;
  let first = true;
  let secondRun = false;
  while(index > 0){
    let side = [];
    for(let i = 0; i < startSize; ++i){
      side.push(index--);
    }
    if(first){
      first = false;
      startSize--;
    } else {
      if(!secondRun){
        secondRun = true;
      } else {
        startSize--;
        secondRun = false;
      }
    }
    spiral.push(side);
  }
  let arraySide = size / square;
  let result = Array.matrix(arraySide, arraySide, 0);
  let locX = arraySide;
  let locY = arraySide - 1;
  let runs = 0;
  for(let i = 0; i < spiral.length; ++i){
    if(i % 2 == 0){
      if(runs % 2 == 1){
        for(let item = 0; item < spiral[i].length; ++item){
          locX++;
          result[locY][locX] = spiral[i][item];
        }
      } else {
        for(let item = 0; item < spiral[i].length; ++item){
          locX--;
          result[locY][locX] = spiral[i][item];
        }
      }

    } else {
      if(runs % 2 == 1){
        for(let item = 0; item < spiral[i].length; ++item){
          locY++;
          result[locY][locX] = spiral[i][item];
        }
      } else {
        for(let item = 0; item < spiral[i].length; ++item){
          locY--;
          result[locY][locX] = spiral[i][item];
        }
      }
      runs++;
    }
  }
  return result;
}

function calculateStepsFromMiddle(spiral, input){
  let middle = [];
  let numLocation = [];
  for(let y = 0; y < spiral.length; ++y){
    for(let x = 0; x < spiral[y].length; ++x){
      if(spiral[y][x] == 1){
        middle.push(x);
        middle.push(y);
      }
      if(spiral[y][x] == input){
        numLocation.push(x);
        numLocation.push(y);
      }
    }
  }
  return ArrayDiff(numLocation,middle);
}

function ArrayDiff(a1,a2){
  let result = [];
  result.push(a1[0]-a2[0]);
  result.push(a1[1]-a2[1]);
  return result;
}
