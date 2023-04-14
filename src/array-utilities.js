const sumOfNumbers = function (numbers) {
  let sum = 0;

  for (let currentTerm = 0; currentTerm < numbers.length; currentTerm++) {
    sum += numbers[currentTerm];
  }
  return sum;
}

const sort = function(numbers) {
  let sortedNumbers = numbers.slice();

  for (let index = 1; index < sortedNumbers.length ; index++) {
    for (let currentIndex = 1; currentIndex < sortedNumbers.length; currentIndex++) {

      if (sortedNumbers[currentIndex - 1] < sortedNumbers[currentIndex]) {
        const temp = sortedNumbers[currentIndex - 1];
        sortedNumbers[currentIndex - 1] = sortedNumbers[currentIndex];
        sortedNumbers[currentIndex] = temp;
      }

    }
  }

  return sortedNumbers;
}

exports.sort = sort;
exports.sum = sumOfNumbers;

