function getSum(number) {
  number = number.toString().split("").map(Number);

  return number.reduce((acc, cur) => acc + cur);
}

function getMultiple(number) {
  number = number.toString().split("").map(Number);

  return number.reduce((acc, cur) => acc * cur);
}

function getHighestNumber(pages) {
  const [leftPage, rightPage] = pages;
  const highestLeftPage = Math.max(getSum(leftPage), getMultiple(leftPage));
  const highestRightPage = Math.max(getSum(rightPage), getMultiple(rightPage));

  return Math.max(highestLeftPage, highestRightPage);
}

function checkHasException(pages) {
  const [leftPage, rightPage] = pages;

  if (leftPage === 1 || rightPage === 400) return true;
  if (Math.abs(leftPage - rightPage) > 1) return true;

  return false;
}

function problem1(pobi, crong) {
  if (checkHasException(pobi) || checkHasException(crong)) return -1;

  const pobiNumber = getHighestNumber(pobi);
  const crongNumber = getHighestNumber(crong);

  if (pobiNumber > crongNumber) return 1;
  else if (pobiNumber < crongNumber) return 2;
  else if (pobiNumber === crongNumber) return 0;
}

module.exports = problem1;
