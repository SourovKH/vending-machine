const textStyle = function(styleCode, text) {
  return "\033[" + styleCode + "m" + text + "\033[0m";
}
const bold  = function(text) {
  return textStyle(1, text);
}

const underline  = function(text) {
  return textStyle(4, text);
}

const redfg = function(text) {
  return textStyle(31, text);
}

const greenfg = function(text) {
  return textStyle(32, text);
}

const yellowfg = function(text) {
  return textStyle(33, text);
}

const testLog = [];

const updateTestLog = function(result, expected, actual, fnName) {
  testLog.push({
    result : result,
    expected : expected,
    actual : actual,
    fnName : fnName
  })
}

function groupKeys(objects, key) {
  const group = {};
  for (let object of objects) {
    const keyValue = object[key];
    if (group[keyValue] === undefined) {
      group[keyValue] = [];
    }

    group[keyValue].push(object);
  }

  return group;
}

let totalTests = 0;
let failedTests = 0;

const increamentTotalTests = function() {
  totalTests += 1;
}

const increamentFailedTests = function(){
  failedTests += 1;
}

const generateFailedMessage = function(expected, actual, testMessage) {
  const expectedValue =  greenfg("\n\tExpected\t:" + expected);
  const actualValue =  redfg("\n\tActual\t\t:" + actual);
  const failMessage = actualValue + expectedValue;

  return failMessage; 
}

const displayHeader = function(fnName) {
  const header = "Test for " + fnName;
  console.log("\n" + bold(underline(header)));
}

const displayTestMessage = function(expected, actual, result, testMessage) {
  const icon = result === true ? "✅" : "❌";
  let message = "";
  message += icon;
  message += yellowfg(bold("Test: "));
  message += bold(testMessage);

  if (result === false) {
    increamentFailedTests();
    message += generateFailedMessage(expected, actual);
  }
  console.log(message);
}

const getResult = function (expected, actual) {
  return expected === actual;
}

function isArraysEqual(array1, array2) {
  if (array1 === array2) {
    return true;
  };

  if (array1.length !== array2.length) {
    return false;
  };

  for (let currentTerm = 0; currentTerm < array1.length; currentTerm++) {
    if (array1[currentTerm] !== array2[currentTerm]) {
      return false;
    }
  }

  return true;
}

const assertTest = function(expected, actual, testMessage, fnName) {
  increamentTotalTests();
  const result = getResult(expected, actual);
  updateTestLog(result, expected, actual, fnName);
  displayTestMessage(expected, actual, result, testMessage);
}

const assertArray  = function(expected, actual, testMessage, fnName) {
  increamentTotalTests();
  const result = isArraysEqual(expected, actual);
  updateTestLog(result, expected, actual, fnName);
  displayTestMessage(expected, actual, result, testMessage);
}

const displaySummary = function() {
  const passedTests = totalTests - failedTests;
  let summary = "\n";
  summary += bold(underline("Summary: "));
  summary += passedTests + " / " + totalTests;
  summary += " Passed";
  console.log(summary);
}

exports.displayHeader = displayHeader;
exports.assertTest = assertTest;
exports.displaySummary = displaySummary;
exports.assertArray = assertArray;
