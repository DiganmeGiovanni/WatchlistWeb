import React from 'react';
import '../../sass/watchlist.scss';
import LoginContainer from "../containers/LoginContainer";
import Sidebar from "./sidebar/Sidebar";

function WatchlistApp() {
    return (
        <div className="watchlist-app">
            <Sidebar/>
            <LoginContainer/>
        </div>
    )
}

export default WatchlistApp
