import Link from "next/link";

interface Props {
  postLinks: [];
}

const Curation = ({ postLinks }: Props) => (
  <div>
    <ul>
      {postLinks.map((link, key) => (
        <li key={key}>
          <Link href={`blog/${link}`}>
            <a>{link}</a>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Curation;
