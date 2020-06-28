import { Flex } from "theme-ui";
import { Props } from "react";

const Layout = (props: Props<React.ReactChildren>) => (
  <Flex
    className="layout"
    sx={{
      maxWidth: 1024,
      flexDirection: "column",
      margin: "0 auto",
    }}
  >
    {props.children}
  </Flex>
);

export default Layout;
