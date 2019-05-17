import React from 'react';
import ReactDOM from 'react-dom';
import WatchlistApp from './ui/components/WatchlistApp'

import {Provider} from "react-redux";
import { configureStore, getDefaultMiddleware } from "redux-starter-kit";
import { connectRouter, routerMiddleware, ConnectedRouter } from "connected-react-router";
import { createBrowserHistory } from "history";
import authReducer from "./ui/reducers/authReducers";
import listsReducers from "./ui/reducers/listsReducers";
import listReducer from "./ui/reducers/listContentReducers";

const history = createBrowserHistory();


const store = configureStore({
    reducer: {
        auth: authReducer,
        lists: listsReducers,
        list: listReducer,
        router: connectRouter(history)
    },
    middleware: [
        ...getDefaultMiddleware(),
        routerMiddleware(history)
    ]
});

ReactDOM.render(
    <Provider store={ store }>
        <ConnectedRouter history={ history }>
            <WatchlistApp />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);
