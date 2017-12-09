module.exports = {
  registers: function(rows){
    let info = parseRows(rows);
    let objects = findValues(info);
    let parsedRows = parseInfo(objects, info);

    let largestNumber = 0;
    for(let property in parsedRows){
      if(parsedRows[property] > largestNumber){
        largestNumber = parsedRows[property];
      }
    }
    return largestNumber;
  }
}

function parseRows(rows){
  let result = [];
  for(let i = 0; i < rows.length; ++i){
    let items = rows[i].split(" ");
    result.push({ to: items[0],
                  math: items[1],
                  by: parseInt(items[2]),
                  from: items[4],
                  operator: items[5],
                  value: parseInt(items[6])});
  }
  return result;
}

function findValues(info){
  var objects = {};
  for(let property in info){
    if(!(info[property].to in objects)){
      objects[info[property].to] = 0;
    }
    if(!(info[property].from in objects)){
      objects[info[property].from] = 0;
    }
  }
  return objects;
}

function parseInfo(objects, info){
  for(let property in info){
    let add = info[property].math == "inc"? true : false;
    switch(info[property].operator){
      case(">"):{
        if(objects[info[property].from] > info[property].value){
          if(add){ objects[info[property].to] += parseInt(info[property].by); }
          else{ objects[info[property].to] -= parseInt(info[property].by); }
        }
        break;
      }
      case("<"):{
        if(objects[info[property].from] < info[property].value){
          if(add){ objects[info[property].to] += parseInt(info[property].by); }
          else{ objects[info[property].to] -= parseInt(info[property].by); }
        }
        break;
      }
      case("=="):{
        if(objects[info[property].from] == info[property].value){
          if(add){ objects[info[property].to] += parseInt(info[property].by); }
          else{ objects[info[property].to] -= parseInt(info[property].by); }
        }
        break;
      }
      case(">="):{
        if(objects[info[property].from] >= info[property].value){
          if(add){ objects[info[property].to] += parseInt(info[property].by); }
          else{ objects[info[property].to] -= parseInt(info[property].by); }
        }
        break;
      }
      case("<="):{
        if(objects[info[property].from] <= info[property].value){
          if(add){ objects[info[property].to] += parseInt(info[property].by); }
          else{ objects[info[property].to] -= parseInt(info[property].by); }
        }
        break;
      }
      case("!="):{
        if(objects[info[property].from] != info[property].value){
          if(add){ objects[info[property].to] += parseInt(info[property].by); }
          else{ objects[info[property].to] -= parseInt(info[property].by); }
        }
        break;
      }
    }
  }
  return objects;
}
