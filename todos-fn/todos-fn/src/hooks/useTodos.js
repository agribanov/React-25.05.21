import { useEffect, useState } from 'react';

export default function useTodos() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then((resp) => resp.json())
            .then(setItems);
    }, []);

    function deleteTodoItem(id) {
        fetch('https://jsonplaceholder.typicode.com/todos/' + id, {
            method: 'DELETE',
        });

        const newItems = items.filter((item) => item.id !== id);

        setItems(newItems);
    }

    function addTodoItem(newTodo) {
        newTodo = { ...newTodo, completed: false };

        fetch('https://jsonplaceholder.typicode.com/todos/', {
            method: 'POST',
            body: JSON.stringify(newTodo),
            headers: { 'Content-Type': 'application/json' },
        })
            .then((resp) => resp.json())
            .then((data) => setItems([...items, data]));
    }

    function toggleTodoItem(id) {
        let newItem = items.find((item) => item.id === id);

        newItem = { ...newItem, completed: !newItem.completed };

        const newItems = items.map((item) => (item.id === id ? newItem : item));

        fetch('https://jsonplaceholder.typicode.com/todos/' + id, {
            method: 'PUT',
            body: JSON.stringify(newItem),
            headers: { 'Content-Type': 'application/json' },
        });

        setItems(newItems);
    }

    return { items, deleteTodoItem, addTodoItem, toggleTodoItem };
}
