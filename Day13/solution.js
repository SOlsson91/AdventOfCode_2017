module.exports = {
  packScanner: function(input, useDelay){
    let val = [];
    input.split("\n").map(x => {
      let objects = x.split(": ");
      let v = {
        index: Number(objects[0]),
        val: objects[1],
        pos: 1,
        forward: true
      };
      val.push(v);
    });

    let delay = 0;
    let caught = Array();
    if(useDelay){
      while(useDelay){
        console.log("(delay)", delay);
        console.log(val);
        caught = runPackage(val);
        console.log("Caught:", caught);

        if(delay == 16){ break;}
        if(caught.length == 0){ useDelay = false;}
        delay++;
      }
    } else {
      caught = runPackage(val);
    }
    return caught.reduce(function(a, b){ return a+b; });
  }
}

function runPackage(val){
  let index = 0;
  let caught = [];
  for(let i = 0; i <= val[val.length - 1].index; ++i){
    let active = false;
    val.forEach(function(value){
      if(value.forward){ value.pos++; }
      else { value.pos--; }

      if(i == value.index){ active = true; }
      if(value.pos >= value.val){ value.forward = false; }
      if(value.pos <= 1){ value.forward = true; }
    });

    if(val[index].pos == 1){
      caught.push(val[index].index * val[index].val);
    }
    if(active){ index++; }
  }
  return caught;
}
