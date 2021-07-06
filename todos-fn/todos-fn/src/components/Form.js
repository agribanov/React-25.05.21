import { useState } from 'react';

function Form({ onSave }) {
    const [newTodo, setNewTodo] = useState({ title: '', author: '' });

    function changeHandler(e) {
        setNewTodo({
            ...newTodo,
            [e.target.name]: e.target.value,
        });
    }

    function submitHandler(e) {
        e.preventDefault();

        onSave(newTodo);
    }

    function resetForm() {
        setNewTodo({
            title: '',
            author: '',
        });
    }

    return (
        <form onSubmit={submitHandler}>
            <input
                type="text"
                name="author"
                value={newTodo.author}
                onChange={changeHandler}
            />
            <input
                type="text"
                name="title"
                value={newTodo.title}
                onChange={changeHandler}
            />
            <button>Save</button>
            <button type="button" onClick={resetForm}>
                Reset
            </button>
        </form>
    );
}

export default Form;
