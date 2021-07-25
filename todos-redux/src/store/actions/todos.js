import { deleteTodo as deleteRemoteTodo } from '../../api';

const TODOS_URL = 'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/todos/';

export const ACTION_SET_ITEMS = 'ACTIONS_SET_ITEMS';
// export function fetchTodos() {
//     return function (dispatch) {
//         fetch(TODOS_URL)
//             .then((res) => res.json())
//             .then((data) =>
//                 dispatch({
//                     type: ACTION_SET_ITEMS,
//                     payload: data,
//                 })
//             );
//     };
// }

export const fetchTodos = () => (dispatch) => {
    fetch(TODOS_URL)
        .then((res) => res.json())
        .then((data) =>
            dispatch({
                type: ACTION_SET_ITEMS,
                payload: data,
            })
        );
};

export const ACTION_DELETE = 'ACTION_DELETE';
export function deleteTodo(id) {
    return function (dispatch) {
        deleteRemoteTodo(id);

        dispatch({
            type: ACTION_DELETE,
            payload: id,
        });
    };
}

export const ACTION_SET_ITEM = 'ACTION_SET_ITEM';
export function toggleTodo(id) {
    return function (dispatch, getState) {
        const { todos } = getState();

        const item = todos.find((item) => item.id === id);

        const newItem = { ...item, isDone: !item.isDone };

        fetch(TODOS_URL + id, {
            method: 'PUT',
            body: JSON.stringify(newItem),
        });

        dispatch({
            type: ACTION_SET_ITEM,
            payload: newItem,
        });
    };

    // return {
    //     type: ACTION_TOGGLE_ITEM,
    //     payload: id,
    // };
}

export const ACTION_CREATE_ITEM = 'ACTION_CREATE_ITEM';
export function createTodo(title) {
    return function (dispatch) {
        fetch(TODOS_URL, {
            method: 'POST',
            body: JSON.stringify({ title: title, isDone: false }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((res) => res.json())
            .then((data) =>
                dispatch({
                    type: ACTION_CREATE_ITEM,
                    payload: data,
                })
            );
    };
}
