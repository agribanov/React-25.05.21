import List from './List';
import Form from './Form';
import { useState } from 'react';

// const items = [
//     { id: 1, title: 'Task 1', isDone: false },
//     { id: 2, title: 'Task 2', isDone: true },
//     { id: 3, title: 'Task 3', isDone: false },
// ];
// 1136746900

function TodoList() {
    const [items, setItems] = useState([
        { id: 1, title: 'Task 1', isDone: false },
        { id: 2, title: 'Task 2', isDone: true },
        { id: 3, title: 'Task 3', isDone: false },
    ]);

    function deleteTodoItem(id) {
        const newItems = items.filter((item) => item.id !== id);

        setItems(newItems);
    }

    function addTodoItem(newTodo) {
        newTodo = { id: Date.now(), ...newTodo, isDone: false };

        setItems([...items, newTodo]);
    }

    function toggleTodoItem(id) {
        const newItems = items.map((item) =>
            item.id === id ? { ...item, isDone: !item.isDone } : item
        );

        setItems(newItems);
    }

    return (
        <>
            <List
                items={items}
                onDelete={deleteTodoItem}
                onToggle={toggleTodoItem}
            />
            <Form onSave={addTodoItem} />
        </>
    );
}

export default TodoList;
