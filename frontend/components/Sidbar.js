import Link from "next/link";
import { Typography } from "@mui/material";

const Sidebar = ({ post }) => {
  const { title, date, description, slug } = post.attributes;
  return (
    <div>
      <Link href={`/posts/${slug}`}>
        <a>
          <Typography variant="body1" sx={{ p: 1 }}>
            {title}
          </Typography>
        </a>
      </Link>
    </div>
  );
};

export default Sidebar;
