import { Box, Grid, useMediaQuery, Typography } from "@mui/material";
import NewsletterSubscribe from "./NewsletterSubscribe";

const Footer = () => {
  const largeScreen = useMediaQuery((theme) => theme.breakpoints.up("md"));

  return (
    <div>
      <Grid
        container
        spacing={3}
        direction={largeScreen ? "row" : "column"}
        alignItems="center"
        justifyContent={largeScreen ? "space-between" : "center"}
        sx={{ p: 3, color: "white", backgroundColor: "#070d25" }}
      >
        <Grid item alignItems="center">
          <Typography
            sx={{ fontSize: 12 }}
            textAlign={largeScreen ? "left" : "center"}
          >
            53A Mile End Road,
            <br />
            London E1 4TT
            <br />
            Tel: 02070011176
            <br />
            Email: contact@tssglobal.co.uk
          </Typography>
        </Grid>
        <Grid item>
          <NewsletterSubscribe />
        </Grid>
      </Grid>
      <Grid
        container
        direction={largeScreen ? "row" : "column"}
        justifyContent={largeScreen ? "space-between" : "center"}
        alignItems="center"
        spacing={largeScreen ? 0 : 0}
        sx={{ color: "white", backgroundColor: "#070d25", p: 3 }}
      >
        <Grid item>
          <Typography sx={{ fontSize: 12 }}>
            &copy; {new Date().getFullYear()} TSS Global Limited
          </Typography>
        </Grid>

        <Grid item>
          <Typography sx={{ fontSize: 12 }}>
            Privacy Policy | Cookies Policy
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
