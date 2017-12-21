module.exports = {
  checkPassphrase: function(rows){
    let validPhrases = 0;
    for(let i = 0; i < rows.length; ++i){
      let phrases = rows[i][0].split(" ");
      if(phrases.length === new Set(phrases).size && phrases.length > 0){
        validPhrases++;
      }
    }
    return validPhrases;
  },

  checkPassphraseV2: function(rows){
    let validPhrases = 0;
    let invalid = 0;
    for(let row = 0; row < rows.length; ++row){
      let words = rows[row][0].split(" ");
      words = words.map(x => {
        x = x.split("");
        x.sort();
        return x.join("");
      });
      words.sort();
      for (var i = words.length - 1; i > 0; i--) {
        if (words[i] === words[i - 1]) {
          invalid++;
          break;
        }
      }
    }
    return(rows.length - invalid);
  }
}
