module.exports = {
  stringProcessing: function(symbols){
    let split = symbols.split("");
    let depth = 0;
    let total = 0;
    let cancel = false;
    let garbage = false;
    for(let i = 0; i < split.length; ++i){
      if(cancel == true){
        cancel = false;
      }
      else{
        if(split[i] == "<"){
          garbage = true;
        }
        if(split[i] == ">"){
          garbage = false;
        }
        if(split[i] == "!" && cancel == false){
          cancel = true;
          continue;
        }
        if(!garbage){
          if(split[i] == "{"){
            depth += 1;
          }
          if(split[i] == "}" && depth >= 0){
            total += depth;
            depth -= 1;
          }
        }
      }
    }
    console.log(total);
    //console.log(split);
  }
}
