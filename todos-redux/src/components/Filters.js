import React from 'react';
import { connect } from 'react-redux';
import { setTodosFilter } from '../store/actions/todosFilter';

function Filters({ setTodosFilter, filter }) {
    return (
        <div>
            <button
                class={filter === 'all' ? 'active' : ''}
                onClick={() => setTodosFilter('all')}
            >
                All
            </button>
            <button
                class={filter === 'done' ? 'active' : ''}
                onClick={() => setTodosFilter('done')}
            >
                Done
            </button>
            <button
                class={filter === 'todo' ? 'active' : ''}
                onClick={() => setTodosFilter('todo')}
            >
                Todo
            </button>
        </div>
    );
}

function mapStateToProps({ todosFilter }) {
    return { filter: todosFilter.value };
}

const mapDispatchToProps = {
    setTodosFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
