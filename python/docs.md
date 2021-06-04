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
