import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";

import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";

import { myMenu } from "./MenuList.js";
import Link from "next/link";
import { ChildrenDetect } from "./utils";
import { SubCheck } from "./Subcheck.js";

import Image from "next/image.js";
import Search from "../search.js";
import Dropdown from "./Dropdown.js";
import MobileMenu from "./Mobilemenu.js";
import SingleLevelMenu from "./Singlelevelmenu.js";

const ResponsiveAppBar = () => (
  <AppBar
    position="static"
    elevation={0}
    sx={{ color: "#022366", backgroundColor: "#ffffff" }}
  >
    <Container maxWidth="xl">
      <Toolbar disableGutters>
        {/* Mobile Screen */}
        <MobileMenu />
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
      <Box
        display="flex"
        justifyContent="flex-end"
        alignItems="flex-end"
        sx={{ typography: "body1", mb: 2 }}
      >
        <Search />
      </Box>
    </Container>
  </AppBar>
);

const ItemSelect = ({ item }) => {
  let Component;
  if (ChildrenDetect(item)) {
    Component = MultiLevel;
  } else if (SubCheck(item)) {
    Component = DoubleLevel;
  } else {
    Component = SingleLevel;
  }

  return <Component item={item} />;
};
const SingleLevel = ({ item }) => <SingleLevelMenu item={item} />;

const MultiLevel = ({ item }) => <Dropdown item={item} />;

const DoubleLevel = ({ item }) => <Dropdown item={item} />;

export default ResponsiveAppBar;
