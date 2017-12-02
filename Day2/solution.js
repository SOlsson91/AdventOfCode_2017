module.exports = {
  addArrayLines: function(numbers){
    let diff = 0;
    for(let i = 0; i < numbers.length; ++i){
      diff += Math.max.apply(null, numbers[i]) - Math.min.apply(null, numbers[i]);
    }
    return diff;
  },

  evenArrayAdd: function(numbers){
    let diff = 0;
    for(let row = 0; row < numbers.length; ++row){
      for(let number= 0; number < numbers[row].length; ++number){
        for(let i = 0; i < numbers[row].length; ++i){
          if(Number.isInteger(numbers[row][number]/numbers[row][i]) && numbers[row][number]/numbers[row][i] != 1){
            diff += parseInt(numbers[row][number]/numbers[row][i]);
          }
        }
      }
    }
    return diff;
  }
}
