import { configure } from "@storybook/react";
import "../src/sass/watchlist.scss";

const loadStories = () => {
    require('./stories/welcome');
    require('./stories/sidebar');
    require('./stories/list');
};

configure(loadStories, module);
