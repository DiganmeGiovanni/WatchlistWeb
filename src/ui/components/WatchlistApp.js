import React from 'react';
import '../../sass/watchlist.scss';
import LoginContainer from "../containers/LoginContainer";
import SidebarContainer from "../containers/SidebarContainer";
import { BrowserRouter as Router, Route } from "react-router-dom";

function WatchlistApp() {
    return (
        <div className="watchlist-app">
            <SidebarContainer/>

            <div className="section-content">
                <Router>
                    <Route path="/" component={ LoginContainer } exact/>
                </Router>
            </div>
        </div>
    )
}

export default WatchlistApp
