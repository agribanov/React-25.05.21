import React, { Component } from 'react';

export class Form extends Component {
    state = {
        newTodo: {
            title: '',
            author: '',
        },
    };

    onChange = (e) => {
        this.setState({
            newTodo: {
                ...this.state.newTodo,
                [e.target.name]: e.target.value,
            },
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.newTodo);
        this.resetForm();
    };

    resetForm() {
        this.setState({
            newTodo: {
                ...this.state.newTodo,
                title: '',
            },
        });
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input
                    type="text"
                    placeholder="Author"
                    name="author"
                    value={this.state.newTodo.author}
                    onChange={this.onChange}
                />
                <input
                    type="text"
                    placeholder="Title"
                    name="title"
                    value={this.state.newTodo.title}
                    onChange={this.onChange}
                />
                <button>Add</button>
            </form>
        );
    }
}

export default Form;
