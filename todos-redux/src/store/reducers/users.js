import { ACTION_SET_USERS } from '../actions/users';

const initialState = {
    items: [],
};

export default function (state = initialState, { type, payload }) {
    console.log('users reducer action', type);

    switch (type) {
        case ACTION_SET_USERS:
            return { users: payload };
        default:
            return state;
    }
}
