const testing = require("../lib/testing.js");
const vending = require("../src/vending-machine.js")

const assertTest = testing.assertTest;
const assertArray = testing.assertArray;
const displayHeader = testing.displayHeader;
const displaySummary = testing.displaySummary;
const vendingMachine = vending.dispenseCoin;
const maxOfNumbers = vending.maxOfNumbers;
const ejectElement = vending.ejectElement;
const descendingSort = vending.descendingSort;
const countDenominations = vending.countDenominations;

displayHeader("For ordered denominations");
assertTest(0, vendingMachine(0, [1]), "For zero rupee and denomination is 1, vending machine should give no coin", "vendingMachine");
assertTest(1, vendingMachine(1, [1]), "For 1 rupee and denomination is 1, vending machine should give 1 coin", "vendingMachine");
assertTest(1, vendingMachine(2, [1, 2]), "For 2 rupees and denominations are (1,2), vending machine should give 1 coin", "vendingMachine");
assertTest(2, vendingMachine(3, [1, 2]), "For 3 rupees and denominations are (1,2), vending machine should give 2 coins", "vendingMachine");
assertTest(1, vendingMachine(5, [5]), "For 5 rupees and denomination is 5, vending machine should give 1 coins", "vendingMachine");
assertTest(2, vendingMachine(6, [1, 5]), "For 6 rupees and denominations are (1,5), vending machine should give 2 coins", "vendingMachine");
assertTest(2, vendingMachine(7, [2, 5]), "For 7 rupees and denominations are (2,5), vending machine should give 2 coins", "vendingMachine");
assertTest(4, vendingMachine(13, [1, 4, 7]), "For 13 rupees and denominations are (1,4,7), vending machine should give 4 coins", "vendingMachine");
assertTest(1, vendingMachine(10, [10]), "For 10 rupees and denomination is 10, vending machine should give 1 coin", "vendingMachine");
assertTest(2, vendingMachine(11,[1,2,5,10]), "For 11 ruppees and denominations are (1,2,5,10), vending machine should give 2 coins", "vendingMachine");
assertTest(2, vendingMachine(15, [1,4,5,10]), "For 15 rupees and denominations are (1,2,5,10), vending machine should give 2 coins", "vendingMachine");

displayHeader("For unordered denominations");

assertTest(3, vendingMachine(8, [5,1,2]), "For 8 rupees and denomination are (5,1,2), vending machine should give 3 coins", "vendingMachine");
assertTest(3, vendingMachine(13, [7,1,3,2]), "For 13 rupees and denomination are (7,1,3,2), vending machine should give 3 coins", "vendingMachine");
assertTest(4, vendingMachine(23, [7,1,3,2]), "For 23 rupees and denomination are (7,1,3,2), vending machine should give 4 coins", "vendingMachine");

displayHeader("tests for maxOfNumbres");
assertTest(2, maxOfNumbers([1,2]), "for (1,2), it should give 2");
assertTest(3, maxOfNumbers([1,3,2]), "for (1,3,2), it should give 3");

displayHeader("tests for ejectElement");
assertArray([7,4], ejectElement([7,1,4], 1), "for (7,1,4), new array should be [7,4]");
assertArray([7,4,5], ejectElement([7,4,1,5], 2), "for (7,4,1,5), new array should be [7,4,5]");

displayHeader("tests for descendingSort");
assertArray([7,5,4], descendingSort([7,4,5]), "for (7,4,5), new array should be [7,5,4]");
assertArray([7,5,4,2], descendingSort([7,4,2,5]), "for (7,4,2,5), new array should be [7,5,4,2]");

displayHeader("For rs 1 and denominationi is 1");
assertTest(countDenominations(1,[1])[1], 1, "for 1 rupee 1rs coin should be 1");


displaySummary();
