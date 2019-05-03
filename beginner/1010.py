'''
In this problem, the task is to read a code of a product 1, the number of units of product 1, the price for one unit of product 1, the code of a product 2, the number of units of product 2 and the price for one unit of product 2. After this, calculate and show the amount to be paid.

Input
The input file contains two lines of data. In each line there will be 3 values: two integers and a floating value with 2 digits after the decimal point.

Output
The output file must be a message like the following example where "Valor a pagar" means Value to Pay. Remember the space after ":" and after "R$" symbol. The value must be presented with 2 digits after the point.

---
prod_1 = input()
prod_2 = input()
cod_prod1, units_1, price_unit_1 = prod_1.split()
cod_prod2, units_2, price_unit_2 = prod_2.split()
amount = (float(price_unit_1) * int(units_1)) + (float(price_unit_2) * int(units_2))
print("VALOR A PAGAR: R$ {:.2f}".format(amount))
---

>>> response('12 1 5.30', '16 2 5.10')
VALOR A PAGAR: R$ 15.50

>>> response('13 2 15.30', '161 4 5.20')
VALOR A PAGAR: R$ 51.40

>>> response('1 1 15.10', '2 1 15.10')
VALOR A PAGAR: R$ 30.20
'''

def response(prod_1, prod_2):
    cod_prod1, units_1, price_unit_1 = prod_1.split()
    cod_prod2, units_2, price_unit_2 = prod_2.split()
    amount = (float(price_unit_1) * int(units_1)) + (float(price_unit_2) * int(units_2))
    print(f"VALOR A PAGAR: R$ {amount:.2f}")