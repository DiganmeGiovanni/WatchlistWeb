import React from 'react';
import ReactDOM from 'react-dom';
import WatchlistApp from './ui/components/WatchlistApp'

import {Provider} from "react-redux";
import {configureStore} from "redux-starter-kit";
import authReducer from "./ui/reducers/authReducers";
import listReducer from "./ui/reducers/listsReducers";


const store = configureStore({
    reducer: {
        auth: authReducer,
        listsContainer: listReducer
    }
});

ReactDOM.render(
    <Provider store={ store }>
        <WatchlistApp />
    </Provider>,
    document.getElementById('root')
);
