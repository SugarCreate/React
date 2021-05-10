export default {
    namespace: 'puzzlecards',

    state: { 
        data: [
        {
            id: 1,
            setup: 'AAAAAAAAAAAAAAAAAAAAAAA',
            puchline:  'aaaaaaaaaaaaaaaaa',
        },
        {
            id: 2,
            setup: 'BBBBBBBBBB',
            puchline: 'bbbbbbbbbbb',
        },
    ],
    counter: 100,
},
reducers: {
    addNewCard(state, { payload: newCard}) {
        const nextCounter = state.counter + 1;
        const newCardWithId = {...newCard, id: nextCounter };
        const nextData = state.data.concat(newCardWithId);
        return {
            data: nextData,
            counter: nextCounter,
        };
    }
 },
};
