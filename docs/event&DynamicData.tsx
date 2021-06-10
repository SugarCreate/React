// ## 获取数据
import { Button } from 'antd';
import { request } from 'umi';

export default function IndexPage(props: any) {

    // way 1 async + await
    const getData = async () => {
        // 请求数据
        const data = await request('/api/user')
        console.log(data)
    }

    // way 2
    request('api/user').then(res => {
        console.log(res);
    })

    return (
        <div>
        <Button onClick={getData}>Click me</Button>
        </div>
    )
}


// // mock/index.tsx 
// // way1 Manual

// export default {
//     'GET /api/user': {
//         id: 2,
//         name: 'lili',
//         age: 22
//     },
// }

// // way2 Mock.js

// import mockjs from 'mockjs';
// exprot default {
//     'GET /api/tags': mockjs.mock({
//         'list|100': [{name: '@city', 'value|1-100': 50, 'type|0-2': 1}]
//     })
// }

// 关闭mock的地址：
// .umirc.ts: mock: true
// package.json 配置mock:false 和mock:true 的不同启动工程命令     "deploy": "npm run site && npm run gh-pages",
// "dev": "npm run start:dev",
// # Mock.js 生成随机数据，拦截ajax 数据


models/dva.ts 
1. 创建UI组件
2. 创建Model
3. connect UI组件和Model
export default {
    namespace: 'dva',  // 调用model的时候，通过命名空间调用，不要和其他models 同名

    state: {}, // 状态

    effects: {} // 调用服务器接口，获取数据

    reducers: {} // 更新state
}
 
import {connect} from 'umi'

export default connect(({tags}) => {{tags}})



