import { configure } from "@storybook/react";
import "../src/sass/watchlist.scss";

const loadStories = () => {
    require('./stories/index')
};

configure(loadStories, module);
