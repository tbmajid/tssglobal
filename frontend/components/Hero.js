import { Typography, Button, Box } from "@mui/material";
import { HeroStyle, BackgroundImage } from "../styles/Herostyle";

//import heroImage from "../public/images/hero.jpg";

const Hero = () => {
  return (
    <BackgroundImage>
      <HeroStyle>
        <Typography variant="h2" component="h4">
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
            <Button
              variant="contained"
              size="large"
              sx={{
                mt: 2,
                color: "#4731d4",
                backgroundColor: "#cdf185",
                p: 1,
                width: 200,
              }}
            >
              Book an appointment
            </Button>
          </Box>
          <Box>
            {" "}
            <Button
              variant="outlined"
              size="large"
              sx={{ color: "#ffffff", mt: 2, p: 1, width: 200 }}
            >
              More Info
            </Button>
          </Box>
        </Box>{" "}
      </HeroStyle>
    </BackgroundImage>
  );
};

export default Hero;
