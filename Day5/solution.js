module.exports = {
  jumpstToEscape: function(rows){
    let location = 0;
    let jumps = 0;
    while(location < rows.length && location >= 0){
      location += rows[location]++;
      console.log("new-", location, "(jumps:", jumps, ")");
      jumps++;
    }
    return jumps;
  }
}
