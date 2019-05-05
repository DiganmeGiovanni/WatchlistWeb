import React from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./ui/reducers";
import WatchlistApp from './ui/components/WatchlistApp'

const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware
    )
);

ReactDOM.render(
    <Provider store={ store }>
        <WatchlistApp />
    </Provider>,
    document.getElementById('root')
);
