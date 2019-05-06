import React from 'react';
import Greet from "./Greet";
import SidebarItem from "./SidebarItem";
import PropTypes from "prop-types";

const Sidebar = ({ user, lists, fetchLists }) => {

    const makeExtraLinks = () => {
        return [
            <SidebarItem title="Recomendaciones" key="item-suggestions"/>,
            <SidebarItem title="Próximos estrenos" key="item-incoming"/>,
            <SidebarItem title="Generos" key="item-genres"/>
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
                title={ list.name }
                key={`list-${ idx }`}
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
    user: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        picture: PropTypes.string.isRequired,
        created_at: PropTypes.string.isRequired,
        updated_at: PropTypes.string.isRequired
    }),
    lists: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        is_default_list: PropTypes.bool.isRequired
    }))
};

export default Sidebar;
