'''
Read 2 variables, named A and B and make the sum of these two variables,
assigning its result to the variable X. Print X as
shown below. Print endline after the result otherwise you will get
“Presentation Error”.

Input
The input file will contain 2 integer numbers.

Output
Print the letter X (uppercase) with a blank space before and after the
equal signal followed by the value of X, according to the following example.
Obs.: don't forget the endline after all.

Problema 1001: https://www.urionlinejudge.com.br/judge/en/problems/view/1001

---
A = int(input())
B = int(input())
r = A + B
print("X = {}".format(r))
---

>>> response(10, 9)
X = 19

>>> response(-10, 4)
X = -6

>>> resolve(15, -7)
X = 8
'''

def response(A, B):
    r = A + B
    print("X = {}".format(r))
