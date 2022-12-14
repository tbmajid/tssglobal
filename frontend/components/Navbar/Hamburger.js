import * as React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import { Collapse } from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Link from "next/link";
import { myMenu } from "./MenuList";
import { ChildrenDetect } from "./utils";
import { SubCheck } from "./Subcheck.js";

const HamburgerMenu = ({ handleDrawerClick }) => {
  return myMenu.map((item, key) => (
    <MenuItem key={key} item={item} handleDrawerClick={handleDrawerClick} />
  ));
};

const MenuItem = ({ item, handleDrawerClick }) => {
  let Component;
  if (ChildrenDetect(item)) {
    Component = MultiLevel;
  } else if (SubCheck(item)) {
    Component = DoubleLevel;
  } else {
    Component = SingleLevel;
  }

  return <Component item={item} handleDrawerClick={handleDrawerClick} />;
};

const SingleLevel = ({ item, handleDrawerClick }) => {
  const router = useRouter();
  return (
    <ListItem button>
      <Link href={item.plink}>
        <ListItemText
          primary={item.title}
          sx={{ textTransform: "uppercase" }}
          className={router.pathname == item.plink ? "selected" : ""}
          onClick={handleDrawerClick}
        />
      </Link>
    </ListItem>
  );
};

const MultiLevel = ({ item, handleDrawerClick }) => {
  const { submenu: children } = item;
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };
  //check whether the page is active
  const active = (element) => router.pathname == element.plink;
  const router = useRouter();
  return (
    <React.Fragment>
      <ListItem button onClick={handleClick}>
        <ListItemText
          className={item.submenu.some(active) ? "selected" : ""}
          primary={item.title}
          sx={{ textTransform: "uppercase" }}
        />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List
          component="div"
          disablePadding
          sx={{
            color: "white",
            backgroundColor: "#022366",
          }}
          onClick={handleDrawerClick}
        >
          {children.map((child, key) => (
            <Link href={child.plink} key={key}>
              <MenuItem key={key} item={child} />
            </Link>
          ))}
        </List>
      </Collapse>
    </React.Fragment>
  );
};

const DoubleLevel = ({ item, handleDrawerClick }) => {
  const { submenu: children } = item;
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };
  //check whether the page is active
  const router = useRouter();
  const active = (element) => router.pathname == element.plink;
  return (
    <React.Fragment>
      <ListItem button onClick={handleClick}>
        <ListItemText
          className={item.submenu.some(active) ? "selected" : ""}
          sx={{ textTransform: "uppercase" }}
          primary={item.title}
        />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List
          component="div"
          disablePadding
          sx={{ color: "white", backgroundColor: "#022366" }}
          onClick={handleDrawerClick}
        >
          {children.map((child, key) => (
            <MenuItem key={key} item={child} />
          ))}
        </List>
      </Collapse>
    </React.Fragment>
  );
};

export default HamburgerMenu;
