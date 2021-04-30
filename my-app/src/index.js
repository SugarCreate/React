import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


//1 init |2 通过props传递数据, 将数据从Board 传递到 Square 组件中。在Board组件的renderSquare方法中，传递一个名为value的prop 到Square中：|3 给组件添加交互功能，点击格子就会出现一个弹出提示框

//  父组件传递给子组件 this.props.value

// Structs Game/Board/Square

class Square extends React.Component {
  render() {
    return(
      <button className="square">
        {this.props.value}
      </button>
    );
  }
}


class Board extends React.Component{
  renderSquare(i) {
    return <Square value={i}/>;
  }

  render() {
    const status = 'Next play: X'

    return(
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
        {this.renderSquare(0)}
        {this.renderSquare(1)}
        {this.renderSquare(2)}
        </div>
        <div className="board-row">
        {this.renderSquare(3)}
        {this.renderSquare(4)}
        {this.renderSquare(5)}
        </div>
        <div className="board-row">
        {this.renderSquare(6)}
        {this.renderSquare(7)}
        {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}


class Game extends React.Component {
  render() {
    return(
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{ /* status */ }</div>
          <ol>{ /* \TODO */ }</ol>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <Game />,
  document.getElementById('root')
)

// // 从Calculator 组件中抽离出 Temperature组件，然后为其添加一个新的scale prop ,它可以是 'c' 或者 "f"

// function toCelsius(fahrenheit) {
//   return (fahrenheit - 32) * 5 / 9;
// }

// function toFahrenheit(celsius) {
//   return (celsius *9 / 5) + 32;
// }

// // 我们将编写另一个函数，它接受字符串类型的 temperature 和转换函数作为参数并返回一个字符串。我们将使用它来依据一个输入框的值计算出另一个输入框的值。当输入 temperature 的值无效时，函数返回空字符串，反之，则返回保留三位小数并四舍五入后的转换结果：
// // 例如，tryConvert('abc', toCelsius) 返回一个空字符串，而 tryConvert('10.22', toFahrenheit) 返回 '50.396'。
// function tryConvert(temperature, convert) {
//   const input = parseFloat(temperature);
//   if(Number.isNaN(input)) {
//     return '';
//   }
//   const output = convert(input);
//   const rounded = Math.round(output * 1000) / 1000;
//   return rounded.toString();
// }


// const scaleNames = {
//   c: 'Celsius',
//   f: 'Fahrenheit'
// };

// class TemperatureInput extends React.Component {
//   constructor(props) {
//     super(props);
//     this.hadleChange = this.hadleChange.bind(this);
//     this.state = {temperature: ''};
//   }

//   hadleChange(e) {
//     this.setState({temperature: e.target.value});
//   }

//   render() {

//     const temperature = this.state.temperature;
//     const scale = this.props.scale;

//     return(
//       <fieldset>
//         <legend>Enter temperature in {scaleNames[scale]}:</legend>
//         <input 
//           value = {temperature}
//           onChange = {this.hadleChange}
//         />
//       </fieldset>
//     )
//   }
// }

// class Calculator extends React.Component {
//   render() {
//     return (
//       <div>
//         <TemperatureInput scale='c' />
//         <TemperatureInput scale='f' />
//       </div>
//     );
//   }
// }





// // BoilingVerdict 组件接受 celsius 温度作为一个 prop，并据此打印出该温度是否足以将水煮沸的结果。
// function BoilingVerdict(props) {
//   if (props.celsius >= 100 ) {
//     return <p>The water would boil.</p>;
//   }
//   return <p>The water would not boil.</p>;
// }

// // Calculator 组件 渲染一个用于用户输入温度的<input> ,并将值保存在 this.state.temperature中另外根据输入值渲染BoilingVerdict组件。
// class Calculator extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleChange = this.handleChange.bind(this);
//     this.state = {temperature: ''};
//   }

//   handleChange(e) {
//     this.setState({temperature: e.target.value});
//   }
//   render() {
//     const temperature = this.state.temperature;
//     return (
//       <fieldset>
//       <legend>Enter temperature in Celsius;</legend>
//         <input 
//           value={temperature}
//           onChange={this.handleChange}
//         />
//         <BoilingVerdict />
//       </fieldset>
//     )
//   }
// }

// ReactDOM.render(
//   <Calculator />,
//   document.getElementById('root')
// )








// class Reservation extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isGoing: false,
//       numberOfGuests: 3
//     };

//     this.handleInputChange = this.handleInputChange.bind(this);
//   }


//   handleInputChange(event) {
//     const target = event.target;
//     const value = target.name === 'isGoing' ? target.checked : target.value;
//     const name = target.name;

//     this.setState({
//       [name]: value
//     });
//   }

//   render() {
//     return (
//       <form>
//         <label>
//             参与：
//           <input
//             name="isGoing"
//             type="checkbox"
//             checked={this.state.isGoing}
//             onChange={this.handleInputChange}
//           />
//         <br />
//         </label>
//         <label>
//           来宾人数：
//           <input
//             name="numberOfGuests"
//             type="number"
//             value={this.state.numberOfGuests}
//             onChange={this.handleInputChange}
//             />
//         </label>
//       </form>
//     )
//   }
// }

// ReactDOM.render(
//   <Reservation />,
//   document.getElementById('root')
// )
// class FlavorForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {value:'cocount'};

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit =  this.handleSubmit.bind(this);
//   }

//   handleSubmit(event) {
//     alert('你喜欢的风味是：' + this.state.value);
//     event.preventDefault();
//   }

//   handleChange(event) {
//     this.setState({value: event.target.value});
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           你喜欢的风味：
//           <select value={this.handleSubmit} onChange={this.handleChange}>
//             <option value="grapefruit">葡萄柚</option>
//             <option>suancheng</option>
//             <option>芒果</option>
//             <option>椰子</option>
//           </select>
//         </label>
//         <input type="submit" value="提交"></input>
//       </form>
//     )
//   }
// }

// ReactDOM.render(
//   <FlavorForm />,
//   document.getElementById('root'),
// )

// import App from './App';
// import reportWebVitals from './reportWebVitals';

// class NameForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {value: ''};

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({value: event.target.value});
//   }

//   handleSubmit(event) {
//     alert('A name was submitted: ' + this.state.value);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Name:
//           <input type="text" value={this.state.value} onChange={this.handleChange} />
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// }

// class EssayForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {      value: '请撰写一篇关于你喜欢的 DOM 元素的文章.'    };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {    this.setState({value: event.target.value});  }
//   handleSubmit(event) {
//     alert('提交的文章: ' + this.state.value);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           文章:
//           <textarea value={this.state.value} onChange={this.handleChange} />        </label>
//         <input type="submit" value="提交" />
//       </form>
//     );
//   }
// }


// ReactDOM.render(
//   // <NameForm />,
//   <EssayForm />,
//   document.getElementById('root')
// );
//  TODO 2021-04-29 17:58:49  多个组件如何利用ReactDOM.render()渲染？


// function NumberList(props) {
//   const numbers = props.numbers;
//   return(
//     <url>
//       {numbers.map((number) => 
//         <ListItem 
//           key={number.toString()}
//           value={number}
//         />
//       )}
//     </url>
//   );
// };

// function NumberList(props) {
//   const numbers = props.numbers;
//   const listItems = numbers.map((number) =>{
//     <ListItem key={number.toString()} value={number} />
//   });

//   return (
//     <ul>
//       {listItems}
//     </ul>
//   );
// }

// function Blog(props) {
//   const sidebar =(
//     <ul>
//       {props.posts.map((post) => 
//         <li key={post.id}>
//           {post.title}
//         </li>
//       )}
//     </ul>
//   );

//   const content = props.posts.map((post) => 
//     <div key={post.id}>
//       <h3>{post.title}</h3>
//       <p>{post.content}</p>
//     </div>
//   );

//   return(
//     <div>
//       {sidebar}
//       <hr />    
//       {content}   
//     </div>
//   );
// }

// const posts = [
//   {id:1, title: 'hello world', content: 'Welcome to learning React!'},
//   {id:2, title: 'Installation', content: 'You can install React from npm.'},
// ];

// ReactDOM.render(
//   <Blog posts={posts} />,
//   document.getElementById('root')
// );

// function NumberList(props) {
//   const numbers = props.numbers;
//   const listItems = numbers.map((number) => 
//     <li key={number.toString()}>
//       {number}
//     </li>
//   );
//   return(
//     <ul>{listItems}</ul>
//   );
// }

// const numbers = [1,2,3,4,5];

// ReactDOM.render(
//   <NumberList numbers={numbers} />,
//   document.getElementById('root')
// )

// const numbers = [1,2,3,4,5];
// const listItems = numbers.map((number) => <li>{number}</li>);
// ReactDOM.render(
//   <ul>{number}</ul>,
//   document.getElementById('root')
// )

// WarningBanner
// Page
// function WarningBanner(props) {
//   if (!props.warn) { //2021-04-29 14:31:37 !在条件语句中什么含义
//     return null;
//   }

//   return (
//     <div className="warning">
//       Warning! 
//     </div>
//   )
// }

// class Page extends React.Component {
//   constructor(props) {
//     super(props); //2021-04-29 14:29:05 constructor函数中的super()作用是什么?
//     this.state = {showWarning: true};
//     this.handleToggleClick = this.handleToggleClick.bind(this);
//   }

//   handleToggleClick() {
//     this.setState(state => ({
//       showWarning: !state.showWarning
//     }));
//   }

//   render(){
//     return(
//       <div>
//         <WarningBanner warn={this.state.showWarning} />
//         <button onClick={this.handleToggleClick}>
//           {this.state.showWarning ? 'Hide': 'Show'}
//         </button>
//       </div>
//     );
//   }
// }
// // DOMs
// ReactDOM.render(
//   <Page />,
//   document.getElementById('root')
// )

// function Mailbox(prosp) {
//   const unreadMessages = props.unreadMessages;
//   return(
//     <div>
//       <h1>Hello</h1>
//       <h2>
//         You have {unreadMessages.length} unread messages.
//       </h2>
//     </div>
//   )
// }

// const messages = ['React', 'Re: React', 'Re:Re:React'];
// ReactDOM.render(
//   <Mailbox unreadMessages={messages} />,
//   document.getElementById('root')
// )

// function UserGreeting(props) {
//   return <h1>Welcome back!</h1>;
// }

// function GuestGreeting(props) {
//   return <h1>Please sign up.</h1>;
// }

// function Greeting(props) {
//   const isLoggedIn = props.isLoggedIn;
//   if (isLoggedIn) {
//     return <UserGreeting />;
//   }
//   return <GuestGreeting />;
// }

// function LoginButton(props) {
//   return(
//    <button onClick={props.onClick}> 
//      login 
//    </button> 
//   );
// }

// function LogoutButton(props) {
//   return (
//    <button onClick={props.onClick}>
//      logout
//    </button> 
//   );
// }

// // 有状态组件 LoginControl
// // 它根据当前的状态来渲染<LoginButton /> 或者<LogoutButton /> 同时渲染上一个示例中的<Greeting />

// class LoginControl extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleLoginClick = this.handleLoginClick.bind(this);
//     this.handleLogoutClick = this.handleLogoutClick.bind(this);
//     this.state = {isLoggedIn: false};
//   }

//   handleLogoutClick() {
//     this.setState({ isLoggedIn: false});
//   }

//   handleLoginClick() {
//     this.setState({ isLoggedIn: true});
//   }


//   render() {
//     const isLoggedIn = this.state.isLoggedIn;
//     let button;
//     if (isLoggedIn) {
//       button = <LogoutButton onClick={this.handleLogoutClick} />
//     } else {
//       button = <LoginButton onClick={this.handleLoginClick} />
//     }

//     return(
//       <div>
//         <Greeting isLoggedIn={isLoggedIn} />
//         {button}
//       </div>
//     );
//   }
// }

// ReactDOM.render(
//   <LoginControl />,
//   document.getElementById('root')
// );

// 2021-04-29 10:51:34 到底什么是ReactDOM, DOM根节点是什么







// function UserGreeting(props) {
//   return <h1>Welcome back!</h1>;
// }

// function GuestGreeting(props) {
//   return <h1>Please sign up.</h1>;
// }

// function Greeting(props) {
//   const isLoggedIn = props.isLoggedIn;
//   if (isLoggedIn) {
//     return <UserGreeting />;
//   }
//   return <GuestGreeting />;
// }

// ReactDOM.render(
//   <Greeting isLoggedIn={false} />,
//   document.getElementById('root')
// );

/* <button onClick={(e) => this.deleteRow(id, e)}>
  Delete Row
</button>

<button onClick={this.deleteRow.bind(this, id)}>
  Delete Row
</button> */

// class LoggingButton extends React.Component {
//   handleClick(){
//     console.log('this is:', this);
//   }
  
//   render(){
//     // 此语法确保 `handleClick` 内的 `this` 已被绑定。
//     return(
//       <button onClick={() => this.handleClick()}>
//       Click me
//       </button>
//     );
//   }
// }

// class Toggle extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {isToggleOn: true};

//     // this.handleClick.bind(this);

//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick(){
//     this.setState(state => ({
//       isToggleOn: !state.isToggleOn
//     }));
//   }

//   render() {
//     return(
//       <button onClick={this.handleClick}>
//         {this.state.isToggleOn ? 'ON' : 'OFF'}
//       </button>
//     );
//   }
// }



// function ActionLink() {
//   function handleClick(e) {
//     e.prevenDefault();
//     console.log("The link was clicked.")
//   }
//   return (  
//     <a href="#" onClick={handleClick}>
//       Click me
//     </a>
//   );
// }

// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {date: new Date()};
//   }

//   //mountcomponentDidMount() 方法会在组件已经被渲染到 DOM 中后运行，所以，最好在这里设置计时器：
//   componentDidMount(){
//     this.timerID = setInterval(
//       () => this.tick(),
//       1000
//     );
//   }
//   //unmount
//   componentWillUnmount(){
//     clearInterval(this.timerID);
//   }

//   tick() {
//     this.setState({
//       date: new Date()
//     });
//   }

//   render(){
//     return(
//       <div>
//         <h2>现在是 {this.state.date.toLocaleTimeString()}.</h2>
//       </div>
//     );
//   }
// }

// ReactDOM.render(
//   <Clock />,
//   document.getElementById('root')
// );


// class Clock extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
//       </div>
//     );
//   }
// }


// function Clock(props) {
//   return(
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {props.date.toLocaleTimeString()}.</h2>
//     </div>
//   )
// }

// function tick() {
//   ReactDOM.render(
//     <Clock date={new Date()} />,
//     document.getElementById('root')
//   );
// }

// setInterval(tick, 1000);


// tick()
// function tick(){
//   const element = (
//     <div>
//     <h1>Hello, world</h1>
//     <h2>It is {new Date().toLocaleTimeString()}.</h2>
//   </div>
//   );
//   ReactDOM.render(element, document.getElementById('root'));
// }

// function Welcome(props) {
//   return <h1>hello, {props.name}</h1>;
// }

// function App() {
//   return (
//     <div>
//       <Welcome name="Sara" />
//       <Welcome name="LiuXin"/>
//     </div>
//   );
// }

// ReactDOM.render(
//   <App />,
//   // <LoggingButton />,
//   // <Toggle />,
//   document.getElementById('root')
// );

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// setInterval(tick, 1000)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
