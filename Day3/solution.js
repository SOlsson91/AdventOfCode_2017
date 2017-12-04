module.exports = {
  createSpiralArray: function(searchedNumber){
    let spiral = [];
    spiral.push([]);
    let size = calculateSizeOfArray(searchedNumber);
    let square = Math.sqrt(size);
    let index = 0;
    console.log(spiral);
    while(index <= size){
      
      console.log(spiral);
      break;
    }
    for(let i = 0; i < square; ++i){
      let subSpiral = [];
      for(let j = 0; j < square; ++j){
        subSpiral.push(j);
      }
      spiral.push(subSpiral);
    }
    console.log(spiral);
  }
}

function calculateSizeOfArray(searchedNumber){
  let addToSearchedNumber = 0;
  while(!Number.isInteger(Math.sqrt(searchedNumber + addToSearchedNumber))){
    addToSearchedNumber++;
  }
  return searchedNumber + addToSearchedNumber;
}
