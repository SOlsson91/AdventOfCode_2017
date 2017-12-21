module.exports = {
  packScanner: function(input){
    let caught = 0;
    var input = input.split(/\n/).map(line => {
      let [depth, range] = line.split(/: /).map(n => +n)
      if(depth % ((range - 1) * 2) == 0){
        caught += depth * range
      }
      return [depth, range];
    });

    SEARCH: for(var firstNotCaught = 0; ; firstNotCaught++) {
      for(let [depth, range] of input)
        if((depth + firstNotCaught) % ((range - 1) * 2) == 0){
          continue SEARCH
        }
      break;
    }
    console.log('Part1:', caught)
    console.log('Part2:', firstNotCaught)
  }
}
