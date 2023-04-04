/*
  The function getCentury should take a year as a number and return the century.
  E.g. 1999 should return '20th'
  2004 should return '21st'
  1877 should return '19th'
  It should work up to and including the year 9,999 (the '100th' century)
*/

function getCentury(year) {
  let century = 1;

  while (year > 100) {
    year -= 100;
    century++;
  }
  let x = century.toString();
  let y;
  if (x.slice(-1) === "1" && x !== "11") {
    y = `st`;
  } else if (x.slice(-1) === "2" && x !== "12") {
    y = `nd`;
  } else if (x.slice(-1) === "3" && x !== "13") {
    y = `rd`;
  } else {
    y = `th`;
  }
  return `${century}${y}`;
}

module.exports = getCentury;
