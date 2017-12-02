module.exports = {
  addArrayLines: function(numbers){
    let diff = 0;
    for(let i = 0; i < numbers.length; ++i){
      diff += Math.max.apply(null, numbers[i]) - Math.min.apply(null, numbers[i]);
    }
    return diff;
  }
}
