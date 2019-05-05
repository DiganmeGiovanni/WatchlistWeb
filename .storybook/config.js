import { configure } from "@storybook/react";
import "../src/sass/watchlist.scss";

const loadStories = () => {
    require('./stories/welcome');
    require('./stories/sidebar');
};

configure(loadStories, module);
