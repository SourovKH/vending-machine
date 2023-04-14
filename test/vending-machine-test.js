const testing = require("../lib/testing.js");
const vending = require("../src/vending-machine.js")

const assertTest = testing.assertTest;
const assertArray = testing.assertArray;
const displayHeader = testing.displayHeader;
const displaySummary = testing.displaySummary;
const vendingMachine = vending.dispenseCoin;
const countDenominations = vending.countDenominations;

const testsForTotalCoinCount = function() {
  displayHeader("ordered denominations");
  assertTest(0, vendingMachine(0, [1]), "For zero rupee and denomination is 1, vending machine should give no coin");
  assertTest(1, vendingMachine(1, [1]), "For 1 rupee and denomination is 1, vending machine should give 1 coin");
  assertTest(1, vendingMachine(2, [1, 2]), "For 2 rupees and denominations are (1,2), vending machine should give 1 coin");
  assertTest(2, vendingMachine(3, [1, 2]), "For 3 rupees and denominations are (1,2), vending machine should give 2 coins");
  assertTest(1, vendingMachine(5, [5]), "For 5 rupees and denomination is 5, vending machine should give 1 coin");
  assertTest(2, vendingMachine(6, [1, 5]), "For 6 rupees and denominations are (1,5), vending machine should give 2 coins");
  assertTest(2, vendingMachine(7, [2, 5]), "For 7 rupees and denominations are (2,5), vending machine should give 2 coins");
  assertTest(4, vendingMachine(13, [1, 4, 7]), "For 13 rupees and denominations are (1,4,7), vending machine should give 4 coins");
  assertTest(1, vendingMachine(10, [10]), "For 10 rupees and denomination is 10, vending machine should give 1 coin");
  assertTest(2, vendingMachine(11,[1,2,5,10]), "For 11 ruppees and denominations are (1,2,5,10), vending machine should give 2 coins");
  assertTest(2, vendingMachine(15, [1,4,5,10]), "For 15 rupees and denominations are (1,2,5,10), vending machine should give 2 coins");

  displayHeader("unordered denominations");

  assertTest(3, vendingMachine(8, [5,1,2]), "For 8 rupees and denomination are (5,1,2), vending machine should give 3 coins");
  assertTest(3, vendingMachine(13, [7,1,3,2]), "For 13 rupees and denomination are (7,1,3,2), vending machine should give 3 coins");
  assertTest(4, vendingMachine(23, [7,1,3,2]), "For 23 rupees and denomination are (7,1,3,2), vending machine should give 4 coins");
}

const testsToCountDenomination = function() {
  let countedDenominations; 

  displayHeader("rs 1 and denomination is 1");
  countedDenominations = countDenominations(1,[1]);
  assertTest(countedDenominations[1], 1, "1, 1rs coin");

  displayHeader("rs 3 and denominations are 1,2");
  countedDenominations = countDenominations(3,[1,2]);
  assertTest(countedDenominations[1], 1, "1, 1rs coin");
  assertTest(countedDenominations[2], 1, "1, 2rs coin");

  displayHeader("rs 9 and denominations are 1,2,5");
  countedDenominations = countDenominations(9,[1,5,2]);
  assertTest(countedDenominations[1], 0, "0, 1rs coin");
  assertTest(countedDenominations[2], 2, "2, 2rs coins");
  assertTest(countedDenominations[5], 1, "1, 5rs coin");
}

testsForTotalCoinCount();
testsToCountDenomination();
displaySummary();
