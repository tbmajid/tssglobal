import { useQuery } from "urql";
import { ALL_POST_QUERY } from "../lib/query";
import AllPosts from "../components/Allposts";
import PageHero from "../components/PageHero";
import { Box } from "@mui/material";

export default function PostList() {
  //Fetch data from Strapi
  const [queryData] = useQuery({ query: ALL_POST_QUERY });
  const { data, fetching } = queryData;

  if (fetching) return <p>Loading..</p>;
  const posts = data.blogposts.data;

  console.log(posts);
  return (
    <div>
      <PageHero title="Blog" />
      <Box sx={{ typography: "h6", p: 2, margin: 2 }}>
        {posts.map((post) => (
          <AllPosts key={post.id} post={post} sx={{ pb: 2 }} />
        ))}
      </Box>
    </div>
  );
}
