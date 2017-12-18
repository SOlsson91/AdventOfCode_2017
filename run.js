const helper = require('./utils/helper');
let day = 13;

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
    console.log(day3.calculateStepsToNumber(368078));
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
    const day6 = require('./Day6/solution');
    let row = helper.fileToSimpleArray('./Day6/input.txt');
    let showSizeOfLoops = true;
    console.log(day6.memoryMove(row, showSizeOfLoops));
    break;
  }
  case 7:{
    const day7 = require('./Day7/solution');
    let rows = helper.fileToSimpleString('./Day7/input.txt');
    console.log(day7.recursiveTower(rows));
    console.log(day7.balanceWeight(rows));
    break;
  }
  case 8:{
    const day8 = require('./Day8/solution');
    let rows = helper.fileToSimpleArray('./Day8/input.txt');
    console.log(day8.registers(rows));
    break;
  }
  case 9:{
    const day9 = require('./Day9/solution');
    let symbols = helper.fileToSimpleString('./Day9/input.txt');
    console.log("Score: ", day9.stringProcessing(symbols));
    break;
  }
  case 10:{
    const day10 = require('./Day10/solution');

    let numbers = helper.fileToSimpleArray('./Day10/input.txt');
    numbers = numbers[0].split(",").map(n => +n);
    let list = day10.knotHash(numbers);
    console.log("Multiplication of first two numbers: ", list[0] * list[1]);

    let input = helper.fileToSimpleString('./Day10/input.txt');
    console.log("Hash:", day10.hashs(input));
    break;
  }
  case 11:{
    const day11 = require('./Day11/solution');
    const input = helper.fileToSimpleString("./Day11/input.txt");
    let result = day11.hexPath(input);
    console.log("Steps:", result[0]);
    console.log("Max distance:", result[1]);
    break;
  }
  case 12:{
    const day12 = require("./Day12/solution");
    const input = helper.fileToSimpleString("./Day12/input.txt");
    console.log(day12.travellingSalesman(input).length);
    break;
  }
  case 13:{
    const day13 = require("./Day13/solution");
    const input = helper.fileToSimpleString('./Day13/test.txt');
    console.log(day13.packScanner(input));
    break;
  }
  case 14:{
    const day14 = require("./Day14/solution");
    break;
  }
  case 15:{
    const day15 = require("./Day15/solution");
    break;
  }
  case 16:{
    const day16 = require("./Day16/solution");
    break;
  }
  case 17:{
    const day17 = require("./Day17/solution");
    break;
  }
  case 18:{
    const day18 = require("./Day18/solution");
    break;
  }
  case 19:{
    const day19 = require("./Day19/solution");
    break;
  }
  case 20:{
    const day20 = require("./Day20/solution");
    break;
  }
  case 21:{
    const day21 = require("./Day21/solution");
    break;
  }
  case 22:{
    const day22 = require("./Day22/solution");
    break;
  }
  case 23:{
    const day23 = require("./Day23/solution");
    break;
  }
  case 24:{
    const day24 = require("./Day24/solution");
    break;
  }
  case 25:{
    const day25 = require("./Day25/solution");
    break;
  }
}
