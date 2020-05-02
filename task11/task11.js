var inputCelsius = 37;
var tempInFahrenheit = ((inputCelsius * (9/5)) + 32);

var inputFahrenheit = 90;
var tempInCelsius = ((inputFahrenheit - 32) * (5/9));

document.write(inputCelsius + "&#8451 is " + tempInFahrenheit + "&#8457<br>");
document.write(inputFahrenheit + "&#8457 is " + tempInCelsius + "&#8451");
