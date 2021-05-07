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
```
const add = (state, { payload: todo}) => {
    return state.concat(todo);
};
```

对字面量改进
析构的反向操作，用于重新组织一个 Object
```
   const name = 'duoduo';
   const age = 8;
   const user = {name, age};
   // {name: 'duoduo', age: 8};
```

定义对象方法时, 还可以省去 function 关键字
```
app.model({
    reducers: {
        add () {} // === add: function() {}
    },
    effects: {
        *addRemote() {} // === addRemote: function*()
    },
});
```

Spread Operator
... 
用于组装数组
```
const todos = ['Learn dva'];
[...todos, 'Learn antd']; // ['Learn dva', 'Learn antd']
```
获取数组部分项
```
const arr = ['a', 'b', 'c'];
const [first, ...rest] = arr;
rest; // ['b', 'c']

//With ignore
const [first, , ...rest] = arr;
rest; // ['c']
```

收集函数参数为数组
```
function directions(first, ...rest) {
    cosole.log(rest);
}
directions('a', 'b', 'c'); // ['b', 'c'];
```

代替apply
```
function foo(x, y, z) {}
const args = [1,2,3];

foo.apply(null, args);
foo(...args);
```
对于Object而言, 用于组合成新的 Object。 (ES2017 stage-2 proposal)
```
const foo = {
    a: 1,
    b: 2,
};

const bar = {
    b: 3,
    c: 2,
};

const d = 4;

const ret = {...foo, ...bar, d};

// {a:1, b:3, c:2, d:4}

```
在JSX中, Spread Operator 还可以用于扩展props , 
[Spread Attributes](https://dvajs.com/knowledgemap/#spread-attributes)。
+ Promises
用于更优雅地处理异步请求。比如发起异步请求：
```
fetch('/api/todos')
    .then(res => res.json())
    .then(data => ({ data }))
    .catch(err => ({ err }));
```
定义 Promise。
```
const delay = (timeout) => {
    return new Promise(resolve => {
        setTimeout(resolve, timeout);
    });
};

delay(1000).then(_ => {
    console.log('executed');
});

```
+ Generators
dva的 effects 是通过generator 组织的。 Generator 返回的是迭代器，通过 yield关键字实现暂停功能。
典型的dva effect, 通过 yield 把异步逻辑通过 同步的方式组织起来。
```
app.model({
    namespace: 'todos',
    effects: {
        *addRemote({ payload: todo }, { put, call }) {
            yield call(addTodo, todo);
            yield put({ type: 'add', payload: todo });
        },
    },
});
```
## React Component
Stateless Function Components
React Component 有3种定义方式： React.createClass, class 和 Stateless Function Components
特点：简洁和无状态。这是函数，不是Object, 没有 this 作用域, 是 pure function

定义App Component
```
function App(props) {
    fuction handleClick(){
        props.dispatch({ type: 'app/create' });
    }

    return <div onClick={handleClick}>${props.name}</div>
}

class App extends React.Component {
    handleClick() {
        this.props.dispatch({  type: 'app/create' });
    }

    render() {
        return <div onClick={this.handleClick.bind(this)}>${props.name}</div>
    }
}
```

JSX 
Component 嵌套
类似HTML, JSX里可以给组件添加子组件。
```
<App>
    <Header />
    <MainContent />
    <Footer />
</App>
```
className 
class 是保留词，所以添加样式时，需要 className代替clas
```
<h1 className="fancy">Hello dva</h1>
```
Javascript 表达式
JavaScript表达式需要用 {} 括起来，会执行并返回结果.
```
<h1>{ this.props.title }</h1>
```
Mapping Arrays to JSX
可以把数组映射为JSX 元素列表
```
<ul>
  {this.props.todos.map((todo, i) => <li key={i}>{todo}</li>)}
</ul>
```
Spread Attributes 
```
const attrs = {
    href: 'http://example.org',
    target: '_blank',
};
<a {...attrs}>Hello</a>
===
const attrs = {
    href: 'http://example.org',
    target:'_blank',
};
<a href={attrs.href} target={attrs.target}>Hello</a>

```
+ Props
可以通过props, state和 context 来处理数据。在dva中, 只需要关心 props。

propTypes
JavaScript 是弱类型语言，所以尽量声明 propTypes 对 props进行校验
```
function App(props) {
    return <div>{props.name}</div>;
}

App.propTypes = {
    name: React.PropType.string.isRequired,
};

内置 prop type有：
PropTypes.array
PropTypes.bool
PropTypes.func
PropTypes.number
PropTypes.object
PropTypes.string

```
往下传数据
<img src='https://zos.alipayobjects.com/rmsportal/NAzeMyUoPMqxfRv.png'>
往上传数据
<img src='https://zos.alipayobjects.com/rmsportal/fiKKgDGuEJfSvxv.png'>

css/less 文件里写 .button {...}
并在组件里 styles.button
```
<button className={styles.button}>
```
## Reducer
reducer 是一个函数， 接收 state 和 action, 返回老的或新的state。
即： (state, action) => state
增删改
```
export default {

    namespace: 'todos',

    state: [],
    reducers: {
        add(state, {payload: todo }) {
            return state.concat(todo);
        },
        remove(state, { payload: id}) {
            return state.filter(todo => todo.id !== id);
        },
        update(state, { payload: updateTodo }){
            return state.map(todo => {
                if (todo.id === updateTodo.id) {
                    return {...todo, ...updateTodo };
                } else {
                    return todo
                }
            });
        },
    },
};
```
## Effect
```
app.model({
    namespace: 'todos',
    effects: {
        *addRemote({ payload: todo }, {put, call}) {
            yield call(addTodo, todo);
            yield put({type: 'add', payload：todo });
        },
    },
});
```
Effects
put
用于触发action
```
yield put({ type：'todos/add', payload: 'Learn Dva'});
```
call
用于调用异步逻辑,支持promise。
```
const result = yield call(fetch, '/todos');
```
select 
用于从state里获取数据
```
const todos = yield select(state => state.todos);
```
错误处理
全局错误处理
dva里，effects和subscriptions 的抛错全部会走 onError hook, 可以在 onError里统一处理错误。然后在effects里的抛错和reject的promise就都会捕获到了。
```
const app = dva({
    onError(e, dispatch) {
        console.log(e.message);
    },
});
```
本地错误处理
如果需要对某些effects的错误进行特殊处理，需要在effect内部加 try catch
```
app.model({
    effects: {
        *addRemote(){
            try {
                // Code Here
            } catch(e) {
                console.log(e.message);
            }
        }
    }
});
```
异步请求
基于wahtwg-fetch
GET 和 POST
```
import request from '../util/request';
// GET 
request('/api/todos');

// POST
request('/api/todos', {
    method: 'POST',
    body: JSON.stringify({ a: 1 }),
});
```
统一错误处理
```
{
    status： 'error',
    message: '',
}
```
编辑 utils/request.js, 加入以下中间件
```
function parseErrorMessage({ data }) {
    const { status, message } = data;
    if ( status === 'error'){
        throw new Error(message);
    }

    return { data };
}
```
这类错误就会走到 onError hook里
<!-- TODO 2021-05-07 14:07:03 什么是 onError 的hook? -->
## Subscription

subscription 是订阅， 用于订阅一个数据源, 然后根据需要去 dispatch 响应的 action。 数据源可以是当前的时间、服务器的 websocket连接，keyboard 输入、geolocation变换、history路由变化等等。
格式 ({ dispatch, history }) => unsubscribe 。

异步数据初始化
当用户进入 /users 页面时，触发 action users/fetch 加载用户数据
```
app.model({
    subscriptions: {
        setup({ dispatch, history }) {
            history.listen({ pathname }) => {
                if (pathname === '/users') {
                    dispatch({
                        type: 'users/fetch',
                    });
                },
            },
        },
    },
});
```

如果url规则比较复杂, 比如 /users/:userId/search, 那么匹配和userId的部分获取会比较麻烦。这时候推荐使用 [path-to-regexp](https://github.com/pillarjs/path-to-regexp)
```
import pathToRegexp from 'path-to-regexp';

// in subscription
const match = pathToRegexp('/users/:userId/search').exec(pathname);
if (match) {
    const userId = match[1];
    // dispacth action with userId
}
```

## Router
Route Components
./src/routes/ ./src/routert.js

通过connect绑定数据
```
import { connect } from 'dva';
function App() {
    function mapStateToProps(state, ownProps) {
        return {
            users: state.users,
        };
    }
}

export default connect(mapStateToProps)(App);

```
在App里就有了 dispatch 和 users 两个属性

Injected Props(e.g.location) 

Route Component 会有额外的props用以获取路由信息
+ location
+ params
+ children

基于 action 进行页面跳转
```
import { routerRedux } from 'dva/router';

// Inside Effects
yield put(routerRedux.push('/logout'));

// Outside Effects
dispatch(routerRedux.push('/logout'));

//With query 

routerRedux.push({
    pathname: '/logout',
    query: {
        page: 2,
    },
});

```
## dva配置
+ Redux Middleware
比如要添加 redux-logger 中间件:
```
import createLogger from 'redux-logger';
const app = dva({
    onAction: createLogger(),
});
onAction支持数组，可同时传入多个中间件
```

切换history 为browerHistory
```
npm install --save history
```
修改入口文件
```
import createHistory from 'history/createBrowerHistory';
const app = dva({
    history: createHistory(),
});
```
