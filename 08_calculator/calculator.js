const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  return arr.reduce((sum, curr) => sum + curr, 0);
};

const multiply = function (arr) {
  return arr.reduce((product, curr) => product * curr, 1);
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (num) {
  if (num <= 1) return 1;

  return num * factorial(num - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
