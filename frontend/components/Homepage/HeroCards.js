import { Grid, useMediaQuery, Typography } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import ApprovalIcon from "@mui/icons-material/Approval";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";

import { HeroTextCards } from "../../styles/Herostyle";
const HeroCards = () => {
  const largeScreen = useMediaQuery((theme) => theme.breakpoints.up("md"));
  return (
    <>
      {" "}
      <Grid
        container
        direction={largeScreen ? "row" : "column"}
        aligItem="center"
        justifyContent="center"
        spacing={largeScreen ? 3 : 0}
        sx={{ p: 1 }}
      >
        <HeroTextCards bgColor="#4731d4" color="#FFFFFF">
          <Grid item xs={12} minWidth="18rem">
            {" "}
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
              sx={{ p: 2 }}
            >
              <Grid item>
                <SchoolIcon fontSize="large" />
              </Grid>
              <Grid item>
                <Typography variant="h5" align="center">
                  {" "}
                  UK University Admission
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </HeroTextCards>
        <HeroTextCards bgColor="#cdf185" color="#000000">
          <Grid item xs={12} minWidth="18rem">
            {" "}
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
              sx={{ p: 2 }}
            >
              <Grid item>
                <ApprovalIcon fontSize="large" />
              </Grid>
              <Grid item>
                <Typography variant="h5" align="center">
                  {" "}
                  Visa Support
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </HeroTextCards>
        <HeroTextCards bgColor="#253ebb" color="#FFFFFF">
          <Grid item xs={12} minWidth="18rem">
            {" "}
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
              sx={{ p: 2 }}
            >
              <Grid item>
                <LocalLibraryIcon fontSize="large" />
              </Grid>
              <Grid item>
                <Typography variant="h5" align="center">
                  IELTS Coaching
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </HeroTextCards>
      </Grid>
      {/* Welcome Text */}
    </>
  );
};

export default HeroCards;
