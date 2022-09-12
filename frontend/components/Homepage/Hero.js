import { Typography, Button, Box } from "@mui/material";
import {
  HeroStyle,
  BackgroundImage,
  BackgroundImageOverlay,
} from "../../styles/Herostyle";
import Link from "next/link";

//import heroImage from "../public/images/hero.jpg";

const Hero = () => {
  return (
    <BackgroundImage>
      <BackgroundImageOverlay>
        <HeroStyle>
          <Typography variant="h4" component="h4">
            We are specialised in Student Recruitment
          </Typography>
          <Typography variant="h1" component="h2">
            <p>TSS Global</p>
          </Typography>{" "}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: { xs: "center", md: "space-between" },
              width: 420,
            }}
          >
            <Box>
              {" "}
              <Link href="/contact">
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    mt: 2,
                    color: "#4731d4",
                    backgroundColor: "#cdf185",
                    borderColor: "#fffff",
                    p: 1,
                    width: 200,
                    borderRadius: 0,
                    "&:hover": {
                      color: "white",
                    },
                  }}
                >
                  Book an appointment
                </Button>
              </Link>
            </Box>
            <Box>
              {" "}
              <Link href="/services">
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    color: "#ffffff",
                    mt: 2,
                    p: 1,
                    width: 200,
                    borderColor: "#ffffff",
                    borderRadius: 0,
                    "&:hover": {
                      backgroundColor: "#483ad1",
                    },
                  }}
                >
                  More Info
                </Button>
              </Link>
            </Box>
          </Box>{" "}
        </HeroStyle>
      </BackgroundImageOverlay>
    </BackgroundImage>
  );
};

export default Hero;
