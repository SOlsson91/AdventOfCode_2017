module.exports = {
  packScanner: function(input){
    let values = [];
    input.split("\n").map(x => {
      let objects = x.split(": ");
      let v = {
        pos: Number(objects[0]),
        val: objects[1]
      };
      values.push(v);
    });

    for(let i = 0; i < values[values.length -1].pos; ++i){
      if(i < values.length){
        
        console.log(values[i].pos);
      }
    }
  }
}
