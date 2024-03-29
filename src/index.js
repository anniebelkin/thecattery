import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import './index.css';
import App from '../src/containers/App';
import * as serviceWorker from './serviceWorker';
import { searchBreeds, requestBreeds } from './reducers';
import 'tachyons';

const logger = createLogger();
const rootReducer = combineReducers({ searchBreeds, requestBreeds } )
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
serviceWorker.unregister();
