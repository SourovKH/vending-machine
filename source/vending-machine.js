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
