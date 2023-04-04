/*
  The function checkUsernames should take an array of usernames and return true if they are all valid and false if any are not valid.
  A valid username:
  - is at least 5 characters long
  - may only contain lowercase letters, numbers and underscores
  - is no longer than 20 characters
*/

function checkUsernames(arr) {
  if (!arr.length) {
    return false;
  }
  const regex = /^[a-z0-9_]{5,20}/;
  console.log(arr.every((username) => regex.test(username)));
  return arr.every((username) => regex.test(username));
}

module.exports = checkUsernames;
