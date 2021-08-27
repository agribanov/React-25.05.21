import React, { Component } from 'react';
import ListItem from '../ListItem/ListItem';
import Box from '@material-ui/core/Box';

export function List() {
    const { todos, onToggle, onDelete } = this.props;

    return (
        <Box>
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
        </Box>
    );
}

export default List;
