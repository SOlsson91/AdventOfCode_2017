module.exports = {
  createSpiralArray: function(searchedNumber){
    let size = calculateSizeOfArray(searchedNumber);
    let spiral = [];

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
