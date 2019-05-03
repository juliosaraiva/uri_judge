'''
Make a program that reads a seller's name, his/her fixed salary and the sale's total made by himself/herself in the month (in money). Considering that this seller receives 15% over all products sold, write the final salary (total) of this seller at the end of the month , with two decimal places.

- Don’t forget to print the line's end after the result, otherwise you will receive “Presentation Error”.

- Don’t forget the blank spaces.

Input
The input file contains a text (employee's first name), and two double precision values, that are the seller's salary and the total value sold by him/her.

Output
Print the seller's total salary, according to the given example.

---
name = input()
salary = float(input())
month_sales = float(input())
salary_this_month = (month_sales * 0.15) + salary
print("TOTAL = R$ {:.2f}".format(salary_this_month))
---

>>> response('JOAO', 500.00, 1230.30)
TOTAL = R$ 684.54

>>> response('PEDRO', 700.00, 0.00)
TOTAL = R$ 700.00

>>> response('MANGOJATA', 1700.00, 1230.50)
TOTAL = R$ 1884.58
'''


def response(seller, salary, sales_month):
    month_salary = (sales_month * 0.15) + salary
    print(f"TOTAL = R$ {month_salary:.2f}")

