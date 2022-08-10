import * as React from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Drawer } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import List from "@mui/material/List";
import Container from "@mui/material/Container";

import Button from "@mui/material/Button";
import HamburgerMenu from "./Hamburger.js";
import CloseIcon from "@mui/icons-material/Close";
import MenuItem from "@mui/material/MenuItem";
import { myMenu } from "./MenuList.js";
import Link from "next/link";
import { ChildrenDetect } from "./utils";
import IconButton from "@mui/material/IconButton";
import ListSubheader from "@mui/material/ListSubheader";
import Image from "next/image.js";
import { useRouter } from "next/router";

const ResponsiveAppBar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  //MUI theme for menu buttons

  return (
    <AppBar
      position="static"
      sx={{ color: "#022366", backgroundColor: "#ffffff" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Mobile Screen */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <Box sx={{ p: 2 }}>
              {" "}
              <Link href="/">
                <a>
                  <Image
                    src="/tss-logo.svg"
                    alt="logo"
                    width={150}
                    height={62}
                    quality={75}
                  />
                </a>
              </Link>
            </Box>
            <Drawer
              anchor="right"
              open={openDrawer}
              onClose={() => setOpenDrawer(false)}
            >
              <Button
                size="medium"
                onClick={() => setOpenDrawer(!openDrawer)}
                sx={{ marginLeft: "auto" }}
              >
                <CloseIcon />
              </Button>
              <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                sx={{
                  minWidth: 300,
                }}
                subheader={
                  <ListSubheader component="div" id="nested-list-subheader">
                    Navigation
                  </ListSubheader>
                }
              ></List>
              <HamburgerMenu />{" "}
            </Drawer>
            <IconButton
              sx={{ color: "black", marginLeft: "auto" }}
              onClick={() => setOpenDrawer(!openDrawer)}
            >
              <MenuIcon color="white" />
            </IconButton>
          </Box>
          {/* Tablet and Desktop Screen*/}
          <Box
            sx={{
              flexGrow: 1,

              display: { xs: "none", md: "flex" },
            }}
          >
            <Box sx={{ p: 2 }}>
              <Link href="/">
                <a>
                  <Image
                    src="/tss-logo.svg"
                    alt="logo"
                    width={150}
                    height={62}
                    quality={75}
                  />
                </a>
              </Link>
            </Box>

            {myMenu.map((item, key) => (
              <ItemSelect key={key} item={item} />
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

const ItemSelect = ({ item }) => {
  const Component = ChildrenDetect(item) ? MultiLevel : SingleLevel;
  return <Component item={item} />;
};
const SingleLevel = ({ item }) => {
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

const MultiLevel = ({ item }) => {
  const { submenu: children } = item;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorEl(null);
  };
  const router = useRouter();
  return (
    <React.Fragment>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        className={router.pathname == item.plink ? "selected" : ""}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{ my: 2, color: "#022366", fontWeight: "bold", display: "block" }}
      >
        {item.title}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleCloseNavMenu}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {children.map((child, key) => (
          <MenuItem
            key={key}
            item={child}
            onClick={handleCloseNavMenu}
            sx={{ color: "white", backgroundColor: "#022366" }}
          >
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
export default ResponsiveAppBar;
