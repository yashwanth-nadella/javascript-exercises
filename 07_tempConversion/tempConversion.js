const convertToCelsius = function(Temp) {
  return Math.round((Temp-32)*(5/9)*10)/10;
};

const convertToFahrenheit = function(Temp) {
  return Math.round(((9/5)*Temp+32)*10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
