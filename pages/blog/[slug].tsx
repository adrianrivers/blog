import Head from "next/head";
import marked from "marked";
import fs, { readdirSync } from "fs";
import matter from "gray-matter";
import path from "path";

interface Props {
  title: string;
  description: string;
  content: string;
}

interface StaticProps {
  params: {
    slug: string;
  };
}

const createMarkup = (htmlString: string) => {
  return {
    __html: htmlString,
  };
};

const Post = ({ title, description, content }: Props) => {
  const parsedContent = createMarkup(content);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="author" content="Adrian Rivers" />
        <meta name="description" content={description} />
      </Head>
      <div className="post">
        <div className="post--head">
          <h1>{title}</h1>
          <h4>{description}</h4>
        </div>
        <div
          className="post--content"
          dangerouslySetInnerHTML={parsedContent}
        />
      </div>
    </>
  );
};

export const getStaticPaths = async (): Promise<{}> => {
  const files = readdirSync("posts");
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({
  params: { slug },
}: StaticProps): Promise<{}> => {
  const markdown = fs.readFileSync(path.join("posts", `${slug}.md`));
  const post = matter(markdown);
  const {
    data: { title, description },
    content,
  } = post;

  return {
    props: {
      title,
      description,
      content: marked(content),
    },
  };
};

export default Post;
