
export default {

    namespace: 'example',
  
    state: {},
  
    subscriptions: {
      setup({ dispatch, history }) {  // eslint-disable-line
      },
    },
  
    effects: {
      *fetch({ payload }, { call, put }) {  // eslint-disable-line
        yield put({ type: 'save' });
      },
    },
  
    reducers: {
      save(state, action) {
        return { ...state, ...action.payload };
      },
    },
  
  };

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

export default {
    namespace: 'app',

    state: {
        todos: [],
        loading: false,
    },

    reducers: {
        add(state, { payload: todo }) {
            const todos = state.todos.concat(todo);
            return {...state, todos};
        },
    },
}