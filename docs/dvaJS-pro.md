概念
+ 数据流向
    数据的改变发生通常是通过用户交互行为或者浏览器行为（如路由跳转）触发的，当此类行为会改变数据的时候可以通过dispatch发起一个 action,如果是同步行为会直接 Reducers改变State,如果是异步行为（副作用）会先触发Effects然后流向Reducers最终改变State。
    <img src='https://cdn.nlark.com/yuque/0/2018/png/185915/1544783336903-82e0a083-f4f0-4850-8a70-f43d13142a3c.png?x-oss-process=image%2Fresize%2Cw_746' />
+ Models
 1) state
    type state = any
    state 表示 model的状态数据，通常表现为一个javascript对象(当然它可以是任何值); 操作的时候每次都要当做不可变数据来对待，保证每次更新都是一个全新对象，没有引用关系，这样才可以确保state的独立性，便于测试和追踪变化。
    在dva中，可以通过dva的实例属性_store看到顶部的state数据。
    ```
    const app = dva()
    console.log(app._store)
    ```
2) action
type asyncAction = any
action是一个普通javascription对象, 它是改变state的唯一途径。无论从UI事件、网络回调还是websocket等数据源所获得的数据, 最终都会通过dispatch函数调用一个action, 从而改变对应的数据, action必需带有type属性指明具体的行为，其他字段可以自定义，如要发起一个action需要使用dispatch函数； 需要注意的是dispatch 是在组件connect Models以后通过props传入的。
```
dispatch ({
    type：'add'
});
```

3) dispatch
    type asyncAction = any
    action是一个普通JavaScript对象，它是改变state的唯一途径。但是它只描述了一个行为，而dispatch可以看作是触发这个行为的方式，而reducer则是描述如何改变数据的。在dva中,connect Modal的组件通过props可以访问到dispatch, 可以回调model中的renducer或者effects, 常见的形式如下:
    dispatch({
        type:'user/add', //如果在model外调用,需要添加namespace
        payload:{} //需要传递的信息
    })
4) reducer
type reducer<S, A> = (state:S, action:A) => S
    reducer(也称为reducing function)函数,接收两个参数：
    之前已经累积运算的结果和当前要被累积的值，返回的是一个新的累积结果，该函数把一个集合归并为一个单值。
    reducer的概念来自于函数式编程，很多语言中都有reduce API,如JavaScript中：
    ```
    [{x:1},{y:2},{z:3}].reduce(function(prev, next0{
        return Object.assign(prev, next);
    }))
    //return  {x:1, y:2, z:3}
    ```
    在dva中，reducers 聚合积累的结果是当前model的state对象。通过actions中传入的值，与当前reducers中的值进行运算并获得新的值(也就是最新的state)。需要注意的是Reducer必须是纯函数，所以同样的输入必然得到同样的输出，它不应该产生任何副作用。并且每一次的计算都应该使用immutable data, 这种特性简单理解就是每次操作都返回一个全新的数据（独立、纯净、），所以热重载和时间旅行这些功能才能够使用。
<!-- TODO 2021-05-08 17:11:46 什么是纯函数, 什么是热重载和时间旅行-->
[热加载和时间旅行调试](https://zhuanlan.zhihu.com/p/24443402)
[Redux的热加载(hot reloading)和时间旅行调试(time travel debugging)]

5) effect 
    Effect 被称之为副作用，在我们的应用中，最常见的就是异步操作。它来自于函数编程的概念, 之所以叫副作用是因为它使我们的函数变得不纯，同样的输入不一定获得同样的输出。
    dva为了控制副作用的操作。底层引入了[redux-sagas](http://superraytin.github.io/redux-saga-in-chinese)做异步流程控制，由于采用了[generator](http://www.ruanyifeng.com/blog/2015/04/generator.html)的相关概念,所以将异步转成同步写法, 从而将effects转为纯函数, 至于为什么我们这么纠结于纯函数, 可以阅读 [Mostly adequate to FP](https://github.com/MostlyAdequate/mostly-adequate-guide),或者它的译本[JS函数编程指南](https://www.gitbook.com/book/llh911001/mostly-adequate-guide-chinese/details)。
6) subscription
    subscription 是一种从源获取数据的方法,它来自elm。
    subscription 语义是订阅，用于订阅一个数据源，然后根据条件 dispatch需要的action.数据源可以是当前的时间、服务器的websocket连接, keyboard输入、geolocation 变化、history路由变化等。
    ```
    import key from 'keymaster'
    app.model({
        namespace: 'count',
        subscriptions: {
            keyEvent({dispatch}) {
                key('ctrl+up', () => {dispatch({type：'add'})});
            },
        }
    });
    ```
+ Router
    这里的路由通常指的是前端的路由，由于我们是单页应用，所以需要前端代码来控制路由逻辑。通过浏览器提供的 [History API](http://mdn.beonex.com/en/DOM/window.history.html)可以监听浏览器url的变化，从而控制路由相关操作。
    ```
    import { Router, Route } from 'dva/router';

    app.router(({history}) => 
        <Router history={history}>
            <Route path='/' component={HomePage} />
        </Router>
    )
    ```
+ Route Components
在组件设计方法中，我们提到过 Container Components，在 dva 中我们通常将其约束为 Route Components，因为在 dva 中我们通常以页面维度来设计 Container Components。
所以在 dva 中，通常需要 connect Model的组件都是 Route Components，组织在/routes/目录下，而/components/目录下则是纯组件（Presentational Components）。

+ 比对DvaJs
redux
单向数据流方案，其实现思想跟vue极度类似，通过监听数据(对象、数组)的属性变化，可以通过直接在数据上更改触发UI的重新渲染，从而做到MVVM、响应式，上手成本低、开发效率高、参考资料多。它建议全局唯一的store，多个reducer也会传递给react-redux之前被合并成一个root router，任何数据的更改(通过reducer)都会通过这一个store来触发整个UI树的重新渲染，如果不做任何的性能优化(pureRender等)，即使是VD(virtual Dom)已经提升了效率，当页面数据量很大或是有涉及很多dom时，性能消耗也非常大。
另外redux对数据的管理是通过pull方式实现的，因此只能等待应用派发某个行为(action)，然后再重新做UI渲染，对行为是不可预期的。
mobx
响应式数据流方案，它是基于监听数据变化来实现的，而且是多store，对于任何的数据变更都是第一时间知道的，基于push的发布订阅模式，通过这样可以针对数据做到可预测以及细粒度的控制，甚至可以通过修改react组件生命周期的方式来减少性能消耗，这些实现细节无需使用者的关心。

TODO 2021-05-08 17:42:16 学习JS函数式编程和Redux、TypeScript*