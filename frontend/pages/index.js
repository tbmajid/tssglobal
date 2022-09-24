//Material UI
import * as React from "react";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useMediaQuery } from "@mui/material";
//END OF MATERIAL UI
import { useQuery } from "urql";
import { POST_QUERY } from "../lib/query";
import Posts from "../components/Posts";

import Hero from "../components/Homepage/Hero";
import HeroCards from "../components/Homepage/HeroCards";
import { PostGrid } from "../styles/GlobalStyled";
import MinimizeIcon from "@mui/icons-material/Minimize";
import HomeIntro from "../components/Homepage/HomeIntroSection";
import WhyUs from "../components/Homepage/WhyUs";

const Home = () => {
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

      <HeroCards />
      <HomeIntro />
      <Box sx={{ my: 4 }}>
        {" "}
        <Typography
          variant="h5"
          component="h2"
          sx={{
            color: "#4731d4",
            pl: 2,
            ml: 3,
            mt: 5,
            fontWeight: "bold",
            letterSpacing: 5,
            textTransform: "uppercase",
          }}
        >
          <MinimizeIcon fontSize="small" />
          Latest From Our Blog
        </Typography>
        <Typography variant="body1" component="h1" gutterBottom sx={{ ml: 2 }}>
          <PostGrid>
            {posts.map((post) => (
              <Posts key={post.id} post={post} />
            ))}
          </PostGrid>{" "}
        </Typography>
      </Box>
      <WhyUs />
    </div>
  );
};

export default Home;
