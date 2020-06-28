import { configure, addDecorator } from "@storybook/react";
import React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "../theme/theme";

const req = require.context("../components", true, /\.stories\.tsx$/);

function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

addDecorator((story) => <ThemeProvider theme={theme}>{story()}</ThemeProvider>);

configure(loadStories, module);
