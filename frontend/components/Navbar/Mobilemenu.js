import * as React from "react";
import { useState } from "react";

import Box from "@mui/material/Box";

import { Drawer } from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import List from "@mui/material/List";

import Button from "@mui/material/Button";
import HamburgerMenu from "./Hamburger.js";
import CloseIcon from "@mui/icons-material/Close";

import Link from "next/link";

import IconButton from "@mui/material/IconButton";

import Image from "next/image.js";

const MobileMenu = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const handleDrawerClick = () => {
    setOpenDrawer(!openDrawer);
  };
  return (
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
          onClick={handleDrawerClick}
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
        ></List>
        <HamburgerMenu handleDrawerClick={handleDrawerClick} />{" "}
      </Drawer>
      <IconButton
        sx={{ color: "black", marginLeft: "auto" }}
        onClick={handleDrawerClick}
      >
        <MenuIcon color="white" />
      </IconButton>
    </Box>
  );
};

export default MobileMenu;
