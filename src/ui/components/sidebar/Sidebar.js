import React from 'react';
import Greet from "./Greet";
import SidebarItem from "./SidebarItem";
import PropTypes from "prop-types";
import { listType, userType } from "../../types/WatchlistTypes";

const Sidebar = ({ user, lists, selectedListId, selectList, fetchLists }) => {

    const makeExtraLinks = () => {
        return [
            <SidebarItem
                title="Recomendaciones"
                key="item-suggestions"
            />,
            <SidebarItem
                title="Próximos estrenos"
                key="item-incoming"
            />,
            <SidebarItem
                title="Generos"
                key="item-genres"
            />
        ];
    };

    const makeListsItems = () => {
        if (!user) {
            return [
                <SidebarItem
                    title="Bienvenido"
                    active={ true }
                    key="item-welcome"
                />
            ];
        }

        if (lists == null) {
            fetchLists(user.id);
            return [
                <SidebarItem
                    title="Bienvenido"
                    active={ true }
                    key="item-welcome"
                />
            ];
        }

        return lists.map((list, idx) => (
            <SidebarItem
                id={ list.id }
                title={ list.name }
                active={ selectedListId === list.id }
                key={`list-${ idx }`}
                selectList={ selectList }
            />
        ))
    };

    const makeCreateListBtn = () => {
        return <div className="text-center pt-5">
            <button className={`btn btn-primary ${ user ? '' : 'd-none'}`}
                    disabled={ !user }
            >
                Crear una lista
            </button>

            <hr/>
        </div>
    };

    return (
        <div className="sidebar">
            <Greet activeUser={ user }/>

            { makeListsItems() }
            { makeCreateListBtn() }
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
