'''
Read three values (variables A, B and C), which are the three student's grades. Then, calculate the average, considering that grade A has weight 2, grade B has weight 3 and the grade C has weight 5. Consider that each grade can go from 0 to 10.0, always with one decimal place.

Input
The input file contains 3 values of floating points with one digit after the decimal point.

Output
Print MEDIA(average in Portuguese) according to the following example, with a blank space before and after the equal signal.

---
a = float(input())
b = float(input())
c = float(input())
media = ((a * 2) + (b * 3) + (c * 5))/10
print("MEDIA = {:.1f}".format(media))
---

>>> response(5.0, 6.0, 7.0)
MEDIA = 6.3

>>> response(5.0, 10.0, 10.0)
MEDIA = 9.0

>>> response(10.0, 10.0, 5.0)
MEDIA = 7.5
'''

def response(a, b, c):
    media = ((a * 2) + (b * 3) + (c * 5))/10
    print(f"MEDIA = {media:.1f}")
