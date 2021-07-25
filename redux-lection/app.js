// import redux from 'redux'
const { createStore } = require('redux');

const initialState = {
    counts: 0,
    lastUpdated: null,
    items: [],
};

// action
const ACTION_INCREMENT = 'inc';
const ACTION_DECREMENT = 'dec';
const ACTION_SET = 'set';

function increment() {
    return { type: ACTION_INCREMENT };
}
function decrement() {
    return { type: ACTION_DECREMENT };
}
function set(payload) {
    return { type: ACTION_SET, payload };
}

// reducer
function rootReducer(state = initialState, { type, payload = null }) {
    switch (type) {
        case ACTION_INCREMENT:
            return { ...state, counts: state.counts + 1 };
        case ACTION_DECREMENT:
            return { ...state, counts: state.counts - 1 };
        case ACTION_SET:
            return { ...state, counts: payload };
        default:
            return state;
    }
}

const store = createStore(rootReducer);

store.subscribe(() => console.log('actual state', store.getState()));

store.dispatch(increment());
store.dispatch(increment());

store.dispatch(decrement());
store.dispatch(set(100));
console.log(store.getState());
