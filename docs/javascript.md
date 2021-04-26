# Overview
[url](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/A_re-introduction_to_JavaScript)

TODO 2021-04-26 14:26:58 学习javaScript基础， 完成react基础部分学习，数据JSX语法

 javascript no inpt & output

 syntext from java& C

 Type:
        Number  
        String  
        Boolean  
        Function  
        Object  
        Symbol(ES2015 added)  
        undefined  
        null   
        Arry  
        Date  
        RegExp(正则)

    strict
        Number
        String
        Boolean
        Symbol(ES2015 )
        Object：
            Function
            Array
            Date
            RegExp
        null
        undefined

Error (built-in)

## Number
IEEE 754 标准的双精度64位格式( double-precision 64-bit format IEEE 754 values)

In JavaScript Except BigInt ,not exist 整型(Integer)/整数

```
console.log(3/2);   //  1.5, not 1
console.log(Math.floor(3/2)); // 1
```
一切看上去是整数的东西，其实都是浮点数
```
0.1 + 0.2 = 0.3,000,000,000,000,000,4
```

Built-in Math()
```
Math.sin(3.5)
var circumference = 2 * Math.PI * r;
```
Built-in parseInt()
```
parseInt("123"， 10); // 123
parseInt("010", 10);  // 10
```
老版本的browser 会把首字符"0"当作八进制数字，2013年前的Javascript 返回结果
```
parseInt("010") // 8
parseInt("0x10") // 16
```
这是因为字符串以数字 0 开头，parseInt()函数会把这样的字符串视作八进制数字；同理，0x开头的字符串则视为十六进制数字。

如果想把一个二进制数字字符串转换成整数值，只要把第二个参数设置为 2 就可以了：
```
parseInt("11", 2); // 3
```
TODO 2021-04-26 11:39:09 parseInt() & Math() 的 work functional

parseFloat() ,用以解析浮点数 字符串， 与 parseInt()不同的是，parseFloat()只应用于解析十进制数字

一元运算符 + 也可以把数字字符串转成数值：
```
+ "42";   // 42
+ "010";  // 10
+ "0x10"; // 16
```
如果给定的字符串不存在数值形式，函数会返回一个特殊的值，NaN(Not a Number)
```
parseInt("hello", 10); //NaN

NaN + 5； //NaN
```
Built-in isNaN()来判断是不是NaN：
```
isNaN(NaN); // true
```
particular value
特殊值
    Infinity    // (正无穷)
    -Infinity   // (负无穷)
```
1 / 0;  // Infinity
-1 / 0； // -Infinity
```
Built-in isFinite() 如果类型为Infinity, -Infinity, NaN 则返回false
```
isFinite(1/0); // false
isFinite(-1/0); // false
isFinite(-Infinity); // false
isFinite(NaN); // false

isFinite(0); // true
isFinite(2e64); // true

isFinite("0"); //true
// 如果是纯数值类型的检测，则返回 false;
Number.isFinite("0"); // false
```
### Notes:
    parseInt()和parseFloat() 函数会逐个解析字符串中的字符，直到遇上一个无法被解析成数字的字符，然后返回该字符前所有数字字符组成的数字。但是运算符"+" 对字符串的转换方式不同，只要字符串含有无法被解析成数字的字符，该字符串就将被转换成NaN。
```
parseInt("10.2abc")  // 10
parseFloat("10.2abc") // 10.2
1 + "10.2abc" // 110.2abc
```

## String 字符串

JavaScript 中的字符串是一串
[Unicode字符序列](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Values,_variables,_and_literals#Unicode.E7.BC.96.E7.A0.81)  
(他们四一串UTF-16编码单元的序列，每一个编码单元由一个16位二进制数表示。每一个Unicode 字符由一个或两个编码单元来表示)。

如果想要表示一个单独的字符， 只要使用长度为1的字符串。
通过访问字符串的Length(编码单元个数) 属性， 可以得到它的长度。
```
"hello".length; // 5
```
字符串类似object, 有methods  
Built-in    charAt(0)   repalce(serachValue, repacleValue)   toUpperCase();
```
"hello".charAt(0);  // "h"
"hello, world".replace("world", "mars") // "hello, mars"
"hello".toUpperCase();  // "HELLO"
```
## 其他类型
javaScript 中的 null 表示一个空值(non-value), 必须使用null关键字才能访问。undefined 是一个"undefined (未定义)"类型的对象，表示一个未初始化的值，也就是还没有被分配的值。undefined 实际上是一个不允许修改的常量

JS包含的布尔类型，这个变量有两个可能的值， 分别是 true or false
    将变量转换成布尔类型的规则

    1. false、0、空字符串("")、NaN 、null 和 undefined 被转换成false
    2. 所有其他值被转换成 true

可以使用Boolean()函数进行显示转换
```
Boolean(''); // false
Boolean(234); // true
```
## 变量

Built-in keywords : Let const 和var

let 块级作用域的本地变量， 并且可选的将其初始化为一个值。
```
let a;
let name = 'Simoin';
```
let 作用域
```
// myLetVariable 在不能被引用

for (let myLetVariable = 0; myLetVariable < 5; myLetVariable++){
    // myLetVariable 只能在这里引用
}

// myLetVariable 在这里不能被引用
```
const 允许声明一个不可变的常量。这个常量在定义域内总是可见的。
```
const Pi = 3.14;
pi =1 ; // TypeError: Assignment to constant variable.
```
var 
```
// myLetVariable 在 能 被引用

for (var myLetVariable = 0; myLetVariable < 5; myLetVariable++){
    // myLetVariable 整个函数中都能被引用
}

// myLetVariable 在这里 能 被引用
```
#### Notes
 JavaScript 中语句块（blocks）是没有作用域的，只有函数有作用域。因此如果在一个复合语句中（如 if 控制结构中）使用 var 声明一个变量，那么它的作用域是整个函数（复合语句在函数中）。 但是从 ECMAScript Edition 6 开始将有所不同的， let 和 const 关键字允许你创建块作用域的变量。

## 运算符


















