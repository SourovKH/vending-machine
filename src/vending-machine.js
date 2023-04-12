const maxOfNumbers = function (array) {
  let maxNumber = array[0];

  for (let currentIndex = 1; currentIndex < array.length; currentIndex++) {
    maxNumber = Math.max(maxNumber, array[currentIndex]);
  }
  return maxNumber;
}

const ejectElement = function (array, index) {
  return array.slice(0, index).concat(array.slice(index + 1));

}

const reverseSortDenomination = function(denominations) {
  const reverseDenomination = [];
  let currentDenominations = denominations.slice();

  for (let index in denominations) {
    const currentMax = maxOfNumbers(currentDenominations);
    reverseDenomination.push(currentMax);
    const indexOfCurrentMax = currentDenominations.indexOf(currentMax);
    currentDenominations = ejectElement(currentDenominations, indexOfCurrentMax);
  }
  return reverseDenomination;
}

const dispenseCoin = function(amount, denominations) {
  let currentAmount = amount;
  let coins = 0;
  const denominationList = denominations.reverse();

  for (const currentDenomination of denominationList) {
    coins += Math.floor(currentAmount / currentDenomination);
    currentAmount %= currentDenomination;
  }

  return coins;
}

exports.dispenseCoin = dispenseCoin;
exports.maxOfNumbers = maxOfNumbers;
exports.ejectElement = ejectElement;
exports.reverseSort = reverseSortDenomination;