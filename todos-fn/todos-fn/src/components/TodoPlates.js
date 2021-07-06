import React from 'react';
import useTodos from '../hooks/useTodos';

function TodoPlates() {
    const { items } = useTodos();

    return (
        <div>
            {items.map((item) => (
                <div key={item.id}>{item.title}</div>
            ))}
        </div>
    );
}

export default TodoPlates;
