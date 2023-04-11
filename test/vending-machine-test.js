const testing = require("../lib/testing.js");
const vending = require("../source/vending-machine.js")

const assertTest = testing.assertTest;
const displayHeader = testing.displayHeader;
const vendingMachine = vending.vendingMachine;

displayHeader("vendingMachine");
assertTest(1, vendingMachine(1), "For amount one, vending machine should give 1 coin", "vendingMachine");
