const palindromes = function (str) {
  str = str.replace(/[^0-9a-z]/gi, "");

  let [left, right] = [0, str.length - 1];
  while (left < right) {
    if (str[left].toLowerCase() !== str[right].toLowerCase()) return false;
    left++;
    right--;
  }

  return true;
};

// Do not edit below this line
module.exports = palindromes;
