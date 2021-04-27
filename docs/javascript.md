# Overview
[url](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/A_re-introduction_to_JavaScript)

[push locale project to github](https://www.linuxidc.com/Linux/2017-11/148628.htm)

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
\+  \-  \* /  
+= -=等价 x = x operator y
```
x += 5; // x = x + 5
```
++ -- 表示变量的自增和自减

\+ 可以用来连接字符串
```
"hello" + "world";  // hello world
"3" + 4 + 5; // 345
3 + 4 + "5"; // 75
```
== 类型自适应 !=
```
1 == "123" // true
1 == true; // true

```
=== 不需要自动类型转换 !==
```
1 === true；    // false
123 === "123";  // false
```
## 控制结构
if else

```
var name = "kitname";
if (name == "pupsos") {
    name += "!";
} else if (name == "kitname") {
    name += "!!";
} else {
    name = "!" + name;
}
name == "kitname!!"; // true
```
while 循环和 do-while循环
```
while (true){
    // 一个无线循环！  
}

var input;
do {
    input = get_input();
} while(inputIsNotVaild(input))
```
for 循环
```
for (var i = 0; i < 5; i++) {
    // 将会执行5次
}
```

for ... for
```
for (let value of array) {

}
```
for ... in
```
for (let property in object) {
    // do something with object property
}
```
&& 和 || 运算符使用短路逻辑( short-circuit logic), 是否会执行第二个语句(操作数)取决于第一个操作数的结果。 在需要访问某个对象的属性时，使用这个特性可以事先检测该对象是否为空：
```
var name == o && o.getName();
```
或用于缓存值（当错误值无效时）：
```
var name = cachedName || (cachedName = getName());
```
用于条件表达式的三元操作符
```
var allowed = (age > 18) ? "yes" : "no";
```
多重分支的switch 语句，基于一个数字或字符串的switch语句
```
switch(action){
  case 'draw':
    drawIt();
    break;
  case 'eat':
    earIt();
    break;
  default:
    doNothing();  
}
```
## 对象 object
简单理解 "名称-值"对，而不是键值对；现在ES 2015的(Map ), 比对象更接近键值对， 联想

+ Python 中的字典(Dictionary)
+ Perl 和 Ruby 中的散列/哈希（Hash）
+ C/C++ 中的散列表( Hash table)
+ Java 中的散列映射表( HashMap)
+ PHP 中的关联数组( Associative Array)

“名称”部分是一个JavaScript字符串, "值"部分可以是任何JavaScript的数据类型---包括对象。

创建空对象
```
var obj = new Object()
var obj = {}; // 对象字面量 ( object literal)
```
Object Literal 用来在对象实例中定义一个对象
```
var obj = {
    name: "Carrot",
    _for: "Max", // 'for' 是保留字之一，使用'_for'代替
    details: {
        color: "orange",
        size: 12
    }
}
```
对象的属性可以通过链式(chain) 表示方法进行访问:
```
obj.details.color;  // orange
obj["details"]["size"]; // 12
```
下面的例子创建了一个对象原型， Person 和这个原型的实例, You。
```
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// 定义一个对象
var You = new Person('You', 24);
```
访问对象和赋值
```
// 点表示法(dot notation)
obj.name = 'Simon';
var name = obj.name;
// 括号表示法
obj['name'] = 'Simon';
var name = obj['name'];
// can use a variable to define a key
var user = prompt('what is your key?')
obj[user] = prompt('what is its value?')
```
ECMAScript2015开始。对象键可以在创建时使用括号表示法由变量定义。
```
{[phoneType]: 12345}

OLD 
var userPhone = {}; userPhone[phoneType] = 12345;
```
## 数组
数组是一种特殊的对象。以数字为属性名，但只能通过[]来访问, 包含一个特俗----length属性,length(长度)属性。这个属性的值通常比数组最大索引大1。
```
传统方式创建数组：
var a = new Array();
a[0] = "a";
a[1] = "b";
a[2] = "c";
a.length;   //3
使用数组字面量(array literal)
var a = ["a", "b", "c"];
a.length;   //3 
```
Array.length 并不是总等于数组中元素的个数,数组的长度是比数组最大索引值多一的数。
```
var a = ["dog", "car", "fish"];
a[100] = "fox";
a.length;   // 101
```
遍历一个数组：
```
for (var i  = 0, i< a.length; i++>){
    //Do something with a[i]
}
ES2015 for...of
for(const currentValue of a){
}
想在数组后追加元素，只需要:
a.push(item)
```

## 函数
```
function add(x, y){
    var total = x + y;
    return total;
}
add(2,3,4); // 5
//将前两个值相加
```
built-in obj arguments()
```
function add() {
    var sum = 0;
    for (var i = 0, j = arguments.length; i < j; i++>){
        sum += arguments[i];
    }
    return sum;
};
add(2,3,4,5); //14

/average
function avg(){
    var sum = 0;
    for (var i=0, j=arguments.length; i < j; i++) {
        sum += arguments[i];
    }
    return sum / arguments.length;
}
avg(2,3,4,5);   // 3.5

用剩余参数来替换arguments的使用
...variable 

function avg(...args){
    var sum = 0;
    for (let value of args) {
        sum += value;
    }
    return sum / args.length;
}

avg(2,3,4,5);   // 3.5

function avgArray(arr) {
    var sum = 0;
    for (var i=0, j=arr.length; i<j; i++){
        sum += arr[i];
    }
    return sum / arr.length;
}
avgArray([2,3,4,5]); // 3.5


avg.apply(null, [2,3,4,5]);     // 3.5

```

## 内部函数
JavaScript 允许在一个函数内部定义函数，这一点我们在之前的 makePerson() 例子中也见过。关于 JavaScript 中的嵌套函数，一个很重要的细节是，它们可以访问父函数作用域中的变量：
```
function parentFunc() {
  var a = 1;

  function nestedFunc() {
    var b = 4; // parentFunc 无法访问 b
    return a + b;
  }
  return nestedFunc(); // 5
}
```
## 闭包
个闭包，就是 一个函数 与其 被创建时所带有的作用域对象 的组合。闭包允许你保存状态——所以，它们可以用来代替对象
```
function makeAdder(a) {
  return function(b) {
    return a + b;
  }
}
var add5 = makeAdder(5);
var add20 = makeAdder(20);
add5(6); // ?
add20(7); // ?

```























