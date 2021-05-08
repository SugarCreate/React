// dva通过model的概念把一个领域内的模型管理起来，包含同步更新 state的reducer, 处理异步逻辑的effects, 订阅数据的subuscriptions
export default {
    namespace: 'products',

    //因为productslist 因此state使用list
    // state: {}, // 这是一个字典
    state:[
        {
            name: 'dva',
            key: 1,
        },
        {
            name: 'antd',
            key: 2,
        }
    ],

    // subscriptions: {
    //     setup({ dispatch, history }) {

    //     },
    // },

    effects: { //处理异步
        *asyncDelete({ payload, callback}, { call, put}) {
            yield put({type: 'delete', payload: payload});
        },
    },

    reducers: { //处理同步
        'delete'(state, { payload: key }) {
            // return {...state, ...action.payload }; 
            return state.filter(item => item.key !== key);
        },
        'add'(state, { payload: name }) {
            return state.concat([{
                name: name,
                key: new Date().getTime(),
            }])
        }
    },
};