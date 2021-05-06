export default {
    namespace: 'products',
    state: [],
    reducers: {
        'delete'(state, { payload: id }) {
            return state.filter(item => item.id !== id);
        },
    },
};
// namespace 表示在全局state 上的key
// state时初始值，在这里是空数组
// reducers 等同于redux 里的reducer, 接action , 同步更新state
// TODO reducer in redux是干嘛的？
