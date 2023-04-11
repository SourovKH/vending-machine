const dispenseCoin = function(amount) {
  let currentAmount = amount;
  let coins = 0;
  const denominations = [10, 5, 2, 1];

  for (const currentDenomination of denominations) {
    coins += Math.floor(currentAmount / currentDenomination);
    currentAmount %= currentDenomination;
  }

  coins += currentAmount;
  return coins;
}

exports.dispenseCoin = dispenseCoin;
