import * as React from "react";
import Curation from "./curation";

export default {
  title: "Curation",
};

const postLinks = ["First Post", "Second Post", "Third Item"];

export const header = () => <Curation postLinks={postLinks}></Curation>;
