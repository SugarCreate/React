# 路由
在Umi中, 应用都是单页应用，页面地址的跳转都是在浏览器端完成的， 不会重新请求服务器获取html，html只在应用初始化时加载一次，所有页面由不同的组件构成，页面的切换其实就是不同组件的切换，你只需要在配置中把不同的路由路径和对应的组件关联上。
# 配置路由
export default {
    routes: [
        {exact: true, path: '/', component: 'index'},
        {exact: true, path: '/user', component: 'user'},
    ],
}

path
Type: string

component
Type: string

配置location 和 path 匹配后用于渲染的React组件路径。可以是绝对路径，也可以是相对路径，如果是相对路径，会从 src/pages 开始找起。

如果指向 src 目录的文件，可以用 @ ,也可以用 ../ 。推荐@

exact
Type: boolean
Default: true
表示匹配是否严格
```
export default {
    routes: [
        // url 为 /one/two 时匹配失败
        { path: '/one', exact: true },
        
        // url 为 /one/two 时匹配成功
        { path: '/one' },
        { path: '/one', exact: false }, 
    ]
}
```

routes
配置子路由, 通常在需要为多个路径增加layout组件时使用。
比如：
```
export default {
    routes: [
        { path: '/login', component: 'login' },
        {
          path: '/',
          component: '@/layout/index',
          routes: [
              { path: '/list', component: 'list' },
              { path: '/admin', components: 'admin' },
          ],
        },
    ],
}
```
然后在src/layouts/index中通过 props.children渲染子路由
```
export default(props) => {
    return <div>{ props.children }</div>
}
```
redirect
Type: string
配置路由跳转
比如：
```
export default {
    routes: [
        {exact: true, path: '/', redict: '/list'},
        {exact: true, path: '/', component: 'list'}
    ]
}

wrappers
Type: string[]
用于路由级别的权限验证
```
export default {
    routes: [
        {
            path: '/user', component: 'user',
            wrappers: [
                '@/wrappers/auth',
            ],
        },
        { path: '/login', component: 'login' },
    ]
}
```
然后在 src/wrappers/auth 中
```
import { Redict } from 'umi'

export default (props) => {
    const { isLogin } = useAuth();
    if (isLogin) {
        return <div>
        {props.children}
        </div>
    } else {
        return <Redirect to="/login" />;
    }

}
```
这样，访问 /user, 就通过useAuth 做权限校验，如果通过，渲染src/pages/user, 否则就跳转/login, 由src/pages/login 进行渲染

title 
Type：string
配置路由的标题

## 页面跳转
```
import { history } from 'umi';

// 跳转到指定路由
history.push('/list');

//带参数跳转到指定路由
history.push('/list?a=b');
history.push({
    pathname: '/list',
    query: {
        a: 'b',
    },
});

// 跳转到上一个路由
history.goBack();
```
hash路由
```
```
Link 组件
用于内部组件跳转
```
import { Link } from 'umi';

export default () => (
    <div>
        <Link to="/users">User Page</Link>
    </div>
);
```
路由组件参数
路由组件可通过 props获取以下属性,
. match , 当前路由 url match 后的对象， 包含params、path、url 和 isExact 属性

. location 表示应用当前处于哪个位置, 包含 pathname、search 、query等属性
. history
. route 当前路由配置,包含 path、exact 、component、routes等
. routes 全部路由信息
```
export default function(props) {
    conole.log(props.route);
    return <div>Home Page</div>;
}
```
传递参数给子路由
通过 cloneElement, 一次就好
```
import React from 'react';

export default function layout(props) {
    return React.Children.map(props.children, child => {
        return React.cloneElement(child, { foo: 'bar' });
    });
}
```
约定式路由
```
.
  └── pages
    ├── index.tsx
    └── users.tsx
```
```
[
  { exact: true, path: '/', component: '@/pages/index' },
  { exact: true, path: '/users', component: '@/pages/users' },
]
```
规则
```
以 . 或 _ 开头的文件或目录
以 d.ts 结尾的类型定义文件
以 test.ts、spec.ts、e2e.ts 结尾的测试文件（适用于 .js、.jsx 和 .tsx 文件）
components 和 component 目录
utils 和 util 目录
不是 .js、.jsx、.ts 或 .tsx 文件
文件内容不包含 JSX 元素
```
动态路由
约定 [] 包裹的文件或文件夹为动态路由

+ src/pages/users/[id].tsx 会成为 /users/:id
+ src/pages/users/[id]/settings.tsx 会成为 /users/:id/settings

举个完整的例子，比如以下文件结构
```
.
  └── pages
    └── [post]
      ├── index.tsx
      └── comments.tsx
    └── users
      └── [id].tsx
    └── index.tsx
```
会生成路由配置
```
[
  { exact: true, path: '/', component: '@/pages/index' },
  { exact: true, path: '/users/:id', component: '@/pages/users/[id]' },
  { exact: true, path: '/:post/', component: '@/pages/[post]/index' },
  {
    exact: true,
    path: '/:post/comments',
    component: '@/pages/[post]/comments',
  },
];
```
动态可选路由
约定 [ $ ] 包裹的文件或文件夹动态可选路由
```
. 比如:
. src/pages/users/[id$].tsx 会成为 /users/:id?
. src/pages/users/[id$]/settings.tsx 会成为 /users/:id?/settings
```

全局 layout
约定 src/layouts/index.tsx 为全局路由。返回一个React组件，并通过 props.children 渲染子组件
```
.
└── src
    ├── layouts
    │   └── index.tsx
    └── pages
        ├── index.tsx
        └── users.tsx

[
  { exact: false, path: '/', component: '@/layouts/index',
    routes: [
      { exact: true, path: '/', component: '@/pages/index' },
      { exact: true, path: '/users', component: '@/pages/users' },
    ],
  },
]
```
一个自定义的全局layout 如下
```
import { IRouteComponentProps } from 'umi'

export default function Layout({ children,  loaction, route, history, match, }: IRouteComponentProps){
    return children
}

import { IRouteComponentProps } from 'umi'

export default function Layout({ children, location, route, history, match }: IRouteComponentProps) {
  return children
}
```
扩展路由属性

title 会附加到路由配置中

```
function HomePage() {
  return <h1>Home Page</h1>;
}

HomePage.title = 'Home Page';

export default HomePage;

function HomePage() {
    return <h1> Home Page</h1>;
}

HomePage.title = 'Home Page';
```