/*
Make a program that reads three floating point values: A, B and C. Then, calculate and show:
a) the area of the rectangled triangle that has base A and height C.
b) the area of the radius's circle C. (pi = 3.14159)
c) the area of the trapezium which has A and B by base, and C by height.
d) the area of ​​the square that has side B.
e) the area of the rectangle that has sides A and B.

Input
The input file contains three double values with one digit after the decimal point.

Output
The output file must contain 5 lines of data. Each line corresponds to one of the areas described above, always with a corresponding message (in Portuguese) and one space between the two points and the value. The value calculated must be presented with 3 digits after the decimal point.

---
var [A, B, C] = lines.shift().split(' ');
const PI = 3.14159;
var areaTriangle = (parseFloat(A) * parseFloat(C)) / 2;
var areaCircle = PI * Math.pow(parseFloat(C), 2);
var areaTrapezium = ((parseFloat(A) + parseFloat(B)) * parseFloat(C)) / 2;
var areaSquare = Math.pow(parseFloat(B), 2);
var areaRectangle = parseFloat(A) * parseFloat(B);
console.log("TRIANGULO: " + areaTriangle.toFixed(3));
console.log("CIRCULO: " + areaCircle.toFixed(3));
console.log("TRAPEZIO: " + areaTrapezium.toFixed(3));
console.log("QUADRADO: " + areaSquare.toFixed(3))
console.log("RETANGULO: " + areaRectangle.toFixed(3))
---

> response(3.0, 4.0, 5.2)
TRIANGULO: 7.800
CIRCULO: 84.949
TRAPEZIO: 18.200
QUADRADO: 16.000
RETANGULO: 12.000

> reponse(12.7, 10.4, 15.2)
TRIANGULO: 96.520
CIRCULO: 725.833
TRAPEZIO´: 175.560
QUADRADO: 108.160
RETANGULO: 132.080
*/

function response(A, B, C) {
  const PI = 3.14159;
  var areaTriangle = (parseFloat(A) * parseFloat(C)) / 2;
  var areaCircle = PI * Math.pow(parseFloat(C), 2);
  var areaTrapezium = ((parseFloat(A) + parseFloat(B)) * parseFloat(C)) / 2;
  var areaSquare = Math.pow(parseFloat(B), 2);
  var areaRectangle = parseFloat(A) * parseFloat(B);
  console.log("TRIANGULO: " + areaTriangle.toFixed(3));
  console.log("CIRCULO: " + areaCircle.toFixed(3));
  console.log("TRAPEZIO: " + areaTrapezium.toFixed(3));
  console.log("QUADRADO: " + areaSquare.toFixed(3))
  console.log("RETANGULO: " + areaRectangle.toFixed(3))
}