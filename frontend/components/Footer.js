import { Box } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        typography: "body2",
        justifyContent: "space-between",
        color: "white",
        backgroundColor: "#022366",
        p: 2,
      }}
    >
      <Box>&copy; {new Date().getFullYear()} TSS Global Limited</Box>
      <Box>Privacy Policy | Cookies Policy</Box>
    </Box>
  );
};

export default Footer;
