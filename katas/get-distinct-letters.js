/*
  The function getDistinctLetters should take two strings and return a string of all the letters that are unique to either of the input strings, in alphabetical order.

  For example, when given 'hello' and 'world', the function should return 'dehrw'
  This is because h and e are in 'hello' but not in 'world', and w, r and d are in 'world' but not in 'hello'. hewrd' sorted => 'dehrw'
*/

function getDistinctLetters(str1, str2) {
  const uniqueChars = new Set(
    [...str1]
      .filter((char) => !str2.includes(char))
      .concat([...str2].filter((char) => !str1.includes(char)))
  );

  return [...uniqueChars].sort().join("");
}

module.exports = getDistinctLetters;
