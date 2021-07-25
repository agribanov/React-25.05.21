import React, { useEffect } from 'react';

import './styles/normalize.css';
import './styles/skeleton.css';
import './styles/dark-theme.css';
import './styles/styles.css';

import List from './components/List';
import Form from './components/Form';
import Filters from './components/Filters';
import { fetchTodos } from './store/actions/todos';
import { useDispatch } from 'react-redux';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTodos());
    }, []);

    return (
        <div className="container">
            <Filters />
            <List />
            <Form />
        </div>
    );
}

export default App;
