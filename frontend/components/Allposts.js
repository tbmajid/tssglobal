import Link from "next/link";
import { Typography, Grid } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const AllPosts = ({ post }) => {
  //Get data from props
  const { title, date, description, slug } = post.attributes;

  return (
    <div>
      <Grid container md={8}>
        <Grid item>
          <Link href={`/posts/${slug}`}>
            <a>
              <Typography variant="h3">{title}</Typography>
            </a>
          </Link>
          <Typography variant="body1">{date}</Typography>
          <Typography variant="h6"> {description}</Typography>
        </Grid>
        <Grid item>
          {" "}
          <Link href={`/posts/${slug}`}>
            <a>
              {" "}
              <Grid container sx={{ pt: 2, mb: 6 }}>
                {" "}
                <Grid item>Read More</Grid>
                <Grid item>
                  <NavigateNextIcon fontSize="large" />
                </Grid>
              </Grid>{" "}
            </a>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};

export default AllPosts;
