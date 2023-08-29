function round(value, precision = 0) {
  let multiplier = 10 ** precision;
  return Math.round(value * multiplier) / multiplier;
}

const convertToCelsius = function (fahrenheit) {
  return round((fahrenheit - 32) / 1.8, 1);
};

const convertToFahrenheit = function (celsius) {
  return round(celsius * 1.8 + 32, 1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
