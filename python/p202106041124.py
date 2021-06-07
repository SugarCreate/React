a, b = 0, 1
while b < 1000:
    print(b, end=',')
    a, b = b, a+b

i = 256*256
print('The value of i is', i)

# x = int(input("Please enter an integer: "))
# if x < 0:
#     x = 0
#     print('Negativa changed to zero')
# elif x == 0:
#     print('Zero')
# elif x == 1:
#     print('Single')
# else:
#     print('More')

word =['cat', 'windows', 'deffafafw']
# for w in word:
#     print(w, len(w))

for w in word[:]:
    if len(w) > 6:
        word.insert(0, 2)

list(enumerate(word))
list(range(5))

for n in range(2, 10):
    for x in range(2, n):
        if n % x == 0:
            print(n, 'equals', x, '*', n//x)
            break
    else:
        # loop fell through without finding a factor
        print(n, 'is a prime number')
def fib(n):
    a, b = 0, 1
    while a < n:
        print(a, end='')
        a, b = b, a+b
    print()
