import React from 'react';
import defAvatar from '../../../img/avatar.png';
import PropTypes from 'prop-types'
import styles from './Greet.module.scss'

const Greet = ({ name, pictureUrl }) => {
    const makeAvatarImg = () => {
        const imgUrl = pictureUrl
            ? pictureUrl
            : defAvatar;

        return <img
            src={ imgUrl }
            className={ styles.avatar }
            alt="User avatar"
        />
    };

    const makeGreetText = () => {
        const greetText = name
            ? `Hola, ${name}`
            : 'Hola';

        return <span className={ styles.greet.text }>{ greetText }</span>
    };

    return (
        <div className={ styles.greet }>
            { makeAvatarImg() }
            { makeGreetText() }
        </div>
    )
};

Greet.propTypes = {
    name: PropTypes.string,
    pictureUrl: PropTypes.string
};

export default Greet;
