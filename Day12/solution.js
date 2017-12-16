module.exports = {
  travellingSalesman: function(input){
    let values = [];
    input.split("\n").map(x => {
      let pipes = [];
      let objects = x.split(" ");
      for(let i = 2; i < objects.length; ++i){
        pipes.push(objects[i]);
      }
      let v = {
        house: objects[0],
        pipes: pipes
      };
      values.push(v);
    });
    let groups =[];
    for(let i = 0; i < values.length; ++i){
      let group = [];
      addPipesToGroup(values, i, group);
    }
  }
}

function addPipesToGroup(values, index, group){
  //group.push(house);
  for(let value = 0; value < values[index].pipes.length; ++value){
    group.push(addPipesToGroup(values, value, group));
  }
  return;
}
