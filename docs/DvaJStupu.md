# 知识地图
## JavaScript 语言
### 变量声明
+ const 和 let  
const 常量, let 变量
都是块级作用域。
```
const DELAY = 1000;
let count = 0;
count = count +1;
```
+ 模板字符串
```
const user = 'world';
console.log(`hello ${user}`); 

// 多行
const content = `
    hello ${firstName},
    Thanks for ordering ${qty} tickets to ${event}.
`
```
+ 默认参数
```
 function logActivity(activity = 'skiing') {
     console.log(activity);
 }
 logActivity(); // skiiing
```
+ 箭头函数
函数的快接写法， 不需要通过 function 关键字创建函数并且还可以省略 return 关键字。
同时，箭头函数还会继承当前上下文的 this 关键字。
比如:
```
[1,2,3].map(x=> x+1); // [2,3,4]

===

[1,2,3].map((function(x){
    return x +1;
}).bind(this));
```
+ 模块的Import 和 Export
import 用于引入模块， export 用于导出模块
```
// 引入全部
import dva from 'dva';

// 引入部分
import { connect } from 'dva';
import {Link, Route } from 'dva/router';

// 引入全部并作为github 对象
import * as github from './services/github'


// 导出默认
export default App;

// 部分导出，需 import { App } from './file'; 引入

export class App extend Component {};

```
+ ES6 对象和数组
 析构赋值
 析构赋值让我们从 Object 或 Array 里取部分值存为变量

 ```
 // 对象 object
 const user = { name: 'guanguan', age:2};
 const {name, age} = user;
 console.log(`${name} : ${age}`);  // guanguan ： 2

 // 数组
const arr = [1, 2];
const [foo, bar] = arr;
console.log(foo); //1

 ```
析构传入函数参数
```
const add = (state, { payload }) => {
    return state.concat( payload)
};

```

析构时可以配 alias ，语义
const add = (state, { payload: todo}) => {
    return state.concat(todo);
};

## React Component
## Reducer
## Effect
## Subscription
## Router
