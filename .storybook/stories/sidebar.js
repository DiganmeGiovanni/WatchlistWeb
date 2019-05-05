import React from "react";
import { storiesOf } from "@storybook/react";
import Sidebar from "../../src/ui/components/sidebar/Sidebar";

const user = {
    "id": 2,
    "name": "Donald Monroe",
    "email": "",
    "picture": "https://www.shareicon.net/data/2016/05/24/770136_man_512x512.png",
    "created_at": "2019-05-01T13:03:06.322470Z",
    "updated_at": "2019-05-01T13:03:06.322477Z"
};

const lists = [
    {
        "id": 1,
        "name": "Tip inspiration",
        "is_default_list": true,
        "created_at": "2019-05-01T13:03:06.339644Z",
        "updated_at": "2019-05-01T13:03:06.339654Z",
        "deleted": false
    },
    {
        "id": 2,
        "name": "Biographies",
        "is_default_list": false,
        "created_at": "2019-05-01T13:03:06.341410Z",
        "updated_at": "2019-05-01T13:03:06.341417Z",
        "deleted": false
    },
    {
        "id": 3,
        "name": "Chill",
        "is_default_list": false,
        "created_at": "2019-05-01T13:03:06.342601Z",
        "updated_at": "2019-05-01T13:03:06.342612Z",
        "deleted": false
    },
    {
        "id": 4,
        "name": "Action",
        "is_default_list": false,
        "created_at": "2019-05-01T13:03:06.355223Z",
        "updated_at": "2019-05-01T13:03:06.355230Z",
        "deleted": false
    },
    {
        "id": 5,
        "name": "For the girls",
        "is_default_list": false,
        "created_at": "2019-05-01T13:03:06.356301Z",
        "updated_at": "2019-05-01T13:03:06.356307Z",
        "deleted": false
    }
];

storiesOf("Sidebar", module)
    .add('Without session', () => (
        <Sidebar/>
    ))
    .add('With default list only', () => (
        <Sidebar
            user={ user }
            lists={ lists.filter(list => {
                return list.is_default_list;
            }) }
        />
    ))
    .add('With multiple lists', () => (
        <Sidebar
            user={ user }
            lists={ lists }
        />
    ));
