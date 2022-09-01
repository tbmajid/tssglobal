import { Box, Grid, useMediaQuery } from "@mui/material";
import NewsletterSubscribe from "./NewsletterSubscribe";

const Footer = () => {
  const largeScreen = useMediaQuery((theme) => theme.breakpoints.up("md"));

  return (
    <div>
      <Grid
        container
        spacing={3}
        justifyContent="flex-end"
        sx={{ p: 2, color: "white", backgroundColor: "#022366" }}
      >
        <Grid item>
          <NewsletterSubscribe />
        </Grid>
      </Grid>
      <Grid
        container
        direction={largeScreen ? "row" : "column"}
        aligItem="center"
        justifyContent="space-between"
        spacing={3}
        sx={{ p: 2, color: "white", backgroundColor: "#022366" }}
      >
        <Grid item>&copy; {new Date().getFullYear()} TSS Global Limited</Grid>

        <Grid item>Privacy Policy | Cookies Policy</Grid>
      </Grid>
    </div>
  );
};

export default Footer;
