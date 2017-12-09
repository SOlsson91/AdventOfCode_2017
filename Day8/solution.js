module.exports = {
  registers: function(rows){
    let parsedRows = parseRows(rows);
    console.log(parsedRows);
  }
}

function parseRows(rows){
  let dict = {};
  for(let i = 0; i < rows.length; ++i){
    console.log(rows[i]);
  }
}
