import * as React from "react";
import { useQuery } from "urql";

import { POST_QUERY } from "../lib/query";

import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import Sidebar from "./Sidbar";

const PostSideBar = () => {
  const [queryData] = useQuery({ query: POST_QUERY });
  const { data, fetching } = queryData;

  if (fetching) return <p>Loading..</p>;
  const posts = data.blogposts.data;
  return (
    <React.Fragment>
      <Card variant="outlined">
        <CardContent>
          <Typography sx={{ fontSize: 17 }} color="text.secondary" gutterBottom>
            Recent Posts
          </Typography>
          <Typography variant="body2" component="div">
            {posts.map((post) => (
              <Sidebar key={post.id} post={post} sx={{ pb: 2, mt: 2 }} />
            ))}
          </Typography>
        </CardContent>
      </Card>
    </React.Fragment>
  );
};

export default PostSideBar;
