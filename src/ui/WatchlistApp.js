import React from 'react';
import '../sass/watchlist.scss';
import Sidebar from "./sidebar/Sidebar";
import Login from "./welcome/Login";

function WatchlistApp() {
    return (
        <div className="watchlist-app">
            <Sidebar/>
            <Login/>
        </div>
    )
}

export default WatchlistApp
