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

#### 列表作为栈使用
添加一个元素到堆栈的顶端，使用append()。要从堆栈顶部取出一个元素，使用pop(), 不用指定索引

>>> stack = [3, 4, 5]
>>> stack.append(6)
>>> stack.append(7)
>>> stack
[3, 4, 5, 6, 7]
>>> stack.pop()
7
>>> stack
[3, 4, 5, 6]
>>> stack.pop()
6
>>> stack.pop()
5
>>> stack
[3, 4]


#### 列表作为队列使用
“先进先出”，低效。
因为在列表的末尾添加和弹出元素非常快，但是在列表的开头插入或弹出元素却很慢 (因为所有的其他元素都必须移动一位)。



若要实现一个队列，可使用 collections.deque，它被设计成可以快速地从两端添加或弹出元素。

#### 列表推导式
更简单的创建列表的方法。 常见的用法式把某种操作应用于序列或可迭代对象的每个元素上。然后使用其结果来创建列表，或者通过满足某些特定条件元素来创建子序列。
squares = []
for x in range(10)
    suqares.append(x**2)
suqares
suqares = list(map(lambda x: x**2, range(10)))
===
squares = [x**2 for x in range(10)]
如果表达式是一个元组，必须加上括号
vec = [-4, -2, 0, 2, 4]
#create a new list with the values doubled
[x*2 for x in vec]
[x for x in vec if x >=0 ]
[abs(x), for x in vec]

#flatten a list using a listcomp with two 'for'
vec =[[1,2,3], [4,5,6], [7,8,9]]
[num for elem in vec for num in elem ]
[1,2,3,4,5,6,7,8,9]

列表推导式可以使用复杂的表达式和嵌套函数

for math import pi
[str(round(pi,i)) for i in range(1, 6)]
#### 嵌套的列表推导式
列表推导式中的初始表达式可以是任何表达式，包括一个列表推导式
matrix = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12]
]

[[row[i] for row in matrix] for i in range(4)]
====
transposed = []
for i in range(4):
    transposed.append([row[i] for row in matrix])
实际应用中，使用内置函数去组成复杂的流程语句。zip()
list(zip(*matrix))
[(1,5,9),(2,6,10),(3,7,11),(4,8,12)]
解包参数

#### 元组和序列
序列类型：list tuple range
一个元组由几个逗号隔开的值组成。
t = 123,5432,'hello'
t[0]
>>>12345
元组在输出时总是被圆括号包围的，以便正确表示嵌套元组。输入时圆括号可有可无，不过经常会是必须的（如果这个元组是一个更大的表达式的一部分）。给元组中的一个单独的元素赋值是不允许的，当然你可以创建包含可变对象的元组，例如列表。

虽然元组可能看起来与列表很像，但它们通常是在不同的场景被使用，并且有着不同的用途。元组是 immutable ，其序列通常包含不同种类的元素，并且通过解包（这一节下面会解释）或者索引来访问（如果是 namedtuples 的话甚至还可以通过属性访问）。列表是 mutable ，并且列表中的元素一般是同种类型的，并且通过迭代访问。

### 集合
集合是由不重复元素组成的无序的集。它的基本用法包括成员检测和消除重复元素。集合对象也支持像 联合，交集，差集，对称差分等数学运算。

{} 或 set() 可以创建集合
创建空集合只能用set()
{}创建一个空字典
>>> basket = {'apple', 'orange', 'apple', 'pear', 'orange', 'banana'}
>>> print(basket)                      # show that duplicates have been removed
{'orange', 'banana', 'pear', 'apple'}
>>> 'orange' in basket                 # fast membership testing
True
>>> 'crabgrass' in basket
False

>>> # Demonstrate set operations on unique letters from two words
...
>>> a = set('abracadabra')
>>> b = set('alacazam')
>>> a                                  # unique letters in a
{'a', 'r', 'b', 'c', 'd'}
>>> a - b                              # letters in a but not in b
{'r', 'd', 'b'}
>>> a | b                              # letters in a or b or both
{'a', 'c', 'r', 'd', 'b', 'm', 'z', 'l'}
>>> a & b                              # letters in both a and b
{'a', 'c'}
>>> a ^ b                              # letters in a or b but not both
{'r', 'd', 'b', 'm', 'z', 'l'}

## 字典
联合内存 或 联合数组
字典以关键字为索引。
主要使用关键字存储和解析值
>>> tel = {'jack': 4098, 'sape': 4139}
>>> tel['guido'] = 4127
>>> tel
{'sape': 4139, 'guido': 4127, 'jack': 4098}
>>> tel['jack']
4098
>>> del tel['sape']
>>> tel['irv'] = 4127
>>> tel
{'guido': 4127, 'irv': 4127, 'jack': 4098}
>>> list(tel.keys())
['irv', 'guido', 'jack']
>>> sorted(tel.keys())
['guido', 'irv', 'jack']
>>> 'guido' in tel
True
>>> 'jack' not in tel
False

dict() 构造函数可以直接从键值对序列里创建字典。

当关键字是简单字符串时，有时直接通过关键字参数来指定键值对更方便

>>> dict(sape=4139, guido=4127, jack=4098)
{'sape': 4139, 'jack': 4098, 'guido': 4127}

## 循环的技巧
当在字典中循环时，用items()方法可以将关键字和对应的值同时取出
knights = {'gallahad': 'the pure', 'robin': 'the brave'}
for k,v in knights.ietms():
    print(i, v)

当在序列中循环时, 用enumerate()函数可以将索引位置和对应的值同时取出
for i, v in enumerate(['tic', 'tac', 'toe'])
    print(i, v)

当同时在两个或更多序列中循环时, 可以使用 zip()函数将其内元素一一匹配。
questions = ['name', 'quest', 'favorite color']
answers = ['lancelot', 'the holy grail', 'blue']
for q, a in zip(questions, answers):
    print('What is your {0}? It is {1}.'.format(q,a))

如果要逆向一个序列，可以先正向定位序列，然后调用 reversed()函数
>>> for i in reversed(range(1, 10, 2)):
...     print(i)
...
9
7
5
3
1

如果要按某个指定顺序循环一个序列, 可以使用 sorted() 函数, 它可以在不改动原序列的基础上返回一个新的排好的序列
>>> basket = ['apple', 'orange', 'apple', 'pear', 'orange', 'banana']
>>> for f in sorted(set(basket)):
...     print(f)
...
apple
banana
orange
pear


有时可能会想在循环时修改列表内容，一般来说改为创建一个新列表是比较简单且安全的
>>> import math
>>> raw_data = [56.2, float('NaN'), 51.7, 55.3, 52.5, float('NaN'), 47.8]
    filtered_data = []
    for value in raw_data:
        if not math.isnan(value):
            filtered_data.append(value)
    
    filtered_data

### 模块
模块的出现原因：将程序拆分方便维护，亦或想在不同的程序中使用一个便捷的函数。
把定义放在文件里，并在脚本或解释器交互模式实例中使用它们。这样的文件就叫做模块。
__name__ 获得模块名。
>>> import fibo
>>> fibo.__name__
'fibo'

dir()用于查找模块定义名称,它返回一个排序过的字符串列表。

dir() 不会列出内置函数和变量的名称。如果你想要这些，它们的定义是在标准模块 builtins 中:

### 输入和输出

花括号和其中的字符（称为格式字段）将替换为传递给 str.format() 方法的对象
str.format() 方法的基本用法如下所示:

>>>
>>> print('We are the {} who say "{}!"'.format('knights', 'Ni'))
We are the knights who say "Ni!"

### 读写文件
open() 返回一个 file object ,最常用的有两个参数：open(filename, mode)

>>> f = open('workfile', 'w')
'r' 只读
'w' 只能写入(已存在的同名文件会被删除)
'a' 打开文件以追加内容，任何写入的数据流会添加到文件的末尾
'r+' 打开文件进行读写

在文本模式下读取时，默认会把平台特定的行结束符 (Unix 上的 \n, Windows 上的 \r\n) 转换为 \n。在文本模式下写入时，默认会把出现的 \n 转换回平台特定的结束符。这样在幕后修改文件数据对文本文件来说没有问题，但是会破坏二进制数据例如 JPEG 或 EXE 文件中的数据。请一定要注意在读写此类文件时应使用二进制模式。

如果你没有使用 with 关键字，那么你应该调用 f.close() 来关闭文件并立即释放它使用的所有系统资源。
一定要显式的关闭文件。

要从文件中读取行，你可以循环遍历文件对象
>>> for line in f:
        print(line, end='')
This is the first line of the file.
Second line of the file

以列表形式读取文件中的所有行，可以使用list(f) 或 f.readlines()
f.write('string') 会把字符串写入到文件中，并返回写入的字符数


在写入其他类型的对象之前，需要先把它们转化为字符串（在文本模式下）或者字节对象（在二进制模式下）:
>>> value = ('the answer', 42)
>>> s = str(value)  # convert the tuple to string
>>> f.write(s)
18

### 使用 json 保存结构化的数据
 JSON (JavaScript Object Notation)
json 标准模块可以采用python 数据层次结构，并将它转化为字符串表示形式。这个过程成为 serializing. 从字符串表示中重构数据成为 deserializing

dumps()函数变体叫做dump(), 它只是将对象序列化为 text file。因此，如果if 是一个 text file对象
json.dump(x, f)

要再次解码, 发是一个打开的以供阅读的text file 对象
x = json.load(f)

简单的序列化技术可以处理列表和字典, json 序列化任意类的实例时需要额外的额外的努力。


### 错误和异常
语法错误和异常
语法错误又称为解析错误，SyntaxError

异常，即使语句或表达式在语法上是正确的，但在尝试执行时，它仍可能引发错误。在执行时检测到的错误被称为 异常。
处理异常
```
while True:
    try:
        x = int("PLLLLLLLLLEE")
        break
    except ValueError:
        print("aaaaaaaaaaaa")
```
首先，执行 try 子句 （try 和 except 关键字之间的（多行）语句）。

如果没有异常发生，则跳过 except 子句 并完成 try 语句的执行。

如果在执行 try 子句时发生了异常，则跳过该子句中剩下的部分。 然后，如果异常的类型和 except 关键字后面的异常匹配，则执行 except 子句，然后继续执行 try 语句之后的代码。

如果发生的异常和 except 子句中指定的异常不匹配，则将其传递到外部的 try 语句中；如果没有找到处理程序，则它是一个 未处理异常，执行将停止并显示如上所示的消息。

raise 语句允许强制抛出异常
raise 唯一的参数就是排除的异常，这个参数必须是一个实例或是一个异常类（派生自Exception 的类）如果传递的是一个异常类，它将通过调用没有参数的构造函数来隐式实例化
raise ValueError ## shorthand for 'raise ValueError'

用户自定义异常类
class Error(Exception):
    pass
定义清理操作
try:
    raise KeeeError
finally:
    print('adad')

## 类
类提供了一种组合数据和功能的方法。 创建一个新类意味着创建一个新的对象 类型， 从而允许创建一个该类型的新 实例。

Python作用域和命名空间

namespace 是一个从名字到对象的映射。大部分命名空间当前都是由Python字典实现, 只有面对性能问题时才去关注。命名空间的几个例子: 存放内置函数的集合(包含abs()这样的函数, 和内建的异常等等); 模块中的全局名称。 函数调用中的局部名称。从某种意义上说，对象的属性集合也是一种命名空间的形式。
不同命名空间的名称之间绝对没有关系。就像两个模块都可以定义 maximize 函数而不会产生混淆，模块的用户必须在其前面加上模块名称。

把任何一个点号之后的名称都称为属性，
例如，在表达式 z.real 中，real 是对象 z 的一个属性。按严格的说法，对模块中名称的引用属于属性引用：在表达式 modname.funcname 中，modname 是一个模块对象而 funcname 是它的一个属性。在此情况下在模块的属性和模块中定义的全局名称之间正好存在一个直观的映射：它们共享相同的命名空间！ 1

属性可以是只读或者可写的。如果为后者，那么对属性的赋值是可行的。模块属性是可以写，你可以写出 modname.the_answer = 42 。可写的属性同样可以用 del 语句删除。例如， del modname.the_answer 将会从名为 modname 的对象中移除 the_answer 属性。

在不同时刻创建的命名空间拥有不同的生存期。包含内置名称的命名空间是在 Python 解释器启动时创建的，永远不会被删除。模块的全局命名空间在模块定义被读入时创建；通常，模块命名空间也会持续到解释器退出。被解释器的顶层调用执行的语句，从一个脚本文件读取或交互式地读取，被认为是 __main__ 模块调用的一部分，因此它们拥有自己的全局命名空间。（内置名称实际上也存在于一个模块中；这个模块称作 builtins 。）

一个函数的本地命名空间在这个函数被调用时创建，并在函数返回或抛出一个不在函数内部处理的错误时被删除。（事实上，比起描述到底发生了什么，忘掉它更好。）当然，每次递归调用都会有它自己的本地命名空间。

一个 作用域 是一个命名空间可直接访问的 Python 程序的文本区域。 这里的 “可直接访问” 意味着对名称的非限定引用会尝试在命名空间中查找名称。

作用域被静态确定，但被动态使用。 在程序运行的任何时间，至少有三个命名空间可被直接访问的嵌套作用域：

最先搜索的最内部作用域包含局部名称

从最近的封闭作用域开始搜索的任何封闭函数的作用域包含非局部名称，也包括非全局名称

倒数第二个作用域包含当前模块的全局名称

最外面的作用域（最后搜索）是包含内置名称的命名空间

如果一个名称被声明为全局变量，则所有引用和赋值将直接指向包含该模块的全局名称的中间作用域。 要重新绑定在最内层作用域以外找到的变量，可以使用 nonlocal 语句声明为非本地变量。 如果没有被声明为非本地变量，这些变量将是只读的（尝试写入这样的变量只会在最内层作用域中创建一个 新的 局部变量，而同名的外部变量保持不变）。

通常，当前局部作为域将（按字面文本）引用当前函数的局部名称。 在函数以外，局部作用域将引用与全局作用域相一致的命名空间：模块的命名空间。 类定义将在局部命名空间内再放置另一个命名空间。

重要的是应该意识到作用域是按字面文本来确定的：在一个模块内定义的函数的全局作用域就是该模块的命名空间，无论该函数从什么地方或以什么别名被调用。 另一方面，实际的名称搜索是在运行时动态完成的 — 但是，Python 正在朝着“编译时静态名称解析”的方向发展，因此不要过于依赖动态名称解析！ （事实上，局部变量已经是被静态确定了。）

A special quirk of Python is that – if no global statement is in effect – assignments to names always go into the innermost scope. Assignments do not copy data — they just bind names to objects. The same is true for deletions: the statement del x removes the binding of x from the namespace referenced by the local scope. In fact, all operations that introduce new names use the local scope: in particular, import statements and function definitions bind the module or function name in the local scope.

global 语句可被用来表明特定变量生存于全局作用域并且应当在其中被重新绑定；nonlocal 语句表明特定变量生存于外层作用域中并且应当在其中被重新绑定。

### 作用域和命名空间示例
global 和 nonlocal 影响变量的绑定
局部 赋值（这是默认状态）不会改变 scope_test 对 spam 的绑定。 nonlocal 赋值会改变 scope_test 对 spam 的绑定，而 global 赋值会改变模块层级的绑定。
def scope_test():
    def do_local():
        spam = 'local spam'
    
    def do_nonlocal():
        nonlocal spam
        spam = 'nonlocal spam'
    
    def do_global():
        global spam
        spam = 'global spam'
    
    spam ='test spam'
    do_local()
    print("After local assignment:", spam)
    do_nonlocal()
    print("After nonlocal assignment:", spam)
    do_global()
    print("After global assignment:", spam)

scope_test()
print("In global scope:", spam)

### 类
类引入了一些新语法，三种新对象类型和一些新定义
类定义与函数定义一样必须被执行才会起作用。
class ClassName：
    ....

类对象
类对象支持两种操作： 属性引用和实例化

属性引用 使用Python中所有属性引用所使用的标准语法 obj.name。 有效的属性名称是类对象被创建时存在于类命名空间的所有名称
```
class MyClass:

    i = 123456
    
    def f(self):
        return 'hello world'
```
MyClass.i 和 MyClass.f 都是有效的引用。

类属性可以被赋值，因此可以通过赋值来更改MyClass.i 的值。__doc__ 

类的实例化使用函数表示法。 可以把类对象视为是返回该类的一个新实例

x = MyClass()
实例化操作（“调用”类对象）会创建一个空对象。 许多类喜欢创建带有特定初始状态的自定义实例。 为此类定义可能包含一个名为 __init__() 的特殊方法，就像这样:
def __init_(slef):
    self.data = []
当一个类定义了 __init__() 方法以后, 类的实例化操作会自动新创建的类实例发起调用 __init__(). 获取一个初始化过的类
x = MyClass()

当然，__init__() 方法还可以有额外参数以实现更高灵活性。 在这种情况下，提供给类实例化运算符的参数将被传递给 __init__()。 例如，:
>>> class Complex:
...     def __init__(self, realpart, imagpart):
...         self.r = realpart
...         self.i = imagpart
...
>>> x = Complex(3.0, -4.5)
>>> x.r, x.i
(3.0, -4.5)

### 实例对象
实例对象的唯一理解是属性的引用。两种有效的属性名：数据属性和方法
属性 对应 C++ 的数据成员。数据属性不用声明；像局部变量一样，它们将在第一次被赋值时产生。
```
x.counter = 1

```
实例属性引用称为方法。 方法 “从属于” 对象的函数。例如列表对象具有 append, insert, sort 等方法。

#### 方法对象
x.f()
通常，方法在被绑定后立即被调用
方法的特殊之处在于，实例对象会作为函数的第一个参数传入。
调用x.f()相当于 MyClass.f(x)。 调用一个具有n个参数的方法 就相当于调用再多一个参数的对应函数，这个参数值方法所属实例对象，位置正在其他参数之前

细节： 当一个实例的非数据属性被引用时，将搜索实例所属的类。 如果名称表示一个属于函数对象的有效类属性，会通过合并打包（指向）实例对象和函数对象到一个抽象对抽象中的方式来创建一个方法对象。这个抽象对象就是方法对象。当附带参数列表调用方法对象时，将基于实例对象和参数列表构建一个新的参数列表，并使用这个新参数列表调用相应的函数对象。

### 类和实例变量

实例变量用于每个实例的唯一数据，而类变量用于类的所有实例共享的属性和方法。
```
class Dog:
    kind = 'canie'  # class variable shared by all instances

    def __init__(self, name):
        self.name = name    # instance variable unique to each instance
```

 正如 名称和对象 中已讨论过的, 共享数据可能在涉及 mutable 对象例如列表和字典的时候导致令人惊讶的结果，例如以下代码中的 tricks 列表不应该对用作类变量，因为所有的Dog实例将只共享一个单独的列表：
class Dog:

    tricks = []             # mistaken use of a class variable

    def __init__(self, name):
        self.name = name

    def add_trick(self, trick):
        self.tricks.append(trick)

>>> d = Dog('Fido')
>>> e = Dog('Buddy')
>>> d.add_trick('roll over')
>>> e.add_trick('play dead')
>>> d.tricks                # unexpectedly shared by all dogs
['roll over', 'play dead']

正确的类设计应该使用实例变量:

class Dog:

    def __init__(self, name):
        self.name = name
        self.tricks = []    # creates a new empty list for each dog

    def add_trick(self, trick):
        self.tricks.append(trick)

>>> d = Dog('Fido')
>>> e = Dog('Buddy')
>>> d.add_trick('roll over')
>>> e.add_trick('play dead')
>>> d.tricks
['roll over']
>>> e.tricks
['play dead']

### 补充说明
数据属性会覆盖掉具有相同名称的方法属性；为了避免会在大型程序中导致难以发现的错误的意外名称冲突，明智的做法是使用某种约定来最小化冲突的发生几率。 可能的约定包括方法名称使用大写字母，属性名称加上独特的短字符串前缀（或许只加一个下划线），或者是用动词来命名方法，而用名词来命名数据属性。

数据属性可以被方法以及一个对象的普通用户（“客户端”）所引用。 换句话说，类不能用于实现纯抽象数据类型。 实际上，在 Python 中没有任何东西能强制隐藏数据 — 它是完全基于约定的。 （而在另一方面，用 C 语言编写的 Python 实现则可以完全隐藏实现细节，并在必要时控制对象的访问；此特性可以通过用 C 编写 Python 扩展来使用。）

客户端应当谨慎地使用数据属性 — 客户端可能通过直接操作数据属性的方式破坏由方法所维护的固定变量。 请注意客户端可以向一个实例对象添加他们自己的数据属性而不会影响方法的可用性，只要保证避免名称冲突 — 再次提醒，在此使用命名约定可以省去许多令人头痛的麻烦。

在方法内部引用数据属性（或其他方法！）并没有简便方式。 我发现这实际上提升了方法的可读性：当浏览一个方法代码时，不会存在混淆局部变量和实例变量的机会。

方法的第一个参数常常被命名为 self。 这也不过就是一个约定: self 这一名称在 Python 中绝对没有特殊含义。 但是要注意，不遵循此约定会使得你的代码对其他 Python 程序员来说缺乏可读性，而且也可以想像一个 类浏览器 程序的编写可能会依赖于这样的约定。

任何一个作为类属性的函数都为该类的实例定义了一个相应方法。 函数定义的文本并非必须包含于类定义之内：将一个函数对象赋值给一个局部变量也是可以的。 例如:

# Function defined outside the class
def f1(self, x, y):
    return min(x, x+y)

class C:
    f = f1

    def g(self):
        return 'hello world'

    h = g

现在 f, g 和 h 都是 C 类的引用函数对象的属性，因而它们就都是 C 的实例的方法 — 其中 h 完全等同于 g。 但请注意，本示例的做法通常只会令程序的阅读者感到迷惑。

方法可以通过使用 self 参数的方法属性调用其他方法:

class Bag:
    def __init__(self):
        self.data = []

    def add(self, x):
        self.data.append(x)

    def addtwice(self, x):
        self.add(x)
        self.add(x)

方法可以通过与普通函数相同的方式引用全局名称。 与方法相关联的全局作用域就是包含其定义的模块。 （类永远不会被作为全局作用域。） 虽然我们很少会有充分的理由在方法中使用全局作用域，但全局作用域存在许多合法的使用场景：举个例子，导入到全局作用域的函数和模块可以被方法所使用，在其中定义的函数和类也一样。 通常，包含该方法的类本身是在全局作用域中定义的，而在下一节中我们将会发现为何方法需要引用其所属类的很好的理由。

每个值都是一个对象，因此具有 类 （也称为 类型），并存储为 object.__class__ 。

