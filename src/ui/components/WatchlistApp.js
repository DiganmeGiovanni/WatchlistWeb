import React from 'react';
import '../../sass/watchlist.scss';
import LoginContainer from "../containers/LoginContainer";
import ListContainer from "../containers/ListContainer";
import SidebarContainer from "../containers/SidebarContainer";
import { BrowserRouter as Router, Route } from "react-router-dom";

function WatchlistApp() {
    return (
        <div className="watchlist-app">
            <Router>
                <SidebarContainer/>

                <div className="section-content">
                    <Route path="/" component={ LoginContainer } exact/>
                    <Route path="/list/:listId" component={ ListContainer }/>
                </div>
            </Router>
        </div>
    )
}

export default WatchlistApp
