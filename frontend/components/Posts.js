import Link from "next/link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Grid, Typography, Box } from "@mui/material";
import { HoverColor } from "../styles/HPGrid";

const Posts = ({ post }) => {
  //Get data from props
  const { title, date, description, slug } = post.attributes;

  return (
    <div>
      <Grid item>
        <Link href={`/posts/${slug}`}>
          <a>
            <Typography sx={{ lineHeight: 1.5 }}>
              <h1>{title}</h1>
            </Typography>
          </a>
        </Link>

        {/* <img src={media.data.attributes.formats.small.url} alt="" /> */}
        <p>{date}</p>
        <Box sx={{ mt: 2 }}> {description}</Box>
      </Grid>
      <p>
        {" "}
        <Link href={`/posts/${slug}`}>
          <a>
            {" "}
            <Grid container sx={{ mt: 2 }}>
              {" "}
              <Grid item>Read More</Grid>
              <Grid item>
                <NavigateNextIcon fontSize="large" />
              </Grid>
            </Grid>{" "}
          </a>
        </Link>
      </p>
    </div>
  );
};

export default Posts;
