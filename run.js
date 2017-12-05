const helper = require('./utils/helper');
let day = 5;

switch(day){
  case 1:{
    const day1 = require('./Day1/solution');
    let numbers = helper.fileToString("./Day1/numbers.txt");
    console.log("Result if next same: ", day1.addIfNextSame(numbers));
    console.log("Result Other Half: ", day1.addIfOtherHalfSame(numbers));
    break;
  }
  case 2:{
    const day2 = require('./Day2/solution');
    let numbers = helper.fileToArray("./Day2/input.txt");
    console.log(day2.sumOfArrayLines(numbers));
    console.log(day2.sumOfEvenArrayDiff(numbers));
    break;
  }
  case 3:{
    const day3 = require('./Day3/solution');
    day3.createSpiralArray(23);
    break;
  }
  case 4:{
    const day4 = require('./Day4/solution');
    let rows = helper.fileToArray("./Day4/input.txt");
    console.log(day4.checkPassphrase(rows));
    console.log(day4.checkPassphraseV2(rows));
    break;
  }
  case 5:{
    const day5 = require('./Day5/solution');
    let rows = helper.fileToSimpleArray("./Day5/input.txt");
    console.log(day5.jumpsToEscape(rows));
    rows = helper.fileToSimpleArray("./Day5/input.txt");
    console.log(day5.jumpsToEscapeV2(rows));

    break;
  }
  case 6:{
    break;
  }
  case 7:{
    break;
  }
  case 8:{
    break;
  }
  case 9:{
    break;
  }
  case 10:{
    break;
  }
  case 11:{
    break;
  }
  case 12:{
    break;
  }
  case 13:{
    break;
  }
  case 14:{
    break;
  }
  case 15:{
    break;
  }
  case 16:{
    break;
  }
  case 17:{
    break;
  }
  case 18:{
    break;
  }
  case 19:{
    break;
  }
  case 20:{
    break;
  }
  case 21:{
    break;
  }
  case 22:{
    break;
  }
  case 23:{
    break;
  }
  case 24:{
    break;
  }
}
