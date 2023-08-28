const removeFromArray = function (arr, ...elementsToRemove) {
  // Alternate Method
  // return arr.filter(item => !elementsToRemove.includes(item));

  let result = [];

  arr.forEach((item) => {
    if (!elementsToRemove.includes(item)) {
      result.push(item);
    }
  });

  return result;
};

// Do not edit below this line
module.exports = removeFromArray;
