import Link from "next/link";
import Layout from "../components/layout/layout";
import { readdirSync } from "fs";

interface Props {
  postLinks: [];
}

export default function Home({ postLinks }: Props) {
  console.log(postLinks);
  return (
    <Layout>
      <main className="main--content">
        <ul>
          {postLinks.map((link, key) => {
            return (
              <li key={key}>
                <Link href={`blog/${link}`}>
                  <a>{link}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </main>
    </Layout>
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
