/*
Read two integer values. After this, calculate the product between them and store
the result in a variable named PROD. Print the result like the example below.
Do not forget to print the end of line after the result,
otherwise you will receive “Presentation Error”.

Input
The input file contains 2 integer numbers.

Output
Print PROD according to the following example,
with a blank space before and after the equal signal.

---
var A = parseInt(lines.shift())
var B = parseInt(lines.shift())
var PROD = A * B
console.log('PROD = ' + PROD)
---
> response(3, 9)
PROD = 27

> response(-30, 10)
PROD = -300

> response(0, 9)
PROD = 0
*/

function response(A, B) {
    PROD = A * B
    console.log('PROD = ' + PROD)
}
