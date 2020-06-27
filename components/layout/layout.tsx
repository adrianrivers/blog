/** @jsx jsx */
import { jsx } from "theme-ui";
import { Props } from "react";

const Layout = (props: Props<React.ReactChildren>) => (
  <div
    className="layout"
    sx={{
      maxWidth: 1024,
    }}
  >
    {props.children}
  </div>
);

export default Layout;
