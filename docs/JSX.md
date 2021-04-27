```
const element = <h1>hello, world!</h1>
```
JSX 可以很好地描述UI应该呈现出应有交互的本质形式。JSX 可以生成React"元素"。

React 渲染逻辑的本质上与其他UI逻辑内在耦合，比如UI中需要绑定处理事件，在某些时刻状态发生改变时需要通知到UI，以及需要在UI中展示准备好的数据。
使用关注点分离，而非文件分离

## 在 JSX 中嵌入表达式 
```
const name = 'Josh Perez';const element = <h1>Hello, {name}</h1>;
ReactDOM.render(
  element,
  document.getElementById('root')
);
```
## JSX 也是一个表达式 
可以在 if 语句和 for 循环的代码块中使用 JSX，将 JSX 赋值给变量，把 JSX 当作参数传入，以及从函数中返回 JSX：
```
function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;  }
  return <h1>Hello, Stranger.</h1>;}
```
## JSX特定属性
使用引号，来将属性值指定为字符串字面量：
```
const element = <div tabIndex="0"></div>
``` 
使用大括号，来在属性值中插入一个 JavaScript 表达式：
```
const element = <img src={user.avaatarUrl}></img>;
```
React DOM 使用 camelCase（小驼峰命名）来定义属性的名称
```
className
```
## 使用 JSX 指定子元素 
假如一个标签里面没有内容，你可以使用 /> 来闭合标签
```
const element = <img src={user.avatarUrl} />;
```
JSX标签里能够包含很多子元素:
```
const element = (
    <div>
    <h1></h1>
    </div>
);

```
## JSX防止注入攻击
```
const title = response.potentiallyMaliciousInput;
// 直接使用是安全的：
const element = <h1>{title}</h1>;
```
## JSX 表示对象
```
const element = (
    <h1></h1>
);
===
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);

// 简化结构
const element = {
    type: 'h1'，
    props: {
        className：'adada';
        children: 'Hello, world'
    }
};
```