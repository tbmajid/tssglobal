import * as React from "react";
import { Grid, useMediaQuery, Typography, Box } from "@mui/material";
import MinimizeIcon from "@mui/icons-material/Minimize";
import Image from "next/image";
import { DropShadow } from "../../styles/HPGrid";
const HomeIntro = () => {
  const largeScreen = useMediaQuery((theme) => theme.breakpoints.up("md"));
  return (
    <React.Fragment>
      <Typography
        variant="h5"
        component="h2"
        sx={{
          color: "#4731d4",
          fontWeight: "bold",
          letterSpacing: 5,
          textTransform: "uppercase",
          marginTop: 4,
          ml: 3,
          p: 2,
        }}
      >
        <MinimizeIcon fontSize="small" />
        Who We Are
      </Typography>
      <Grid
        container
        direction={largeScreen ? "row" : "column"}
        aligItem={largeScreen ? "space-between" : "center"}
        justifyContent={largeScreen ? "space-between" : "center"}
        spacing={2}
        sx={{ p: 2, ml: 2 }}
        wrap="wrap"
      >
        <Grid item xs={8} sx={{ p: 4, alignItems: "center" }}>
          <Typography variant="h4" component="h2" sx={{ pl: 4 }}>
            We are certified student advisors trained by British Council
          </Typography>
          <br />

          <Box sx={{ typography: "h6", pl: 4 }}>
            Our students are based across the UK and benefit from our unique
            contacts within the various institutions, letting agents and
            recruitment agencies; our ability to assist with potential issues
            that a student can struggle with at an early stage, our bespoke
            approach and free of charge service. Our British Council trained
            staff respond promptly to your queries
          </Box>
        </Grid>
        <Grid item xs={4} sx={{ mb: 4 }}>
          {" "}
          <DropShadow>
            <Image
              src="https://res.cloudinary.com/tabim/image/upload/v1662933723/TSS-Pages/homepage-advice_a1b46y.jpg"
              alt="Counselling"
              width={300}
              height={200}
              quality={75}
            />
          </DropShadow>
        </Grid>
      </Grid>

      <Grid container justifyContent={largeScreen ? "flex-end" : "center"}>
        <Box sx={{ maxWidth: 875, margin: 4 }}>
          <Grid item xs={1} md={1} sx={{ alignSelf: "end" }}>
            {" "}
            <Image
              src="https://res.cloudinary.com/tabim/image/upload/v1662923449/sakib_a3h1km.png"
              alt="Counselling"
              width={99}
              height={105}
              quality={75}
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={8}
            sx={{ typography: "body1", textAlign: "center" }}
          >
            <Box sx={{ fontStyle: "italic", fontWeight: "bold" }}>
              "I had many doubts about whether I would actually spend a semester
              abroad. I had never left the country and didn’t even own a
              passport. I didn’t know where to start. TSS took this stress away
              and made my semester in the UK possible. Having TSS’s support
              really made me feel secure with my decision to go abroad.”
            </Box>
            <Box sx={{ typography: "subtitle2", mt: 2 }}>
              -Shaju Ahmed, Goldsmith, University of London
            </Box>
          </Grid>
        </Box>
      </Grid>
    </React.Fragment>
  );
};

export default HomeIntro;
