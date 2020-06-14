/*
Read two floating points' values of double precision A and B, corresponding
to two student's grades. After this, calculate the student's average,
considering that grade A has weight 3.5 and B has weight 7.5.
Each grade can be from zero to ten, always with one digit after the decimal point.
Don’t forget to print the end of line after the result,
otherwise you will receive “Presentation Error”. Don’t forget the space
before and after the equal sign.

Input
The input file contains 2 floating points' values with one digit after
the decimal point.

Output
Print MEDIA(average in Portuguese) according to the following example,
with 5 digits after the decimal point and with a blank space before and
after the equal signal.
---
var N1 = parseFloat(lines.shift())
var N2 = parseFloat(lines.shift())
var MEDIA = ((N1 * 3.5) + (N2 * 7.5))/11
console.log('MEDIA = ' + MEDIA.toFixed(5))  
---
> response(5.0, 7.1)
MEDIA = 6.43182

> response(0.0, 7.1)
MEDIA = 4.84091

> response(10.0, 10.0)
MEDIA = 10.00000
*/

function response(N1, N2) {
    var MEDIA = ((N1 * 3.5) + (N2 * 7.5)) / 11
    console.log('MEDIA = ' + MEDIA.toFixed(5))
}