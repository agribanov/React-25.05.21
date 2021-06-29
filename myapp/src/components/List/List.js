import React, { Component } from 'react';
import ListItem from '../ListItem/ListItem';

export function List() {
    const { todos, onToggle, onDelete } = this.props;

    return (
        <div>
            {todos.map((item) => {
                return (
                    <ListItem
                        key={item.id}
                        item={item}
                        onToggle={onToggle}
                        onDelete={onDelete}
                    />
                );
            })}
        </div>
    );
}

export default List;
