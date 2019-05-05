import React from 'react';
import PropTypes from "prop-types";
import defAvatar from '../../../img/avatar.png';

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
            ? `Hola, ${ activeUser.name }`
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
    user: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        picture: PropTypes.string.isRequired,
        created_at: PropTypes.string.isRequired,
        updated_at: PropTypes.string.isRequired
    })
};

export default Greet;
