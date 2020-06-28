import Curation from "../components/curation/curation";
import { readdirSync } from "fs";

interface Props {
  postLinks: [];
}

export default function Home({ postLinks }: Props) {
  return (
    <div>
      <Curation postLinks={postLinks}></Curation>
    </div>
  );
}

export const getStaticProps = async (): Promise<{}> => {
  const files = readdirSync("posts");
  const postLinks = files.map((fileName) => `${fileName.replace(".md", "")}`);

  return {
    props: {
      postLinks,
    },
  };
};
