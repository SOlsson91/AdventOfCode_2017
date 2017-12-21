module.exports = {
  jumpsToEscape: function(rows){
    let location = 0;
    let jumps = 0;
    while(location < rows.length && location >= 0){
      location += rows[location]++;
      jumps++;
    }
    return jumps;
  },

  jumpsToEscapeV2: function(rows){
    let location = 0;
    let jumps = 0;
    let jumpLength = 0;
    while(location < rows.length && location >= 0){
      jumpLength = parseInt(rows[location]);
      if(jumpLength >= 3){ rows[location]--}
      else {rows[location]++}
      location += jumpLength;
      jumps++;
    }
    return jumps;
  }
}
