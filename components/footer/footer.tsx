/** @jsx jsx */
import * as React from "react";
import { jsx } from "theme-ui";
import { Flex, NavLink } from "theme-ui";

const Footer = () => (
  <footer sx={{ margin: "10px 0 30px" }}>
    <Flex as="nav">
      <NavLink href="/" p={2}>
        Home
      </NavLink>
      <NavLink href="/about" p={2}>
        About
      </NavLink>
    </Flex>
  </footer>
);

export default Footer;
