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
      let copy = val.slice();
      while(useDelay){
        console.log("start","(delay)", delay,"-", copy);
        copy.forEach(function(value){
          value.pos--;
        });
        caught = runPackage(copy);
        console.log("Caught:", caught);
        if(delay == 2){ break;}

        if(caught.length == 0){ useDelay = false; delay--;}
        delay++;
      }
    } else {
      val.forEach(function(value){
        value.pos--;
      });
      caught = runPackage(val);
    }
    console.log("Delay:", delay);
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
  console.log(caught);
  return caught;
}
