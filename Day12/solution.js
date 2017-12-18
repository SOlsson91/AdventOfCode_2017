const helper = require('../utils/helper');

module.exports = {
  travellingSalesman: function(input){
    let values = [];
    input.split("\n").map(x => {
      let pipes = [];
      let objects = x.split(" ");
      for(let i = 2; i < objects.length; ++i){
        pipes.push(Number(objects[i].replace(/,/g, '')));
      }
      let v = {
        house: Number(objects[0]),
        pipes: pipes
      };
      values.push(v);
    });
    let group = Array();
    while(values.length > 0){
      let g = Array();
      g.push(Number(values[0].house));
      let house = getHouse(values, g[g.length - 1]);
      group.push(lookupChildren(values, house, g));

      let updatedValues = [];
      for(let i = 0; i < values.length; ++i){
        if(!g.includes(values[i].house)){
          updatedValues.push(values[i]);
        }
      }
      values = updatedValues;
    }
    return group;
  }
}

function lookupChildren(values, house, g){
  let pipes = house.pipes;
  let group = [];
  for(let i = 0; i < pipes.length; ++i){
    let h = getHouse(values, pipes[i]);
    if(!g.includes(h.house)){
      g.push(h.house);
      let group = lookupChildren(values, h, g);
    }
  }
  return g;
}

function getHouse(values, house){
  for(let i = 0; i < values.length; ++i){
    if(values[i].house == house){
      return values[i];
    }
  }
}
