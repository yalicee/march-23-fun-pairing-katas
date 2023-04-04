/*
  the alternateCase function should take a string and return a string.
  Every other letter either capital or lower case, starting with a capital letter.
  
  'hello' would become 'HeLlO'
  'hello world' would become 'HeLlO wOrLd'
*/

function alternateCase(str) {
  let newStr = "";
  let isUppercase = true;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      newStr += str[i];
    } else {
      if (isUppercase === true) {
        newStr += str[i].toUpperCase();
      } else {
        newStr += str[i].toLowerCase();
      }
      isUppercase = !isUppercase;
    }
  }
  return newStr;
}

module.exports = alternateCase;
