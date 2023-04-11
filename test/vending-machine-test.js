const testing = require("../lib/testing.js");
const vending = require("../source/vending-machine.js")

const assertTest = testing.assertTest;
const displayHeader = testing.displayHeader;
const vendingMachine = vending.vendingMachine;

displayHeader("vendingMachine");
assertTest(1, vendingMachine(), "1 is equal to 1", "vendingMachine");
assertTest(2, vendingMachine(), "1 is not equal to 2", "vendingMachine");
