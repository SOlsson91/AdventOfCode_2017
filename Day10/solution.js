module.exports = {
  knotHash: function(input, rounds = 1){
    let list = [...Array(256).keys()];
    let skip = 0,
        currentPos = 0;

    for(let round = 0; round < rounds; ++round){
      for(let i = 0; i < input.length; ++i){
        let slice = list.slice(currentPos, currentPos + input[i]);
        let pos = slice.length;

        if((currentPos + input[i] + 1) > list.length){
          slice.push(...list.slice(0, (currentPos + input[i]) - list.length));
        }
        slice.reverse();

        list.splice(currentPos, input[i], ...slice.splice(0, pos));
        list.splice(0, slice.length, ...slice);

        currentPos = (currentPos + (input[i] + skip++)) % list.length;
      }
    }
    return list;
  },

  hashs: function(input){
    let ROUNDS = 64;
    let ascii = [...input].map(n => String(n).charCodeAt(0));
    ascii.push(17, 31, 73, 47, 23);

    let sparseHash = this.knotHash(ascii, ROUNDS);
    let denseHash = sparseToDense(sparseHash);
    return denseToHex(denseHash);
  }
}

function sparseToDense(sparse){
  let dense = [];
  let numbers = [];
  for(let i = 0; i < sparse.length; i += 16){
    dense.push(sparse.slice(i, i + 16).reduce((a, b) => a^b));
  }
  return dense;
}

function denseToHex(dense){
  return (dense.map(x => ("0" + x.toString(16)).substr(-2)).join(""));
}
