const fibonacci = function (nth) {
  if (nth < 0) return "OOPS";
  if (nth === 0) return 0;

  let [prev, curr] = [1, 1];
  for (let i = 2; i < nth; ++i) {
    [curr, prev] = [curr + prev, curr];
  }

  return curr;
};

// Do not edit below this line
module.exports = fibonacci;
