import React, { Component } from 'react';
import './ListItem.css';

export class ListItem extends Component {
    onDeleteBtnClick = (e) => {
        e.stopPropagation();
        this.props.onDelete(this.props.item.id);
    };

    render() {
        const { item, onToggle } = this.props;

        return (
            <div
                className={`todo-item ${item.isDone ? 'done' : ''}`}
                onClick={() => onToggle(item.id)}
            >
                <strong>{item.author}</strong>: {item.title}
                <span onClick={this.onDeleteBtnClick} className="delete-btn">
                    X
                </span>
            </div>
        );
    }
}

export default ListItem;
