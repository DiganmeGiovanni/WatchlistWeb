import React from 'react';
import '../../sass/watchlist.scss';
import LoginContainer from "../containers/LoginContainer";
import Sidebar from "./sidebar/Sidebar";

function WatchlistApp() {
    return (
        <div className="watchlist-app">
            <Sidebar/>

            <div className="section-content">
                <LoginContainer/>
            </div>
        </div>
    )
}

export default WatchlistApp
