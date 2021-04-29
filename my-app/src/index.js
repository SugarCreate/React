import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

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
