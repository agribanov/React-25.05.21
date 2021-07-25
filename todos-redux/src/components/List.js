import React from 'react';
import ListItem from './ListItem';
import { connect } from 'react-redux';
import { deleteTodo, toggleTodo } from '../store/actions/todos';

function List({ todos, onItemToggle, onItemDelete }) {
    return (
        <div className="task-list u-full-width">
            {todos.map((item) => (
                <ListItem
                    key={item.id}
                    item={item}
                    onItemToggle={onItemToggle}
                    onItemDelete={onItemDelete}
                />
            ))}
        </div>
    );
}

function mapStateToProps({ todos, todosFilter }) {
    let items = todos.items;

    if (todosFilter.value !== 'all') {
        items = items.filter((item) => {
            return (
                (todosFilter.value === 'todo' && !item.isDone) ||
                (todosFilter.value === 'done' && item.isDone)
            );
        });
    }

    return {
        todos: items,
    };
}

// function mapDispatchToProps(dispatch) {
//     return {
//         onItemToggle: (id) => dispatch(toggleTodo(id)),
//         onItemDelete: (id) => dispatch(deleteTodo(id)),
//     };
// }

const mapDispatchToProps = {
    onItemDelete: deleteTodo,
    onItemToggle: toggleTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
