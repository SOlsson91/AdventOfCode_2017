
module.exports = {
  hexPath: function(input){
    let values = [0,0,0];
    input.split(",").forEach(v => {
      let vec = valueToPath(v);
      values[0] += Number(vec[0]);
      values[1] += Number(vec[1]);
      values[2] += Number(vec[2]);
    });
    return Math.max(...values.map(Math.abs));
  }
}

function valueToPath(path){
  let x = 0, y = 0, z = 0;
  switch(path){
    case 'n':{ y++; z--; break; }
    case 's':{ y--; z++; break; }
    case 'nw':{ x--; y++; break; }
    case 'se':{ x++; y--; break; }
    case 'ne':{ x++; z--; break; }
    case 'sw':{ x--; z++; break; }
  }
  return [Number(x),Number(y),Number(z)];
}
