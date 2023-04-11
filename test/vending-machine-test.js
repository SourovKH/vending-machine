const testing = require("../lib/testing.js");
const vending = require("../source/vending-machine.js")

const assertTest = testing.assertTest;
const displayHeader = testing.displayHeader;
const vendingMachine = vending.dispenseCoin;

displayHeader("vendingMachine");
assertTest(0, vendingMachine(0), "For zero amount, vending machine should give no coin", "vendingMachine");
assertTest(1, vendingMachine(1), "For amount one, vending machine should give 1 coin", "vendingMachine");
assertTest(1, vendingMachine(2), "For amount 2, vending machine should give 1 coin", "vendingMachine");
assertTest(2, vendingMachine(3), "For amount 3, vending machine should give 2 coins", "vendingMachine");
assertTest(1, vendingMachine(5), "For amount 5, vending machine should give 1 coins", "vendingMachine");
assertTest(2, vendingMachine(6), "For amount 6, vending machine should give 2 coins", "vendingMachine");
assertTest(2, vendingMachine(7), "For amount 7, vending machine should give 2 coins", "vendingMachine");
assertTest(3, vendingMachine(8), "For amount 8, vending machine should give 3 coins", "vendingMachine");
assertTest(1, vendingMachine(10), "For amount 10, vending machine should give 1 coin", "vendingMachine");
assertTest(2, vendingMachine(11), "For amount 11, vending machine should give 2 coins", "vendingMachine");
assertTest(2, vendingMachine(15), "For amount 15, vending machine should give 2 coins", "vendingMachine");
assertTest(4, vendingMachine(18), "For amount 18, vending machine should give 4 coins", "vendingMachine");
