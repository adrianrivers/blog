import { NavLink, Flex } from "theme-ui";

const Header = () => (
  <header>
    <Flex as="nav">
      <NavLink href="/" p={2}>
        Home
      </NavLink>
      <NavLink href="/about" p={2}>
        About
      </NavLink>
    </Flex>
  </header>
);

export default Header;
