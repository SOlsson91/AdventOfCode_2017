module.exports = {
  defragmentation: function(input){
    input = 'a0c2017';
    input+="-0";
    console.log(input);
    let code = input.split('');

    let output = [];
    for (var i = 0; i < code.length; i++) {
      output += input[i].charCodeAt(0).toString(2) + "\n";
    }
    console.log(output);
    console.log(output.length);
    

  }
}
