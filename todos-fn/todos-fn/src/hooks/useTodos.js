import { useEffect, useState } from 'react';
import { getTodos, deleteTodo, createTodo, updateTodo } from '../api';

export default function useTodos() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        getTodos().then(setItems);
    }, []);

    function deleteTodoItem(id) {
        deleteTodo(id);

        const newItems = items.filter((item) => item.id !== id);

        setItems(newItems);
    }

    function addTodoItem(newTodo) {
        newTodo = { ...newTodo, completed: false };

        createTodo(newTodo).then((data) => setItems([...items, data]));
    }

    function toggleTodoItem(id) {
        let newItem = items.find((item) => item.id === id);

        newItem = { ...newItem, completed: !newItem.completed };

        const newItems = items.map((item) => (item.id === id ? newItem : item));

        updateTodo(newItem);

        setItems(newItems);
    }

    return { items, deleteTodoItem, addTodoItem, toggleTodoItem };
}
