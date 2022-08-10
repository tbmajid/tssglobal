import Link from "next/link";
import ResponsiveAppBar from "./Navbar";

const AllPosts = ({ post }) => {
  //Get data from props
  const { title, date, description, slug } = post.attributes;

  return (
    <div>
      <Link href={`/posts/${slug}`}>
        <a>
          <h1>{title}</h1>
        </a>
      </Link>
      <p>{date}</p>
      <p> {description}</p>
    </div>
  );
};

export default AllPosts;
