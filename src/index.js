import React from 'react';
import ReactDOM from 'react-dom';
import WatchlistApp from './ui/components/WatchlistApp'

import {Provider} from "react-redux";
import {configureStore} from "redux-starter-kit";
import authReducer from "./ui/reducers/authReducers";


const store = configureStore({
    reducer: {
        auth: authReducer
    }
});

ReactDOM.render(
    <Provider store={ store }>
        <WatchlistApp />
    </Provider>,
    document.getElementById('root')
);
