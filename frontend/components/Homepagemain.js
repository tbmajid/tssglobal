import * as React from "react";
import { Grid, useMediaQuery, Typography } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import ApprovalIcon from "@mui/icons-material/Approval";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";

import { Address, PhoneEmail, OpeningHours } from "../styles/HPGrid";
const Homecontent = () => {
  const largeScreen = useMediaQuery((theme) => theme.breakpoints.up("md"));
  return (
    <React.Fragment>
      {" "}
      <Grid
        container
        direction={largeScreen ? "row" : "column"}
        aligItem="center"
        justifyContent="center"
        spacing={3}
        sx={{ p: 1 }}
      >
        <Address>
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
        </Address>
        <PhoneEmail>
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
        </PhoneEmail>
        <OpeningHours>
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
        </OpeningHours>
      </Grid>
      {/* Welcome Text */}
    </React.Fragment>
  );
};

export default Homecontent;
