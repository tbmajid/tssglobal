import { useQuery } from "urql";
import { ALL_POST_QUERY } from "../lib/query";
import AllPosts from "../components/Allposts";

export default function PostList() {
  //Fetch data from Strapi
  const [queryData] = useQuery({ query: ALL_POST_QUERY });
  const { data, fetching } = queryData;

  if (fetching) return <p>Loading..</p>;
  const posts = data.blogposts.data;

  console.log(posts);
  return (
    <div>
      {posts.map((post) => (
        <AllPosts key={post.id} post={post} />
      ))}
    </div>
  );
}
