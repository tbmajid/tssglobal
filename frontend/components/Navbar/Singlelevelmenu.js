import * as React from "react";
import Button from "@mui/material/Button";
import Link from "next/link";
import { useRouter } from "next/router";

const SingleLevelMenu = ({ item }) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const router = useRouter();
  return (
    <Button
      id="basic-button"
      onClick={handleCloseNavMenu}
      sx={{ my: 2, color: "#022366", fontWeight: "bold", display: "block" }}
    >
      <Link href={item.plink}>
        <div className={router.pathname == item.plink ? "selected" : ""}>
          <a>{item.title}</a>
        </div>
      </Link>
    </Button>
  );
};

export default SingleLevelMenu;
