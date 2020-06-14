/*
Read four integer values named A, B, C and D. Calculate and print the difference of product A and B by the product of C and D (A * B - C * D).

Input
The input file contains 4 integer values.

Output
Print DIFERENCA (DIFFERENCE in Portuguese) with all the capital letters, according to the following example, with a blank space before and after the equal signal.
---
var a = parseInt(lines.shift());
var b = parseInt(lines.shift());
var c = parseInt(lines.shift());
var d = parseInt(lines.shift());
var diference = ((a * b) - (c * d));
console.log("DIFERENCA = " + diference);
---

> response(5, 6, 7, 8)
DIFERENCA = -26

> response(0, 0, 7, 8)
DIFERENCA = -56

> response(5, 6, -7, 8)
DIFERENCA = 86
*/


function response(a, b, c, d) {
    var diference = ((parseInt(a) * parseInt(b)) - (parseInt(c) * parseInt(d)))
    console.log("DIFERENCA = " + diference)
}
