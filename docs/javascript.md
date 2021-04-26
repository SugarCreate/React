# Overview
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
parseInt("")
```
TODO Mon Apr 26 2021 11:31:05