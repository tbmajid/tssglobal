import { useQuery } from "urql";
import { GET_POST_QUERY } from "../../lib/query";
import { useRouter } from "next/router";
import { Box, Grid } from "@mui/material";
import PostSideBar from "../../components/Postsidebar";
import SideContact from "../../components/Sidecontact";
import ReactMarkdown from "react-markdown";

const BlogPost = () => {
  //Fetch Slug
  const { query } = useRouter();
  //Fetch Graphql data
  const [queryData] = useQuery({
    query: GET_POST_QUERY,
    variables: { slug: query.slug },
  });

  const { data, fetching, error } = queryData;
  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Error loading data {error.message}</p>;
  console.log(data);
  const { title, date, body, media } = data.blogposts.data[0].attributes;

  console.log(data);
  return (
    <div>
      <Grid container spacing={2} justifyContent="space-between" sx={{ mb: 2 }}>
        <Grid item xs={10} sm={10} md={6} sx={{ margin: 3 }}>
          <Box sx={{ typography: "h4", p: 2 }}>{title}</Box>
          <Box sx={{ typography: "body1", pl: 2 }}>{date}</Box>
          {/* Small Devices */}
          <Box sx={{ pt: 2, pl: 2, display: { xs: "block", md: "none" } }}>
            <img
              src={media.data.attributes.formats.small.url}
              alt={title}
              width={300}
            />
          </Box>
          {/* Larger Devices */}
          <Box sx={{ pt: 2, pl: 2, display: { xs: "none", md: "block" } }}>
            <img src={media.data.attributes.formats.small.url} alt={title} />
          </Box>
          <Box paragraph={true} sx={{ typography: "body1", p: 2 }}>
            {" "}
            <div className="post-body">
              <ReactMarkdown>{body}</ReactMarkdown>
            </div>
          </Box>
        </Grid>
        <Grid item xs={12} sm={10} md={3} sx={{ p: 2 }}>
          <Grid
            container
            spacing={2}
            justifyContent="space-between"
            sx={{ mb: 2, mt: 2 }}
            flexDirection="column"
          >
            <Grid item>
              <Box sx={{ ml: 2 }}>
                <PostSideBar />
              </Box>
            </Grid>
            <Grid item sx={{ mt: 2 }}>
              <Box sx={{ ml: 2 }}>
                <SideContact />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default BlogPost;
