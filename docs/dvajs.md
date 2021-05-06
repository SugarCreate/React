route.js |路由------> components |UI-------> models.js |数据和逻辑

dva 通过 model 的概念把一个领域的模型管理起来，包含同步更新 state 的 reducers，处理异步逻辑的 effects，订阅数据源的 subscriptions 。

### dva 应用的最简单结构
```
import dva from 'dva';
const App = () => \<div>Hello dva</div>;

// 创建应用
const app = dva();

// 注册视图
app.router(() => <App />);

// 启动应用
app.start('#root');
```

核心概念:
<img src='https://zos.alipayobjects.com/rmsportal/hUFIivoOFjVmwNXjjfPE.png' />

State: 一个对象，保存整个应用状态
View： React 组件构成的视图层
Action：一个方法，描述事件
connect 方法：一个函数，绑定State到 View
dispatch 方法：一个函数，发送Action到State

### State 和 View
State 储存数据的地方，收到Action以后，会更新数据。

View 就是React组件构成的UI层，从State取数据后，渲染成HTML代码，只要state 有变化，View就会自动更新。
### Action
Action 是用来描述UI层事件的一个对象
```
{
    type:'click-submit-button',
    payload：this.form.data
}
```
### connect 方法
connect是一个函数，绑定State到 View
```
import { connect } from 'dva';

function mapStateToProps(state) {
    return { todos: state.todos };
}

connect(mapStateToProps)(App);
```
### dispatch 方法
dispatch 是一个函数方法，用来将Action 发送给State。
```
dispatch({
    type: 'clcik-submit-button',
    payload: this.form.data
})
```
dispatch 方法哪里来？被connect的Component 会在props中拥有的dispatch方法
connect 数据从哪里来?
dva 应用的最简结构（带model）
```
// 创建应用
const app = dva();

// 注册 Model
app.model({
    namespace：'count',
    state: 0,
    reducers: {
        add(state) { return state + 1 },
    },
    effects: {
        *addAfter1Second(action, { call, put }){
            yield call(delay, 1000);
            yield put({ type: 'add'})
        },
    },

});

// 注册 视图
app.router(() => <ConnectedApp />)

//启动应用
app.start('#root');

```

### Model 对象的属性
+ namespace: 当前Model的名称。整个应用的State,由多个小的Model的State以namespace为key合成
+ state: 该Model当前的状态。数据保存在这里, 直接决定了视图层的输出
+ reducers: Action处理器，处理同步动作，用来算出最新的State
+ effects: Action处理器，处理异步动作

### Reducer
Reducer是Action处理器，用来处理同步操作，可以看看做是State的计算器。它的作用是根据Action,从上一个State算出当前的State。

## Effect 
基于Redux-saga实现。Effect指的是副作用。根据函数式编程,计算以外的操作都属于Effect,典型的就是I/O操作、数据库读写。
```
function *addAfter1Second(action, { put, call }){
    yield call(delay, 1000);
    yield put({ type: 'add' });
}
```
### Generator 函数
Effect 就是一个 Generator 函数吗，内部使用 yield关键字，标识每一步的操作（不管是异步或是同步）

### call 和 put
dva 提供多个effect函数内部的处理函数，比较常用的是call 和 put
+ call 执行异步函数
+ put: 发出一个Action, 类似于 dispatch
<!-- TODO 2021-05-06 16:26:24 what dispatch -->

