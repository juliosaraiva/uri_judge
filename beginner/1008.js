/*
Write a program that reads an employee's number, his/her worked hours number in a month and the amount he received per hour. Print the employee's number and salary that he/she will receive at end of the month, with two decimal places.

Don’t forget to print the line's end after the result, otherwise you will receive “Presentation Error”.
Don’t forget the space before and after the equal signal and after the U$.

Input
The input file contains 2 integer numbers and 1 value of floating point, representing the number, worked hours amount and the amount the employee receives per worked hour.

Output
Print the number and the employee's salary, according to the given example, with a blank space before and after the equal signal.

---
var id = parseInt(lines.shift())
var worked_hours = parseInt(lines.shift())
var time_value = parseFloat(lines.shift())
var salary = (worked_hours * time_value).toFixed(2)
console.log(`NUMBER = ${id}\nSALARY = U$ ${salary}`)
---

> response(25, 100, 5.50)
NUMBER = 25
SALARY = U$ 550.00

> response(1, 200, 20.50)
NUMBER = 1
SALARY = U$ 4100.00

> response(6, 145, 15.55)
NUMBER = 6
SALARY = U$ 2254.75
*/


function response(id, worked_hours, time_value) {
    var salary = (parseInt(worked_hours) * parseFloat(time_value)).toFixed(2)
    console.log(`NUMBER = ${id}\nSALARY = U$ ${salary}`)
}
