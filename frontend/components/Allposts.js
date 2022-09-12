import Link from "next/link";
import { Typography, Grid } from "@mui/material";

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
          <Typography variant="h6" sx={{ mb: 6 }}>
            {" "}
            {description}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default AllPosts;
