const arrayUtilities = require("./array-utilities.js");

const sort= arrayUtilities.sort;

const countDenominations = function(amount, denominations) {
  let remainingAmount = amount;
  const coinCounts = {};
  const denominationList = sort(denominations);

  for (const currentDenomination of denominationList) {
    const coins = Math.floor(remainingAmount / currentDenomination);
    remainingAmount %= currentDenomination;
    coinCounts[currentDenomination] = coins;
  }

  return coinCounts;
}

const dispenseCoin = function(amount, denominations) {
  let currentAmount = amount;
  let coins = 0;
  const denominationList = sort(denominations);

  for (const currentDenomination of denominationList) {
    coins += Math.floor(currentAmount / currentDenomination);
    currentAmount %= currentDenomination;
  }

  return coins;
}

exports.dispenseCoin = dispenseCoin;
exports.countDenominations = countDenominations;
