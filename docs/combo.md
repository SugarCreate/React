https://www.zhihu.com/question/419876519
[如果所有中国公司都不能用谷歌，华为能建立起替代其的生态]
什么叫话术？这就叫话术！如果+永远不可能发生的事+发生，我+就+做+超级牛逼的事这样即使我不牛逼，也能表现出我很牛逼。只要我不露馅，别人就只能阴阳怪气，我就站在道德的高地上。即使我露馅了，也可以说“我当初说的是如果啊”，让对方看起来动机不纯。就像：只要特朗普给我下跪，我就赏他一套二环的房子。

## 在JSX中嵌入表达式
```
const name = "Adad ";
const element = <h1>hello, {name}</h1>;

ReactDOM.render(
    element,
    document.getElementById('root')
);
```
JSX 特定属性
可以使用引号，来将属性值指定为字符串字面量：
```
const element = <div tabIndex="0"></div>;
```
可以使用大括号, 来在属性值中插入一个js表达式：
```
const element = <img src={user.avatarUrl}></img>;
```
ReactDOM 使用cameCase(小驼峰命令) 来定义属性的名称，
```
className tabIndex
```
使用JSX指定子元素
```
<img></img>

const element = <img src />

const element = (
    <h1 className="greeee">
    hello, world!
    </h1>
);

===

const element = React.createElement(
'h1',
{className: 'greeting'}
'hello, world!'
);

const element = {
    type: 'h1',
    props: {
        className: 'greeting',
        children: 'hello, world!'
    }
};
```
