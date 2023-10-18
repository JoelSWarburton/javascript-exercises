const convertToCelsius = function(tempFahrenheit) {
  tempCelsius = round((tempFahrenheit - 32) * (5/9));

  
  return tempCelsius;
};

const convertToFahrenheit = function(tempCelsius) {

  tempFahrenheit = round(tempCelsius * (9/5) + 32);

  return tempFahrenheit;
};

const round = function(value) {
  return Math.round(value * 10) / 10;
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
