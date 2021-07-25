import { createStore, applyMiddleware, combineReducers } from 'redux';
import todosReducer from './reducers/todos';
import usersReducer from './reducers/users';
import todosFilterReducer from './reducers/todosFilter';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    todos: todosReducer,
    users: usersReducer,
    todosFilter: todosFilterReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk, logger));
