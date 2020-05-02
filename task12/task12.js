var dollors = 10;
var riyals = 25;

var dollorsToPKR = 155;
var riyalsToPKR = 41;
var currencyInPKR = (dollors * dollorsToPKR) + (riyals * riyalsToPKR);

document.write("<h1>Currency in PKR<br></h1>");
document.write("Total currency in PKR: " + currencyInPKR);
