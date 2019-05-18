import React from 'react';
import defAvatar from '../../../img/avatar.png';
import { userType } from "../../types/WatchlistTypes";

const Greet = ({ activeUser }) => {
    const makeAvatarImg = () => {
        const imgUrl = activeUser
            ? activeUser.picture
            : defAvatar;

        return <img
            src={ imgUrl }
            className="avatar"
            alt="User avatar"
        />
    };

    const makeGreetText = () => {
        const name = activeUser
            ? activeUser.name
            : 'Hola';

        return <span className="greet-text">{ name }</span>
    };

    return (
        <div className="greet">
            { makeAvatarImg() }
            { makeGreetText() }
        </div>
    )
};

Greet.propTypes = {
    user: userType
};

export default Greet;
