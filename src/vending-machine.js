const sortingUtilities = require("./sorting-utilities.js");

const sortInDescendingOrder = sortingUtilities.descendingSort;

const countDenominations = function(amount, denominations) {
  let currentAmount = amount;
  const coinCounts = {};
  const denominationList = sortInDescendingOrder(denominations);

  for (const currentDenomination of denominationList) {
    const coins = Math.floor(currentAmount / currentDenomination);
    currentAmount %= currentDenomination;
    coinCounts[currentDenomination] = coins;
  }

  return coinCounts;
}

const dispenseCoin = function(amount, denominations) {
  let currentAmount = amount;
  let coins = 0;
  const denominationList = sortInDescendingOrder(denominations);

  for (const currentDenomination of denominationList) {
    coins += Math.floor(currentAmount / currentDenomination);
    currentAmount %= currentDenomination;
  }

  return coins;
}

exports.dispenseCoin = dispenseCoin;
exports.countDenominations = countDenominations;
