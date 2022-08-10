// import * as React from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
// import Container from "@mui/material/Container";

// import Button from "@mui/material/Button";
// import MenuItem from "@mui/material/MenuItem";

// import Link from "next/link";
// import Image from "next/image";
// import HamburgerMenu from "./Hamburger";
// import { myMenu } from "./MenuList";

// // const myMenu = [
// //   {
// //     title: "about",
// //   },
// //   {
// //     title: "services",
// //     submenu: [{ title: "IELTS" }, { title: "Advice" }],
// //   },
// //   {
// //     title: "blog",
// //   },
// //   {
// //     title: "contact",
// //   },
// // ];

// //Menu
// //

// const ResponsiveAppBar = () => {
//   const [anchorElNav, setAnchorElNav] = React.useState(null);

//   const open = Boolean(anchorElNav);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   return (
//     <AppBar position="static">
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//           <HamburgerMenu />

//           <Link href="/">
//             <a>
//               <Image
//                 src="https://tssglobal.74by4.com/wp-content/uploads/2021/04/logo.png"
//                 alt="logo"
//                 width={150}
//                 height={62}
//                 quality={75}
//               />
//             </a>
//           </Link>

//           {/* Bigger screen */}
//           <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
//             {myMenu.map((page) =>
//               page.submenu ? (
//                 <div>
//                   <Button
//                     id="basic-button"
//                     aria-controls={open ? "basic-menu" : undefined}
//                     aria-haspopup="true"
//                     aria-expanded={open ? "true" : undefined}
//                     onClick={handleOpenNavMenu}
//                     sx={{ my: 2, color: "white", display: "block" }}
//                   >
//                     {page.title}
//                   </Button>

//                   {}
//                   {page.submenu.map((sub, index) => {
//                     return (
//                       <Menu
//                         id="basic-menu"
//                         key={page}
//                         anchorEl={anchorElNav}
//                         open={open}
//                         onClose={handleCloseNavMenu}
//                         MenuListProps={{
//                           "aria-labelledby": "basic-button",
//                         }}
//                       >
//                         <MenuItem key={index} onClick={handleCloseNavMenu}>
//                           <a>
//                             {" "}
//                             <div>{sub.title}</div>
//                           </a>
//                         </MenuItem>{" "}
//                       </Menu>
//                     );
//                   })}
//                 </div>
//               ) : (
//                 <Button
//                   key={page}
//                   onClick={handleCloseNavMenu}
//                   sx={{ my: 2, color: "white", display: "block" }}
//                 >
//                   <Link href={page.plink}>
//                     <div>
//                       <a> {page.title}</a>
//                     </div>
//                   </Link>
//                 </Button>
//               )
//             )}
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// };
// export default ResponsiveAppBar;
