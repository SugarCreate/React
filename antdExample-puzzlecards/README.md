# umi project

## Getting Started

Install dependencies,

```bash
$ yarn
```

Start the dev server,

```bash
$ yarn start
```
陈述几个需求：

+ 在实际的开发中, 像cardList中包含的那些数据，一般是通过发起异步http请求从后端服务中获得。
+ 我们希望把数据逻辑(cardList相逻辑) 和视图逻辑(PuzzleCardsPage)分开管理在不同的模块中, [关注分离]使得代码更加健壮, 同时易于调试。
+ 我们希望这些数据在需要的时候，可以提供给不同的组件使用：也即数据共享。

而dva就是用来满足这些需求的:
+ 通过把状态上提到 dva model中, 我们把数据逻辑从页面中抽离出来。
+ 通过effect处理数据生成郭超中的副作用, 副作用中最常见的就是异步逻辑。
+ dva model中数据可以注入给任意组件。
+ dva 允许把数据逻辑再拆分(页面常常就是分隔的标志), 以namespace区分。不同的namespace之间的state是可以相互访问的
在React中props和state, props和state对于一个组件来说都是数据源, 而state又可以通过props传递给子组件，就行一个鸡生蛋蛋生鸡的问题: 到底谁是数据的源头？答案是state, 而广义的state: 它可以是react组件树中各级组件的state, 也可以是react组件树外部由其他js数据结构表示的state, 而dva管理的就是react组件树之外的state: Redux。归根到底, props是用来传导数据的，而state是数据改变的源泉。

<b>基于dva的简单卡片列表页：使用connect对静态的dva model</b>
在React中,子组件的state可以上提(state hoisting),状态提升,由父组件来管理。

+ 子组件间接回调到父组件的setState的方法来改变父组件的state;

+ 新的state通过props的形式把再次被子组件获悉。

dva可以帮助我们把 state 上提到 所有React组件之上,过相似的：
+ 页面通过调用dispatch 函数来驱动 dva model state的改变。
+ 改变后的dva model state 通过 connect 方法注入页面。

注入: 本质就是控制反转的一种实现, 比如Java语言的Spring。 组件不再负责管理数据， 组件只通过 connect向 dva声明所需数据。

dva model的定义。一个基本的dva model 最少具备两个成员: namesapce 和 state。
namespcae来作为一个model的唯一标识, state 中就是该 model管理的数据。

其次,我们删除了组件本身的state, 同时添加了 @connect(mapStateToProps)。
connnect 是连接dva和React 两个平行世界的关键。
+ connect 让组件获取两样东西: 1. model中的数据; 2 驱动model改变的方法。
+ connect 本质只是一个javascript函数, 通过装饰器@ 语法使用，放置在组件定义的上方；
+ connnect 既然是函数, 就可以接受入参, 第一个入参是最常用的，它需要是一个函数，我们习惯给他叫做 mapStateToProps, 顾名思义就是把dva model中的 state组件的 props 注入给组件。通过实现这个函数，我们就能把 dva model 的 state 注入给组件。

mapStateToProps 这个函数的入参state其实是dva中所有state的总合。dva框架会适时调用 mapStateToProps, 并传入 dva model state 作为入参, 我们再次提醒： 传入 state 是个完全体, 包含了所有的 namesapce 下的 state! 我们自己定义的 dva model state就是以 namespace 为 key 的 state 成员。所以 const namespcae = 'puzzlecards' 中的 puzzlecards 必须和 model 中的定义完全一致。 dva 期待 mapStateToProps 函数返回一个对象，这个对象会被dva 并传入到 props 中， 在上面的例子中我们取到数据后, 把它改名为 cardList 并返回(注意返回的不是cardList本身，而是一个包含cardList的对象！), cardList 就可以在组件中通过props被访问到了。

"添加卡片"按钮： 使用 dispatch 和 reducer 改变 dva model

React 基本哲学：数据映射到视图。无论什么途径，我们点击按钮后，本质上都是去触发 state 的改变，state 的改变再映射回视图。所以我们这里的目标就是使得每次点击按钮，触发 dva model 的中卡片数据再添加一条。而在 dva 的语境中，是统一通过 dispatch 函数来做这件事情。