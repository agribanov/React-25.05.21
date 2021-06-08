import { Component } from 'react';
import './App.css';
import Form from './components/Form/Form';
import List from './components/List/List';

class App extends Component {
    state = {
        todos: [
            {
                id: 1,
                author: 'name',
                title: '1sadfd',
                isDone: true,
            },
            {
                id: 2,
                author: 'name',
                title: '2',
                isDone: false,
            },
            {
                id: 3,
                author: 'name',
                title: '3',
                isDone: true,
            },
        ],
    };

    addTodo = (newTodo) => {
        this.setState({
            todos: [
                ...this.state.todos,
                {
                    ...newTodo,
                    id: Date.now(),
                    isDone: false,
                },
            ],
        });
    };

    deleteTodo = (id) => {
        console.log('delete id', id);
        this.setState({
            todos: this.state.todos.filter((item) => item.id !== id),
        });
    };

    toggleTodo = (id) => {
        const newTodos = this.state.todos.map((item) => {
            return item.id !== id
                ? item
                : {
                      ...item,
                      isDone: !item.isDone,
                  };
        });

        this.setState({ todos: newTodos });
    };

    render() {
        return (
            <>
                <h3>length: {this.state.todos.length}</h3>
                {this.state.todos.length > 3 ? (
                    <List
                        todos={this.state.todos}
                        onToggle={this.toggleTodo}
                        onDelete={this.deleteTodo}
                    />
                ) : (
                    <Form onAdd={this.addTodo} />
                )}
            </>
        );
    }
}

export default App;
