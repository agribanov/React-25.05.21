import {
    ACTION_DECREMENT,
    ACTION_INCREMENT,
    ACTION_SET,
} from '../actions/counter';

const initialState = {
    counts: 100,
    updatedAt: null,
};

export default function rootReducer(state = initialState, { type, payload }) {
    switch (type) {
        case ACTION_INCREMENT:
            return {
                ...state,
                updatedAt: Date.now(),
                counts: state.counts + 1,
            };
        case ACTION_DECREMENT:
            return {
                ...state,
                updatedAt: Date.now(),
                counts: state.counts - 1,
            };
        case ACTION_SET:
            return { ...state, updatedAt: Date.now(), counts: payload };
        default:
            return state;
    }
}
