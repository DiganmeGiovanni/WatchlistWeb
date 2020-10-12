import React from 'react';
import PropTypes from 'prop-types'

import Greet from './greet/Greet'
import SidebarItem from './sidebarItem/SidebarItem'

import { listType, userType } from '../../types/WatchlistTypes'
import styles from './Sidebar.module.scss'


export const SpecialItemsIds = {
    SUGGESTIONS: -1,
    INCOMING: -2,
    GENRES: -3
}

const Sidebar = ({
    user=null,
    lists=[],
    selectedListId,
    selectList
}) => {

    const makeExtraLinks = () => {
        return [
            <SidebarItem
                title='Recomendaciones'
                key='item-suggestions'
                active={ selectedListId === SpecialItemsIds.SUGGESTIONS }
                onClick={ () => selectList(SpecialItemsIds.SUGGESTIONS) }
            />,
            <SidebarItem
                title='Próximos estrenos'
                key='item-incoming'
                active={ selectedListId === SpecialItemsIds.INCOMING }
                onClick={ () => selectList(SpecialItemsIds.INCOMING) }
            />,
            <SidebarItem
                title='Generos'
                key='item-genres'
                active={ selectedListId === SpecialItemsIds.GENRES }
                onClick={ () => selectList(SpecialItemsIds.GENRES) }
            />
        ]
    }

    const makeListsItems = () => {
        return lists.map((list, idx) => (
            <SidebarItem
                title={ list.name }
                active={ selectedListId === list.id }
                key={`list-${ idx }`}
                onClick={ () => selectList(list.id) }
            />
        ))
    }

    const makeCreateListBtn = () => {
        return <div className='text-center pt-5'>
            <button className={ styles.btnPrimary }>
                Crear una lista
            </button>
        </div>
    }

    return (
        <div className={ styles.sidebar }>
            { user && <Greet
                name={ user.name }
                pictureUrl={ user.picture }
            />}

            { makeListsItems() }
            { user && makeCreateListBtn() }
            <hr className={ styles.hr }/>
            { makeExtraLinks() }
        </div>
    )
}

Sidebar.propTypes = {
    user: userType,
    lists: PropTypes.arrayOf(listType),
    selectedListId: PropTypes.number,

    selectList: PropTypes.func.isRequired
}

export default Sidebar
