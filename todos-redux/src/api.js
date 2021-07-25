const API_URL = 'https://jsonplaceholder.typicode.com/todos';

export function getTodos() {
    return request();
}

export function deleteTodo(id) {
    return request(
        {
            method: 'DELETE',
        },
        id
    );
}

export function createTodo(todo) {
    request({
        method: 'POST',
        body: JSON.stringify(todo),
    });
}

export function updateTodo(todo) {
    request(
        {
            method: 'PUT',
            body: JSON.stringify(todo),
        },
        todo.id
    );
}

function request(config = {}, id = '') {
    config = {
        method: 'GET',
        ...config,
        headers: { 'Content-Type': 'application/json', ...config.headers },
    };

    return fetch(`${API_URL}/${id}`, config).then((resp) => resp.json());
}
