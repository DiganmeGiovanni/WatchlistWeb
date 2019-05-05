import React, { Component } from 'react';
import Greet from "./Greet";
import SidebarItem from "./SidebarItem";

class Sidebar extends Component {

    static makeListsItems() {
        return [
            <SidebarItem
                title="Bienvenido"
                active={ true }
                key="item-welcome"
            />
        ]
    }

    static makeLinks() {
        return [
            <SidebarItem title="Recomendaciones" key="item-suggestions"/>,
            <SidebarItem title="Próximos estrenos" key="item-incoming"/>,
            <SidebarItem title="Generos" key="item-genres"/>
        ];
    }

    render() {
        return (
            <div className="sidebar">
                <Greet/>
                { Sidebar.makeListsItems() }

                <div className="text-center pt-5">
                    <button className="btn btn-primary">
                        Crear una lista
                    </button>

                    <hr/>
                </div>

                { Sidebar.makeLinks() }
            </div>
        )
    }
}

export default Sidebar;
