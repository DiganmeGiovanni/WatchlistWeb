import React from 'react';
import '../../sass/watchlist.scss';
import LoginContainer from "../containers/LoginContainer";
import ListContainer from "../containers/ListContainer";
import SidebarContainer from "../containers/SidebarContainer";
import { Route, Switch } from "react-router-dom";

function WatchlistApp() {
    return (
        <div className="watchlist-app">
            <SidebarContainer/>

            <div className="section-content">
                <Switch>
                    <Route path="/" component={ LoginContainer } exact/>
                    <Route path="/list/:listId" component={ ListContainer }/>
                </Switch>
            </div>
        </div>
    )
}

export default WatchlistApp
