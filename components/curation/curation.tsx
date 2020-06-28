import * as React from "react";
import Link from "next/link";

interface Props {
  postLinks: Array<string>;
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
