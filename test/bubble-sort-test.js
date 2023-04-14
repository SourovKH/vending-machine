const testing = require("../lib/testing.js");
const object = require("../src/bubble-sort.js")

const assertTest = testing.assertTest;
const assertArray = testing.assertArray;
const displayHeader = testing.displayHeader;
const displaySummary = testing.displaySummary;
const bubbleSort = object.bubbleSort;

displayHeader("bubbleSort");
assertArray([], bubbleSort([]), "For empty input it should give nothing", "bubbleSort");
assertArray([1], bubbleSort([1]), "For input [1] output should be [1]", "bubbleSort");
assertArray([2,1], bubbleSort([1,2]), "For input [1,2] output should be [2,1]", "bubbleSort");
assertArray([3,2,1], bubbleSort([1,3,2]), "For input [1,3,2] output should be [3,2,1]", "bubbleSort");
assertArray([5,3,2,1], bubbleSort([1,3,2,5]), "For input [1,3,2,5] output should be [5,3,2,1]", "bubbleSort");

displaySummary();

