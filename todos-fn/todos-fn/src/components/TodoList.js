import List from './List';
import Form from './Form';
import useTodos from '../hooks/useTodos';

function TodoList() {
    const { items, deleteTodoItem, addTodoItem, toggleTodoItem } = useTodos();

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
