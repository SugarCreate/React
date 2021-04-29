元素渲染
元素构成React 应用的最小砖块
元素描述了你在屏幕上想看的内容。
```
const element = <h1>hello, world </h1>
```
将一个元素渲染为DOM
假设你的HTML文件某处有一个<div>:
```
<div id="root"></div>
```
想要将一个 React 元素渲染到根 DOM 节点中，只需把它们一起传入 ReactDOM.render()
```
const elelment = <h1>Hello, world</h1>;
ReactDOM.render(element, document.getElementById('root'));
```
React元素是不可变对象。一旦被创建 ，就无法更改它的子元素或属性。一个元素就像电影的单帧：它代表了某个特定时刻的UI
```
function tick(){
    const element = (
        <div>
          <h1>hello</h1>
          <h2>It is {}
        </div>
    );
    ReactDOM.render(element, document.getElementById('root'));
}
setInterval(tick, 1000)
```
## 组件 & Props
组件，类似于JavaScript函数。它接受任意的入参(即, 'prpos'), 并返回用于描述页面展示内容的React元素。

### 函数组件与Class组件
最简单的方式: 编写JavaScript函数：
```
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

===

ES6

class Welcome extends React.Component {
  render(){
    return <h1>Hello, {this.props.name}</h1>
  }
}
```
渲染组件
```
DOM 标签

const element = <div />


React 元素可以是用户自定义的组件：

const element = <Welcome name="Sara" />;
 
```
当 React 元素为用户自定义组件时，它会将 JSX 所接收的属性（attributes）以及子组件（children）转换为单个对象传递给组件，这个对象被称之为 “props”。

```
function Welcome(props) {
  return <h1> Helo, {props.name}</h1>;
}

const element = <Welcome name="Sara" />;
ReactDOM.render(
  element,
  document.getElementById('root')
)

```
1. 我们调用 ReactDOM.render() 函数，并传入 \<Welcome name="Sara" /> 作为参数。
2. React 调用 Welcome 组件，并将 {name: 'Sara'} 作为 props 传入。
3. Welcome 组件将 \<h1>Hello, Sara</h1> 元素作为返回值。
4. React DOM 将 DOM 高效地更新为 \<h1>Hello, Sara</h1>。

潜规则:  
React会将以小写字母开头的组件视为原生DOM标签，例如\<div />表示一个HTML的div标签，而\<Welcome />则代表一个组件，并且需要在作用域内使用Welcome。

### 组合组件
组件可以在其输出中引用其他组件。这就可以让我们用同一组组件来抽象出任意层次的细节。 按钮, 表单, 对话框, 甚至整个屏幕的内容。
例子： 我们可以创建一个可以多次渲染Welcome组件的App组件：
```

```
### Props的只读性
组件无论是使用函数声明还是通过class声明，都不能修改自身的props。
```
function  sum(a, b){
  return a + b;
}
```
纯函数，该函数不会尝试更改入参，且多次调用下相同的入参始终会返回相同的结果。
```
function withdraw(account, amount) {
  account.total -= amount;
}
```
React 有一个严格的规则：
所有组件都必须像纯函数一样保护它们的props不被更改。

应用程序的UI是动态的, 并会伴随着时间的推移而变化。这是就需要使用 "state",一种允许React 组件随用户操作、网络响应或者其他变化而更改输出内容。

### State  和 生命周期
State 与 props 类似，但是 state 是私有的，并且完全受控于当前组件。
#### 将函数组件转换成class 组件
1. 创建一个同名的ES6 class, 并且继承于React.Component。
2. 添加一个空的render()方法。
3. 将函数体移动到 render()方法之中。
4. 在 render() 方法中使用 this.props 替换 props.
5. 删除剩余的空函数声明。
```
class Clock extends React.Component {
  render() {
    return (
      <div>
      <h1>Hello, world!</h1>
      <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
      </div>
    )
  }
}

```
现在 Clock 组件被定义为 class，而不是函数。

每次组件更新时 render 方法都会被调用，但只要在相同的 DOM 节点中渲染 \<Clock /> ，就仅有一个 Clock 组件的 class 实例被创建使用。这就使得我们可以使用如 state 或生命周期方法等很多其他特性。

### 向class 组件中添加局部的state
1. render()方法中的this.props.date 替换成 this.state.date:
```
class Clock extends React.Component {
  render(){
    return(
      <div>
        <h1></h1>
        <h2>It is {this.state.date.toLcoalTimeString()}.</h2>
      </div>
    )
  }
}
```
2. 添加一个函数class 构造函数, 然后在该函数中为this.state赋初值。

constructor方法是一个特殊的方法，这种方法用于创建和初始化一个由class创建的对象。一个类只能拥有一个名为 “constructor”的特殊方法。如果类包含多个constructor的方法，则将抛出 一个SyntaxError 。

一个构造函数可以使用 super 关键字来调用一个父类的构造函数。
```
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  render(){
    return (
      <div>
        <h2>It is {this.state.date.toLocalTimeString()}.</h2>
      </div>
    )
  }
}
```
3. 移除<Clock />元素中的date属性：
```
ReactDOM.render(
<Clock />,
document.getElementById('root')
);
```
```
class Clock extends React.Component {
  constructor(props) {    super(props);    this.state = {date: new Date()};  }
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>      </div>
    );
  }
}

ReactDOM.render(
  <Clock />,  document.getElementById('root')
);
```

### 将生命周期方法添加到class 中
在具有许多组件的应用程序中， 当组件被销毁时释放占用的资源是非常重要的。
当Clock 组件第一次被渲染到DOM中的时候，就为其设置一个计时器，在React中被称为“挂载(mount)”
同时,当DOM中的Clock组件被删除时，应该清除计时器。在React中被称为“卸载(unmount)”
```
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {    this.setState({      date: new Date()    });  }
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);
```

    当 <Clock /> 被传给 ReactDOM.render()的时候，React 会调用 Clock 组件的构造函数。因为 Clock 需要显示当前的时间，所以它会用一个包含当前时间的对象来初始化 this.state。我们会在之后更新 state。
    之后 React 会调用组件的 render() 方法。这就是 React 确定该在页面上展示什么的方式。然后 React 更新 DOM 来匹配 Clock 渲染的输出。
    当 Clock 的输出被插入到 DOM 中后，React 就会调用 ComponentDidMount() 生命周期方法。在这个方法中，Clock 组件向浏览器请求设置一个计时器来每秒调用一次组件的 tick() 方法。
    浏览器每秒都会调用一次 tick() 方法。 在这方法之中，Clock 组件会通过调用 setState() 来计划进行一次 UI 更新。得益于 setState() 的调用，React 能够知道 state 已经改变了，然后会重新调用 render() 方法来确定页面上该显示什么。这一次，render() 方法中的 this.state.date 就不一样了，如此以来就会渲染输出更新过的时间。React 也会相应的更新 DOM。
    一旦 Clock 组件从 DOM 中被移除，React 就会调用 componentWillUnmount() 生命周期方法，这样计时器就停止了。

### 正确使用State
关于State的三件事

1. 不要直接修改State，用setState():构造函数是唯一可以给 this.state 赋值的地方
```
//Wrong
this.state.comment = 'Hello';

// Correct
this.setState({comment: 'hello'});
```
2. State 的更新可能是异步的
this.props 和 this.state 可能会异步更新，所以你不要依赖他们的值来更新下一个状态。
```
// Worong 
this.setState({
  counter: this.state.counter + this.props.icrement,
})
```
要解决这个问题，可以让 setState() 接收一个函数而不是一个对象。这个函数用上一个 state 作为第一个参数，将此次更新被应用时的 props 做为第二个参数：
```
this.setState((state, props) =>({
  counter: state.counter + props.increment
}));

this.setState(function(state, props) {
  return {
    counter: state.counter + props.increment
  };
})
```
3. state 的更新会被合并
当你调用 setState() 的时候，React 会把你提供的对象合并到当前的 state。
```
constructor(props) {
  super(props);
  this.state = {
    posts: [],
    comments: []
  };
}

```
可以分别调用 setState() 来单独地更新它们：
```
  componentDidMount() {
    fetchPosts().then(response => {
      this.setState({
        posts: response.posts      });
    });

    fetchComments().then(response => {
      this.setState({
        comments: response.comments      });
    });
  }
```
这里的合并是浅合并，所以 this.setState({comments}) 完整保留了 this.state.posts， 但是完全替换了 this.state.comments

## 数据是向下流动的

不管是父组件或是子组件都无法知道某个组件是有状态的还是无状态的，并且它们也并不关心它是函数组件还是 class 组件。

这就是为什么称 state 为局部的或是封装的的原因。除了拥有并设置了它的组件，其他组件都无法访问。

组件可以选择把它的 state 作为 props 向下传递到它的子组件中：
```
<FormattedDate date={this.state.date} />
```
FormattedDate 组件会在其 props 中接收参数 date，但是组件本身无法知道它是来自于 Clock 的 state，或是 Clock 的 props，还是手动输入的：
```
function FormattedDate(props) {
  return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}
```

## 事件处理
+ React事件的命名采用小驼峰(cameCase),而不是纯小写
+ 使用JSX语法时你需要传入一个函数作为事件处理函数，而不是字符串。
例如传统的HTML
```
<button onclick="activateLasers()"> balabala </button>
```
In React
```
<button onClick={activateLasers}> balabala </button>
```
另一个不同点，不能通过返回 false 的方式阻止默认行为。必须显示的使用 preventDefault
例如传统HTML中阻止链接默认打开一个新页面
传统的HTML中阻止链接默认打开一个新页面,
```
< a href="#" onclick="console.log('The link was clicked.'); return false">Clcik me</a>
```
In React 
```
function ActionLink(){
  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.')
  }

  return (
    <a href="#" onClick={handleClick}>
      Click me
    </a>
  );
}
```
e 是一个合成事件。

当使用ES6 class 语法定义一个组件的时候，通常将事件处理函数声明为class中的方法。 例如
```
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // this.handleClick.bind(this);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return(
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

```
JSX 回调函数中的this, 使用bind很麻烦，另外两种方式, [Function.prototype.bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind)和使用[箭头函数](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
```
class LoggingButton ext
```

## 向事件处理程序传递参数
在循环中，通常我们会为事件处理函数传递额外的参数。例如，若id 是你要删除的哪一行的ID。
React 的事件对象 e 会被作为第二个参数传递。如果通过箭头函数的方式，事件对象必须显式的进行传递，而通过 bind 的方式，事件对象以及更多的参数将会被隐式的进行传递。
```
箭头函数
<button onClick={(e) => this.deleteRow(id, e)}>
  Delete Row
</button>

function.prototype.bind

<button onClick={this.deleteRow.bind(this, id)}>
  Delete Row
</button>

```

TODO 2021-04-28 14:35:07 什么是事件对象显示的传递和隐式的传递???

## 条件渲染
在React中, 你可以创建不同的组件来封装各种你需要的行为。然后，依据引用的不同状态，可以只渲染对应状态下的部分内容

```
function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

ReactDOM.render(
  <Greeting isLoggedIn={false} />,
  document.getElementById('root')
);
```

React 中的条件渲染和 JavaScript 中的一样，使用 JavaScript 运算符 if 或者条件运算符去创建元素来表现当前的状态，然后让 React 根据它们来更新 UI。
### 元素变量
可以使用变量来存储,有条件的渲染组件的一部分。
```

function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

function LoginButton(props) {
  return(
   <button onClick={props.onClick}> 
     login 
   </button> 
  );
}

function LogoutButton(props) {
  return (
   <button onClick={props.onClick}>
     logout
   </button> 
  );
}

// 有状态组件 LoginControl
// 它根据当前的状态来渲染<LoginButton /> 或者<LogoutButton /> 同时渲染上一个示例中的<Greeting />

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: false});
  }

  handleLoginClick() {
    this.setState({ isLoggedIn: true});
  }


  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />
    }

    return(
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

ReactDOM.render(
  <LoginControl />,
  document.getElementById('root')
);
```
### In JSX中的内联条件渲染方法
#### 与运算符 &&
通过花括号包裹代码，可以在JSX中嵌入任何表达式。这也包括JavaScript中的逻辑与(&&)运算符。
```
function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 &&
        <h2>
          You have {unreadMessages.length} unread messages.
        </h2>
      }
    </div>
  );
}

const messages = ['React', 'Re: React', 'Re:Re: React','adda'];
ReactDOM.render(
  <Mailbox unreadMessages={messages} />,
  document.getElementById('root')
);
```
在 JavaScript 中，true && expression 总是会返回 expression, 而 false && expression 总是会返回 false。

因此，如果条件是 true，&& 右侧的元素就会被渲染，如果是 false，React 会忽略并跳过它。

#### 三目运算
condition ? true: false。
```
render(){
  return(
    <div>
      The use is <b>{isLoggedIn ? 'currently': 'not'}</b> logged in.
    </div>

    <div>
    {isLoggedIn
    ? <LogoutButton onClick={this.handleLogoutClick} />
    : <LoginButton onClick={this.handleLoginClick} />
    }
    </div>
  );
}
```
#### 阻止组件渲染
在极少数情况下，可能希望能隐藏组件,即使它已被其他组件渲染。可以直接
让render 方法返回 null
```
function WarningBanner(props) {
  if (!props.warn) { //2021-04-29 14:31:37 !在条件语句中什么含义
    return null;
  }

  return (
    <div className="warning">
      Warning! 
    </div>
  )
}

class Page extends React.Component {
  constructor(props) {
    super(props); //2021-04-29 14:29:05 constructor函数中的super()作用是什么?
    this.state = {showWarning: true};
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(state => ({
      showWarning: !state.showWarning
    }));
  }

  render(){
    return(
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Hide': 'Show'}
        </button>
      </div>
    );
  }
}
// DOMs
ReactDOM.render(
  <Page />,
  document.getElementById('root')
)
```

## 列表 && Key









