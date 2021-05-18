在 umi中，你可以使用约定式的路由， 在Page下面的JS文件都会按照文件名映射到一个路由。
除了约定式路由，可以使用配置式路由 config/config.js中添加如下配置：
```
export default {
    routes: [{
        path: '/',
        component: './HelloWorld',
    }],
}
```
## 组件是什么？
按照功能划分，一张网页可以由多个互相独立的功能单位组成。这种功能单位就叫做组件（component）。比如，典型的网页分成页头、内容、页尾三个部分, 就可以写成三个组件：Header 、 Content、Footer。这些组件拼装在一起，就构成了一张页面。

组件内部还可以包含下一级组件，比如， “文章”组件内部可以包含“表单”组件，“表单”组件内部又可以包含“按钮”组件。

组件的好处：
有利于细化UI逻辑，不同的组件负责不同的功能点。
有利于代码复用，多个页面可以使用同样的组件。有利于人员分工，不同的工程师负责不同的组件。

React的核心就是组件。
这个框架的主要功能就是定义了一套编写和使用组件的规范。

## JSX语法
JSX可以被Babel 转码器转为正常的 JavaScript语法。
```
export default () => {
    return <div>hello world</div>
}

===
export.default = function () {
    return React.createElement(
        "div",
        null,
        "hello world"
    );
};

```
JSX 语法的特点是，凡是使用JavaScript 的值的地方，都可以插入这种类似HTML的语法。
```
const element = <h1>Hello, world.</h1>
```
注意点：1.所有的HTML标签必须是闭合的，2.任何JSX表达式，顶层只能有一个标签，也就是说只能有一个根元素。

一般来说，HTML原生标签都使用小写，开发者自定义都组件标签首字母大写，比如<MyComponent />。
JSX 允许HTML与js代码混写
```
const element = (
    <h1>
        Hello, {formatName(user)}!
    </h1>
);
```
JSX语法都值都部分，只要使用了大括号{},就表示进入JS都上下文,可以写入JS代码。

```
更正式、更通用都组件写法，使用ES6类（class）的语法。

import React from 'react'

class ShoppingList extends React.Component {
    render() {
        return (
            <div>
                <h1>Shopping List for {this.props.name}</h1>
            </div>
        );
    }
}

export default Content;
```

## 组件的参数
组件内部，所有参数都放在this.props属性上。通过this.props.name就可以直接拿到传入都值。
```
<h1>Shopping List for {this.props.name}</h1>
```
组件的参数
this.props 对象有一个非常特殊的参数this.props.children 表示当前组件“包裹”的所有内容。比如，上面代码里面的Shopping List for {this.props.name}, 就<h1>元素的this.props.children 这个属性意味着组件内部可以拿到，用户在组件里放置的内容。
```
内部使用props.children获取用户传入的内容
const Picture = (props) => {
    return (
        <div>
            <img src={props.src} />
            {props.children}
        </div>
    )
}
向props.chlidren传入内容

render() {
    const picture = {
        src = 'http://adada.com'
    };
    return (
        <div>
            <Picture src={picture.src}>
            // 这里放置的内容就是props.children
            </Picture>
        </div>
    )
}
```
组件的状态
除了接收外部参数，组件的内部状态记录在this.state 这个对象上面。
```
class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };
    }

    render() {
        return (
            <button
                onClick={() => this.setState({value: 'x'})}
            >   
            {this.state.value}
            </button>
        );
    }
}
```
组件Square的构造方法constructor定义了当前状态this.state对象。Square 组件的这个对象只有一个value属性，一开始是null.
用户点击后，onClick 监听函数执行this.setState()方法。React使用这个方法 ，更新this.state对象。这个方法有一个特点，就是每次执行以后，它会自动调用render方法，导致UI 更新。UI里面使用this.state.value，输出状态值。
内部状态用来区分用户是否点击了按钮。

生命周期方法
组件的运行过程中，存在不同的阶段。React为这些阶段提供了钩子方法，允许开发者自定义每个阶段自动执行的函数。这些方法统称为生命周期方法。（lifecycle methods）
```
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }
    componentDidMount(){
        //在组件挂载后自动调用
    }
    componentWillUnmount(){
        //组件卸载前自动调用
    }
    componentDidUpdate() {
        //在UI每次更新后调用（即组件挂载成功后，每次调用render方法都会出发这个方法）
    }

    render() {
        return (
            <div>
                <h2>It is { this.state.date.toLocaleTimeString() }.</h2>
            </div>
        )
    }
}
```
还有三个生命周期方法，不是经常使用
shouuldComponentUpdate(nextProps, nextState): 每当this.props 或this.props或this.state有变化, 在render方法执行之前，就会调用这个方法。该方法返回一个布尔值，表示是否应该继续执行render方法，即如果返回false,UI就不会更新，默认返回True。组件挂载时，render方法的第一次执行。不会调用这个方法。

static getDerivedStateFromProps(props, state): 该方法在render方法执行之前调用，包括组件的第一次记载。它应该返回一个新的state对象，通常用在组件状态以来外部输入的参数的情况。

getSnapshotBeforeUpdate(): 该方法在每次DOM更新之前调用，用来收集DOM信息。它返回的值，将作为参数传入componentDidUpdate()方法。

## 引入 antd
