module.exports = {
  knotHash: function(numbers, listLength){
    let list = createList(listLength);
    let skipSize = 0;
    let currentPosition = 0;
    for(let i = 0; i < numbers.length; ++i){
      let slice = reverseSection(numbers[i], list, currentPosition);
      insertReversedSection(list, slice, currentPosition);
      currentPosition = updateCurrentPosition(list, skipSize, currentPosition, numbers[i]);
      skipSize++;
    }
    return (list[0] * list[1]);
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
