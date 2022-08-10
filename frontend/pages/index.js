//Material UI
import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Grid, useMediaQuery } from "@mui/material";
//END OF MATERIAL UI
import { useQuery } from "urql";
import { POST_QUERY } from "../lib/query";
import Posts from "../components/Posts";
import Link from "next/link";
import Hero from "../components/Hero";
import Homecontent from "../components/Homepagemain";
import { PostGrid } from "../styles/HPGrid";
import MinimizeIcon from "@mui/icons-material/Minimize";
import HomeIntro from "../components/HomeIntroSection";
import WhyUs from "../components/WhyUs";
import Footer from "../components/Footer";

export default function Home() {
  //MediaQuery
  const largeScreen = useMediaQuery((theme) => theme.breakpoints.up("md"));
  //Fetch data from Strapi
  const [queryData] = useQuery({ query: POST_QUERY });
  const { data, fetching } = queryData;

  if (fetching) return <p>Loading..</p>;
  const posts = data.blogposts.data;

  return (
    <div>
      <Hero />

      <Homecontent />
      <HomeIntro />
      <Box sx={{ my: 4 }}>
        {" "}
        <Typography
          variant="h5"
          component="h2"
          sx={{
            color: "#4731d4",
            pl: 2,
            fontWeight: "bold",
            letterSpacing: 5,
            textTransform: "uppercase",
          }}
        >
          <MinimizeIcon fontSize="small" />
          Latest From Our Blog
        </Typography>
        <Typography variant="h6" component="h1" gutterBottom>
          <PostGrid>
            {posts.map((post) => (
              <Posts key={post.id} post={post} />
            ))}
          </PostGrid>{" "}
        </Typography>
      </Box>
      <WhyUs />
      <Footer />
    </div>

    // {posts.map((post) => (
    //   <Posts key={post.id} post={post} />
    // ))}
    // <p>
    //   <Link href={`/postlist`}>
    //     <a>All Posts</a>
    //   </Link>
    // </p>
    // </div>
  );
}
