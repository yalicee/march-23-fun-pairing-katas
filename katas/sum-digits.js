/*
  The function sumDigits should take a number (not necessarily an integer) and return the total of its digits.
  E.g.
  sumDigits(99)
    --> 18
  sumDigits(10.5)
    --> 6
*/

function sumDigits(num) {
  const numStr = num.toString();
  const numArr = numStr
    .split("")
    .filter((x) => !isNaN(+x))
    .map((x) => +x);
  const total = numArr.reduce((a, b) => {
    return a + b;
  }, 0);
  return total;
}

module.exports = sumDigits;
