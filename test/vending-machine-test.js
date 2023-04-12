const testing = require("../lib/testing.js");
const vending = require("../src/vending-machine.js")

const assertTest = testing.assertTest;
const displayHeader = testing.displayHeader;
const displaySummary = testing.displaySummary;
const vendingMachine = vending.dispenseCoin;

displayHeader("vendingMachine");
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
assertTest(4, vendingMachine(18, [1,2,5,10]), "For 18 rupees and denomination are (1,2,5,10), vending machine should give 4 coins", "vendingMachine");

displaySummary();
