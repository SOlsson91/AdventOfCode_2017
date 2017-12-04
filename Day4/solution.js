module.exports = {
  checkPassphrase: function(rows){
    let validPhrases = 0;
    for(let i = 0; i < rows.length; ++i){
      let phrases = rows[i][0].split(" ");
      if(phrases.length === new Set(phrases).size && phrases.length > 0){
        validPhrases++;
        console.log(phrases.length);
      }
    }
    return validPhrases;
  }
}
