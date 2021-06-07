## Python 数据类型
### 数字
/ 永远返回浮点类型
// 得到一个整数类型
% 余数
**  计算乘方
混合运算数的运算会把整数转换成浮点数
4 * 3.75 - 1
>>> 4 * 3.75 - 1 

上一次打印出来的表达式被赋值给变量 _
>>> tax = 12.5 / 100
>>> 
>>> price = 100.5
>>> price * tax
12.5625
>>> price + _
113.0625
>>> round(_, 2)
113.06
>>> round(_, 1)
113.1
>>> round(_, )
113
>>> 
这个变量_应该被使用者当作只读类型。不要向他显示地赋值————————你会创建一个和它名字相同的本地变量，它会使用魔法行为屏蔽内部变量。

除了int 和 float, Python 也支持其他类型的数字, 例如 Decimal 或 Fraction。Python 也内置对复数的支持，使用后缀 j 或者 J 就可以表示虚数部分（例如 3 + 5j）

### 字符串
不希望前置 \ 字符转义成特殊字符, 可以使用 原始字符串方式, 在引号前添加 r
>>> print('C:\some\name')
C:\some
ame
>>> print(r'C:\some\name')
C:\some\name
>>> 

字符串可以用 + 进行连接，可以用* 进行重复
>>> 3 * 'un' + 'ium'
'unununium'
>>>

相邻的两个或多个 字符串字面值 （引号引起来的字符）将会自动连接到一起.
>>> 'ada' 'ffv' 
'adaffv'
>>>

字符串可以被 索引（下标访问）的, 第一个字符串索引是 0 。 索引获取单个字符
索引可以为 负，从右开始数, 负数索引从 -1开始。
>>> word = 'Python'
>>> word[0]
'P'
>>> word[-1]
'n'
>>> word[2]
't'

索引支持 切片。切片获取字符串
>>> word = 'python'
>>> word[0:2]
'py'

Python 中的字符串不能被修改, 它们是 immutable 的。如果需要一个不同的字段串，应当新建一个
>>> word = 'Python'
>>> 
>>> 'J' + word[:2]
'JPy'

内置函数 len() 返回一个字符串的长度
>>> word ='1adadqwfdcqwrew'
>>> len(word)
15

参见
[文本序列类型 — str](https://docs.python.org/zh-cn/3.6/library/stdtypes.html#textseq)
字符串是一种 序列类型 ，因此也支持序列类型的各种操作。

[字符串的方法](https://docs.python.org/zh-cn/3.6/library/stdtypes.html#string-methods)
字符串支持许多变换和查找的方法。

[格式化字符串字面值](https://docs.python.org/zh-cn/3.6/reference/lexical_analysis.html#f-strings)
内嵌表达式的字符串字面值。

[格式字符串语法](https://docs.python.org/zh-cn/3.6/library/string.html#formatstrings)
使用 str.format() 进行字符串格式化。

[printf 风格的字符串格式化](https://docs.python.org/zh-cn/3.6/library/stdtypes.html#old-string-formatting)
这里详述了使用 % 运算符进行字符串格式化。


### 列表 list
列表可以包含不同类型的元素，但通常使用时各个元素类型相同
>>> squares = [1, 4, 9, 16, 25]
>>> squares
[1, 4, 9, 16, 25]

所有的切片操作都返回一个新列表，这个新列表包含所需要的元素。就是说，如下的切片会返回列表的一个新的(浅)拷贝:
支持拼接操作
>>> squares[:]
[1, 4, 9, 16, 25]
>>> squares + [33,22,11,444]
[1, 4, 9, 16, 25, 33, 22, 11, 444]
>>>

与 immutable 的字符串不同的, 列表是一个 mutable 类型。就是 它自己的内容可以改变
>>> cubes = [1, 8, 27, 65, 125]  # something's wrong here
>>> 4 ** 3  # the cube of 4 is 64, not 65!
64
>>> cubes[3] = 64  # replace the wrong value
>>> cubes
[1, 8, 27, 64, 125]

可以在列表末尾通过 append() 方法来添加新元素
>>> cubes.append(216)  # add the cube of 6
>>> cubes.append(7 ** 3)  # and the cube of 7
>>> cubes
[1, 8, 27, 64, 125, 216, 343]

给切片赋值也是可以的，这样甚至可以改变列表大小， 或者把列表整个清空:
>>> 
>>> letters
['a', 'b', 'c', 'd', 'e', 'f', 'g']
>>> 
>>> #replace some values
... 
>>> letters[2:5] = ['C', 'D', 'E']
>>> letters
['a', 'b', 'C', 'D', 'E', 'f', 'g']
>>> #now remove them
... 
>>> 
>>> letters[2:5] = []
>>> 
>>> letters
['a', 'b', 'f', 'g']
>>> #clear the list by replacing  all the elements with an empty list
... 
>>> letters[:] = []
>>> letters
[]

内置函数 Len() 也可以作用在列表上:
>>> letters = ['a', 'b', 'c', 'd']
>>> len(letters)

可以嵌套列表(创建包含其他列表的列表), 比如说:
>>> a = ['a', 'b', 'c']
>>> n = [1, 2, 3]
>>> x = [a, n]
>>> x
[['a', 'b', 'c'], [1, 2, 3]]
>>> x[0]
['a', 'b', 'c']
>>> x[0][1]
'b'

## 流程控制工具

### while Statements

print() 函数将所有传进来的参数值打印出来. 它和直接输入你要显示的表达式(比如我们之前在计算器的例子里做的)不一样， print() 能处理多个参数，包括浮点数，字符串。 字符串会打印不带引号的内容, 并且在参数项之间会插入一个空格, 这样你就可以很好的把东西格式化, 像这样:
>>> i = 256*256
>>> print('The value of i is', i)
The value of i is 65536


关键字参数 end 可以用来取消输出后面的换行, 或使用另外一个字符串来结尾:
>>> a, b = 0, 1
>>> while b < 1000:
...     print(b, end=',')
...     a, b = b, a+b
...
1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,

### if Statements

x = int(input("Please enter an integer: "))
if x < 0:
    x = 0
    print('Negativa changed to zero')
elif x == 0:
    print('Zero')
elif x == 1:
    print('Single')
else:
    print('More')

### for Statements
word = ['cat','ada','asdasdad']

for w in words[:]: # Loop over a slice copy of entire list.
    if len(w) > 6:
        words.insert(0, w)
如果循环内需要修改序列中的值（比如重复某些选中的元素），推荐先拷贝一份副本。对序列进行循环不代表制作了一个副本进行操作。

### range()
如果要遍历一个数字序列，内置函数range() 会派上用场。
for i in range(5):
    print(i)

以序列的索引来迭代
a = ['Mary', 'had', 'a', 'little', 'lamb']
for i in range(len(a)):
    print(i, a[i])

list(enumerate(a))

enumerate(iterable, start=0)
返回一个枚举对象。iterable 必须是一个序列，或 iterator，或其他支持迭代的对象。 enumerate() 返回的迭代器的 __next__() 方法返回一个元组，里面包含一个计数值（从 start 开始，默认为 0）和通过迭代 iterable 获得的值。

seasons = ['Spring', 'Summer', 'Fall', 'Winter']
list(enumerate(seasons))
[(0, 'Spring'), (1, 'Summer'), (2, 'Fall'), (3, 'Winter')]
list(enumerate(seasons, start=1))
[(1, 'Spring'), (2, 'Summer'), (3, 'Fall'), (4, 'Winter')]
等价于:

def enumerate(sequence, start=0):
    n = start
    for elem in sequence:
        yield n, elem
        n += 1

range() 所返回的对象在许多方面表现得像一个列表，但实际上却并不是。此对象会在你迭代它时基于所希望的序列返回连续的项，但它没有真正生成列表，这样就能节省空间。
我们说这样的对象是 可迭代的，也就是说，适合作为函数和结构体的参数，这些函数和结构体期望在迭代结束之前可以从中获取连续的元素。for()语句就是这样一个迭代器。list()是另外一个；它从可迭代对象中创建列表。 

### break and continue Statements, and else Clauses on Loops

break 用于跳出最近的 for 或 while 循环。

### 定义函数
def 引入一个函数定义。它必须后跟函数名称和带括号的形式参数列表。

文档字符串
def my_function():
    """Do nothing, but document it.

    No, really, it doesn't do anything.
    """
    pass

>>> print(my_function.__doc__)

在函数被调用时,  实际参数（实参）会被引入被调用函数的本地符号表示中；因此，实参是通过 按值调用 传递的（其中 值 始终是对象 引用 而不是对象的值）。当一个函数调用另外一个函数时，将会为该调用创建一个新的本地符号表。函数定义会把函数名引入当前的符号表中。函数名称的值是具有解释器将其识别为用户定义函数的类型。这个值可以分配给另一个名称, 该名称也可以作为一个函数使用。这用作一般的重命名机制：

如果你学过其他语言，你可能会认为 fib 不是函数而是一个过程，因为它并不返回值。事实上，即使没有 return 语句的函数也会返回一个值，尽管它是一个相当无聊的值。这个值称为 None （它是内置名称）。一般来说解释器不会打印出单独的返回值 None ，如果你真想看到它，你可以使用 print()

### 函数定义的更多形式
#### 参数默认值
最有用的形式是对一个或多个参数指定一个默认值。这样创建的函数，可以用比定义时允许的更少的参数调用。
'''
def ask_ok(prompt, reteries=4, reminder='Please try agin!')
    while True:
    ok = input(prompt)
    if ok in ('y', 'ye', 'yes'):
        return True
    if ok in('n', 'no', 'nop', 'nope'):
        return False
    reteries = reteries -1
    if reteries < 0:
        raise ValueError('invalid user response')
    print(reminder)
'''
默认值在 定义过程中在函数定义处计算的，所以
i = 5

def f(arg=i):
    print(arg)
i = 6
f()
重要警告: 默认值只会执行一次。默认值为可变对象（列表、字典以及大多数类实例）时很重要。
函数会在后续调用中传递它的参数：
def f(a, L=[]):
    L.append(a)
    return L
print(f(1))
print(f(2))
print(f(3))
[1]
[1,2]
[1,2,3]

不想后续调用之间共享默认值，可以
def f(a, L=None):
    if L is None:
        L = []
    L.append(a)
    return L

#### 关键字参数
可以使用形如 kwarg=value 的关键字参数来调用函数。
def parrot(voltage, state='a stiff', action='voom', type='Norwegian Blue'):
    print("-- This parrot wouldn't", action, end=' ')
    print("if you put", voltage, "volts through it.")
    print("-- Lovely plumage, the", type)
    print("-- It's", state, "!")   

接受一个必需的参数（voltage）和三个可选的参数（state, action，和 type）。这个函数可以通过下面的任何一种方式调用:
parrot(1000)                                          # 1 positional argument
parrot(voltage=1000)                                  # 1 keyword argument
parrot(voltage=1000000, action='VOOOOOM')             # 2 keyword arguments
parrot(action='VOOOOOM', voltage=1000000)             # 2 keyword arguments
parrot('a million', 'bereft of life', 'jump')         # 3 positional arguments
parrot('a thousand', state='pushing up the daisies')  # 1 positional, 1 keyword

在函数调用中，关键字参数必须跟随在位置参数的后面。传递的所有关键字参数必须与函数接受的其中一个参数匹配。顺序不重要。不能对同一个参数多次赋值。

When a final formal parameter of the form **name is present, it receives a dictionary (see 映射类型 — dict) containing all keyword arguments except for those corresponding to a formal parameter. This may be combined with a formal parameter of the form *name (described in the next subsection) which receives a tuple containing the positional arguments beyond the formal parameter list. (*name must occur before **name.) For example, if we define a function like this:
当存在形式为 **name 的最终形参时，它会收到一个字典（请参阅映射类型 — dict），其中包含除与形参相对应的那些关键字参数之外的所有关键字参数。 这可以与 *name 形式的形参（在下一小节中描述）结合，该形参接收一个元组，该元组包含形参列表之外的位置参数。 （*name 必须出现在 **name 之前。）例如，如果我们定义这样的函数：

'''
def cheeseshop(kind, *arguments, **keywords):
    print("-- Do you have any", kind, "?")
    print("-- I'm sorry, we're all out of", kind)
    for arg in arguments:
        print(arg)
    print("-" * 40)
    for kw in keywords:
        print(kw, ":", keywords[kw])
它可以像这样调用:

cheeseshop("Limburger", "It's very runny, sir.",
           "It's really very, VERY runny, sir.",
           shopkeeper="Michael Palin",
           client="John Cleese",
           sketch="Cheese Shop Sketch")
当然它会打印:

-- Do you have any Limburger ?
-- I'm sorry, we're all out of Limburger
It's very runny, sir.
It's really very, VERY runny, sir.
----------------------------------------
shopkeeper : Michael Palin
client : John Cleese
sketch : Cheese Shop Sketch
'''

注意打印时关键字参数的顺序保证与调用函数时提供它们的顺序是相匹配的。


#### 任意的参数列表
使用任意数量的参数调用函数。这些参数会被包含在一个元组里（参见 元组和序列 ）。在可变数量的参数之前，可能会出现零个或多个普通参数。:

def write_multiple_items(file, separator, *args):
    file.write(separator.join(args))
一般来说，这些 可变参数 将在形式参数列表的末尾，因为它们收集传递给函数的所有剩余输入参数。出现在 *args 参数之后的任何形式参数都是 ‘仅关键字参数’，也就是说它们只能作为关键字参数而不能是位置参数。:

>>>
>>> def concat(*args, sep="/"):
...     return sep.join(args)
...
>>> concat("earth", "mars", "venus")
'earth/mars/venus'
>>> concat("earth", "mars", "venus", sep=".")
'earth.mars.venus'

#### 解包参数列表
If they are not available separately, write the function call with the *-operator to unpack the arguments out of a list or tuple:

>>> list(range(3, 6))            # normal call with separate arguments
[3, 4, 5]
>>> args = [3, 6]
>>> list(range(*args))            # call with arguments unpacked from a list
[3, 4, 5]

In the same fashion, dictionaries can deliver keyword arguments with the **-operator:

>>> def parrot(voltage, state='a stiff', action='voom'):
...     print("-- This parrot wouldn't", action, end=' ')
...     print("if you put", voltage, "volts through it.", end=' ')
...     print("E's", state, "!")
...
>>> d = {"voltage": "four million", "state": "bleedin' demised", "action": "VOOM"}
>>> parrot(**d)
-- This parrot wouldn't VOOM if you put four million volts through it. E's bleedin' demised !

#### Lambda 表达式
lambda 关键字来创建一个小的匿名函数。这个函数返回两个参数的和： lambda a, b: a+b 

def make_incrementor(n):
    return lambda x: x + n

f = make_incrementor(42)
f(0)

lambda表达式来返回一个函数。另一个用法是传递一个小函数作为参数:
pairs = [(1, 'one'), (2, 'two'), (3, 'three'), (4, 'four')]
pairs.sort(key=lambda pair: pair[1])
pairs

#### 函数标注
关于用户自定义函数中使用的类型的完全可选元数据信息。
Annotations are stored in the __annotations__ attribute of the function as a dictionary and have no effect on any other part of the function. Parameter annotations are defined by a colon after the parameter name, followed by an expression evaluating to the value of the annotation. Return annotations are defined by a literal ->, followed by an expression, between the parameter list and the colon denoting the end of the def statement. The following example has a positional argument, a keyword argument, and the return value annotated:

## 数据结构
### 列表的更多特性

list.append(x)
    在列表的末尾添加一个元素。相当于 a[len(a):] = [x]
list.extend(iterable)
    使用可迭代对象中的所有元素来扩展列表。相当于  a[len(a):] = iterable
list.insert(i, x)
    在给定的位置插入一个元素。第一个参数式要插入的元素的索引，a.insert(0, x)
    插入列表头部，a.insert(len(a), x)等同于a.appen(x)
list.remove(x)
    Remove the first item from the list whose value is x. It is an error if there is no such item.
list.pop([i])
    删除列表中给定位置的元素并返回它。如果没有给定位置。a.pop()将会删除并返回列表中的最后一个元素。
list.clear()
    移除列表中的所有元素。del a[:]
list.index(x[,start[,end]])
    Return zero-based index in the list of the first item whose value is x. Raises a ValueError if there is no such item.
list.count(x)
    返回元素x 在列表中出现的次数
list.sort(key=None,. reverse=False)
    对列表中的元素进行排序
list.reverse()
    翻转列表中的元素。
list.copy()
    返回一个列表的浅拷贝, 等价于 a[:]

>>> fruits = ['orange', 'apple', 'pear', 'banana', 'kiwi', 'apple', 'banana']
>>> fruits.count('apple')
2
>>> fruits.count('tangerine')
0
>>> fruits.index('banana')
3
>>> fruits.index('banana', 4)  # Find next banana starting a position 4
6
>>> fruits.reverse()
>>> fruits
['banana', 'apple', 'kiwi', 'banana', 'pear', 'apple', 'orange']
>>> fruits.append('grape')
>>> fruits
['banana', 'apple', 'kiwi', 'banana', 'pear', 'apple', 'orange', 'grape']
>>> fruits.sort()
>>> fruits
['apple', 'apple', 'banana', 'banana', 'grape', 'kiwi', 'orange', 'pear']
>>> fruits.pop()
'pear'
像 insert ，remove 或者 sort 方法，只修改列表，没有打印出返回值——它们返回默认值 None 。
