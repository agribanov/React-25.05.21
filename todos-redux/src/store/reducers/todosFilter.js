import { ACTION_SET_TODOS_FILTER } from '../actions/todosFilter';

const initialState = {
    value: 'all',
};

export default function (state = initialState, { type, payload }) {
    switch (type) {
        case ACTION_SET_TODOS_FILTER:
            return { value: payload };
        default:
            return state;
    }
}
