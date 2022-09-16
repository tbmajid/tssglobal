import { Grid, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const OurMission = () => {
  return (
    <div>
      <Grid container sx={{ color: "white", backgroundColor: "#2843b8", p: 4 }}>
        <Grid item md={8}>
          <Typography variant="h4" sx={{ p: 4 }}>
            Our mission is to provide the best services.
          </Typography>
          <Typography variant="body1" sx={{ p: 4, pt: 1 }}>
            Our students are based across the UK and benefit from our unique
            contacts within the various institutions, letting agents and
            recruitment agencies; our ability to assist with potential issues
            that a student can struggle with at an early stage, our bespoke
            approach and free of charge servics.
          </Typography>
        </Grid>
        <Grid item>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItem="center"
            sx={{ p: 4 }}
          >
            <Grid item>
              <Grid container>
                <Grid item>
                  <ArrowForwardIosIcon
                    fontSize="small"
                    sx={{ color: "#cef08b" }}
                  />
                </Grid>
                <Grid item>One-to-one sessions</Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container>
                <Grid item>
                  <ArrowForwardIosIcon
                    fontSize="small"
                    sx={{ color: "#cef08b" }}
                  />
                </Grid>
                <Grid item>In person or remote</Grid>
              </Grid>
            </Grid>

            <Grid item>
              <Grid container>
                <Grid item>
                  <ArrowForwardIosIcon
                    fontSize="small"
                    sx={{ color: "#cef08b" }}
                  />
                </Grid>
                <Grid item>Free document evaluation</Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container>
                <Grid item>
                  <ArrowForwardIosIcon
                    fontSize="small"
                    sx={{ color: "#cef08b" }}
                  />
                </Grid>
                <Grid item>Personalised advice</Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container>
                <Grid item>
                  <ArrowForwardIosIcon
                    fontSize="small"
                    sx={{ color: "#cef08b" }}
                  />
                </Grid>
                <Grid item>End-to-end counselling</Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default OurMission;
