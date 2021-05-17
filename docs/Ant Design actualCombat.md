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