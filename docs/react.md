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