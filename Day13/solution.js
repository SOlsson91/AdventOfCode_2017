module.exports = {
  packScanner: function(input){
    let val = [];
    input.split("\n").map(x => {
      let objects = x.split(": ");
      let v = {
        index: Number(objects[0]),
        val: objects[1],
        pos: 0,
        forward: true
      };
      val.push(v);
    });

    let index = 0;
    let caught = [];
    for(let i = 0; i <= val[val.length - 1].index; ++i){
      //console.log("Run:", i);
      //console.log(val[index]);
      let active = false;
      val.forEach(function(value, key, map){
        if(value.forward){ value.pos++; }
        else { value.pos--; }

        if(i == value.index){ active = true; }
        if(value.pos >= value.val){ value.forward = false; }
        if(value.pos <= 1){ value.forward = true; }
      });
      if(val[index].pos == 1){
        caught.push(val[index].index * val[index].val);
      }

      if(active){
        if(val[index].pos == i){
//            console.log("true", val[index].index, "(", val[index].pos,")");
        }


        index++;
      } else {
        //console.log(i);
      }
      //console.log(val);
    }
    return caught.reduce(function(a, b){
      return a+b;
    });
  }
}
