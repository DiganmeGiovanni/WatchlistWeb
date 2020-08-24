import React from 'react';
import Greet from './greet/Greet';
import SidebarItem from './sidebarItem/SidebarItem';
import PropTypes from 'prop-types';
import { listType, userType } from '../../types/WatchlistTypes';
import styles from './Sidebar.module.scss'

const Sidebar = ({ user, lists, selectedListId, selectList, fetchLists }) => {

    const makeExtraLinks = () => {
        return [
            <SidebarItem
                title='Recomendaciones'
                key='item-suggestions'
                onClick={ () => {} }
            />,
            <SidebarItem
                title='Próximos estrenos'
                key='item-incoming'
                onClick={ () => {} }
            />,
            <SidebarItem
                title='Generos'
                key='item-genres'
                onClick={ () => {} }
            />
        ];
    };

    const makeListsItems = () => {
        // if (!user) {
        //     return [
        //         <SidebarItem
        //             title='Bienvenido'
        //             active={ true }
        //             key='item-welcome'
        //         />
        //     ];
        // }

        // if (lists == null) {
        //     fetchLists(user.id);
        //     return [
        //         <SidebarItem
        //             title='Bienvenido'
        //             active={ true }
        //             key='item-welcome'
        //         />
        //     ];
        // }

        return lists.map((list, idx) => (
            <SidebarItem
                title={ list.name }
                active={ selectedListId === list.id }
                key={`list-${ idx }`}
                onClick={ selectList }
            />
        ))
    };

    const makeCreateListBtn = () => {
        return <div className='text-center pt-5'>
            <button className={ styles.btnPrimary }>
                Crear una lista
            </button>
        </div>
    };

    return (
        <div className={ styles.sidebar }>
            <Greet
                name={ user.name }
                pictureUrl={ user.picture }
            />

            { makeListsItems() }
            { makeCreateListBtn() }
            <hr className={ styles.hr }/>
            { makeExtraLinks() }
        </div>
    )
};

Sidebar.propTypes = {
    user: userType,
    lists: PropTypes.arrayOf(listType),
    selectedListId: PropTypes.number,

    selectList: PropTypes.func.isRequired,
    fetchLists: PropTypes.func.isRequired
};

export default Sidebar;
