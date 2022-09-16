import * as React from "react";
import Menu from "@mui/material/Menu";

import Button from "@mui/material/Button";

import MenuItem from "@mui/material/MenuItem";

import Link from "next/link";
import { useRouter } from "next/router";

const Dropdown = ({ item }) => {
  const { submenu: children } = item;

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const router = useRouter();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorEl(null);
  };
  //check whether the page is active
  const active = (element) => router.pathname == element.plink;
  return (
    <React.Fragment>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        // onMouseOver={handleClick}
        sx={{
          my: 2,
          color: "#022366",
          fontWeight: "bold",
          display: "block",
        }}
      >
        <nav
          className={
            router.pathname == item.plink || item.submenu.some(active)
              ? "selected"
              : ""
          }
        >
          {item.title}
        </nav>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleCloseNavMenu}
        // MenuListProps={{ onMouseLeave: handleCloseNavMenu }}
        elevation={0}
      >
        {children.map((child, key) => (
          <MenuItem key={key} item={child} onClick={handleCloseNavMenu}>
            <Link href={child.plink}>
              <div>
                <a>{child.title}</a>
              </div>
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </React.Fragment>
  );
};

export default Dropdown;
