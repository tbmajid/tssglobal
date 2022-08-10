import * as React from "react";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import ListSubheader from "@mui/material/ListSubheader";
import { Drawer, Collapse, Button, Box } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import { myMenu } from "./MenuList";

import Link from "next/link";

const HamburgerMenu = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
          sx={{ minWidth: 300 }}
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              Navigation
            </ListSubheader>
          }
        >
          {myMenu.map((page, index) =>
            page.submenu ? (
              <div>
                <ListItemButton key={index} onClick={handleClick}>
                  <ListItemText sx={{ textTransform: "uppercase" }}>
                    {page.title}
                  </ListItemText>
                  {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>

                <Collapse in={open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {page.submenu.map((sub, index) => {
                      return (
                        <ListItemButton key={index}>
                          <ListItem key={index}>
                            <ListItemText>
                              {/* <Link href={sub.plink}> */}
                              {console.log(sub.plink)}
                              <div>
                                <a>{sub.title}</a>
                              </div>
                              {/* </Link> */}
                            </ListItemText>
                          </ListItem>
                        </ListItemButton>
                      );
                    })}
                  </List>
                </Collapse>
              </div>
            ) : (
              <ListItemButton key={index}>
                <ListItemIcon>
                  <ListItemText sx={{ textTransform: "uppercase" }}>
                    {page.title}
                  </ListItemText>
                </ListItemIcon>
              </ListItemButton>
            )
          )}
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "black", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon color="white" />
      </IconButton>
    </Box>
  );
};

export default HamburgerMenu;
