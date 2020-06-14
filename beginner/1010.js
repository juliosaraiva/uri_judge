/*
In this problem, the task is to read a code of a product 1, the number of units of product 1, the price for one unit of product 1, the code of a product 2, the number of units of product 2 and the price for one unit of product 2. After this, calculate and show the amount to be paid.

Input
The input file contains two lines of data. In each line there will be 3 values: two integers and a floating value with 2 digits after the decimal point.

Output
The output file must be a message like the following example where "Valor a pagar" means Value to Pay. Remember the space after ":" and after "R$" symbol. The value must be presented with 2 digits after the point.

---
var [ cod_prod1, units_1, price_unit_1 ] = lines.shift().split(' ')
var [ cod_prod2, units_2, price_unit_2 ] = lines.shift().split(' ')
var product1 = parseFloat(price_unit_1) * parseInt(units_1)
var product2 = parseFloat(price_unit_2) * parseInt(units_2)
var amount =  product1 +  product2
console.log(`VALOR A PAGAR: R$ ${amount.toFixed(2)}`)
---

> response('12 1 5.30', '16 2 5.10')
VALOR A PAGAR: R$ 15.50

> response('13 2 15.30', '161 4 5.20')
VALOR A PAGAR: R$ 51.40

> response('1 1 15.10', '2 1 15.10')
VALOR A PAGAR: R$ 30.20
*/

function response(prod_1, prod_2) {
    var [cod_prod1, units_1, price_unit_1] = prod_1.split(' ')
    var [cod_prod2, units_2, price_unit_2] = prod_2.split(' ')
    var product1 = (parseFloat(price_unit_1) * parseInt(units_1))
    var product2 = (parseFloat(price_unit_2) * parseInt(units_2))
    var amount = product1 + product2
    console.log(`VALOR A PAGAR: R$ ${amount.toFixed(2)}`)
}
