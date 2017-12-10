module.exports = {
  knotHash: function(numbers, listLength, rounds){
    let list = createList(listLength);
    let skipSize = 0;
    let currentPosition = 0;
    for(let i = 0; i < rounds; ++i){
      for(let j = 0; j < numbers.length; ++j){
        let slice = reverseSection(numbers[j], list, currentPosition);
        insertReversedSection(list, slice, currentPosition);
        currentPosition = updateCurrentPosition(list, skipSize, currentPosition, numbers[j]);
        skipSize++;
      }
    }
    return list;
  },

  hashSymbol: function(symbols){
    let ascii = [];
    for(let i = 0; i < symbols.length; ++i){
      ascii.push(symbols.toString().charCodeAt(i));
    }
    let ending = [17, 31, 73, 47, 23];
    for(let i = 0; i < ending.length; ++i){
      ascii.push(ending[i]);
    }
    let sparseHash = this.knotHash(ascii, 256, 64);
    let denseHash = sparseToDense(sparseHash);
    return denseToHex(denseHash);
  }
}

function reverseSection(number, list, currentPosition){
  let slice = [];
  if(currentPosition + number > list.length){
    let firstNum = list.length - currentPosition;
    let secNum = number - firstNum;
    slice = list.slice(currentPosition, currentPosition + firstNum);
    slice = slice.concat(list.slice(0, secNum));
  } else {
    slice = list.slice(currentPosition, currentPosition + number);
  }
  return slice.reverse();
}

function insertReversedSection(list, slice, currentPosition){
  let fromStart = 0;
  for(let j = 0; j < slice.length; ++j){
    if((currentPosition + j) >= list.length){
      list.splice((fromStart), 1, slice[j]);
      fromStart += 1;
    } else {
      list.splice((currentPosition + j), 1, slice[j]);
    }
  }
}

function updateCurrentPosition(list, skipSize, currentPosition, number){
  if((currentPosition + number + skipSize) > list.length){
    let diff = (currentPosition + number + skipSize) - list.length;
    currentPosition = diff;
  } else {
    currentPosition = currentPosition + number + skipSize;
  }
  return currentPosition;
}

function createList(listLength){
  let list = [];
  for(let i = 0; i < listLength; ++i){
    list.push(i);
  }
  return list;
}

function sparseToDense(sparse){
  let dense = [];
  let numbers = [];
  for(let i = 0; i < sparse.length; ++i){
    numbers.push(sparse[i]);
    if((i + 1) % 16 == 0){
      dense.push(numbers[0]^numbers[2]^numbers[3]^numbers[4]^numbers[5]^
                numbers[5]^numbers[6]^numbers[7]^numbers[8]^numbers[9]^
                numbers[10]^numbers[11]^numbers[12]^numbers[13]^numbers[14]^numbers[15]);
      numbers = [];
    }
  }
  return dense;
}

function denseToHex(dense){
  let hexString = "";
  for(let i = 0; i < dense.length; ++i){
    let hex = dense[i].toString(16);
    if(hex.length < 2){
      hex = "0" + hex;
    }
    hexString += hex;
  }
  return hexString;
}
