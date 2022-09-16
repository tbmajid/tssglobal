import PageHero from "../components/PageHero";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import OurMission from "../components/Mission";
import MinimizeIcon from "@mui/icons-material/Minimize";
import { DropShadow } from "../styles/HPGrid";
const about = () => {
  return (
    <div>
      <PageHero title="About Us" />
      <Grid container justifyContent="center" alignItems="center" sx={{ p: 4 }}>
        <Grid item xs={12} md={6}>
          <Box sx={{ typography: "body1", p: 2, margin: 2 }}>
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
              Our Story
            </Typography>
            We are a professional student recruitment and training company
            providing students and parents with current information about
            studies offered in the United Kingdom. Our Services offer
            information about the universities, programmes, admissions,
            accommodations and student visas.
          </Box>
        </Grid>
        <Grid item xs={12} md={6} sx={{ p: 2 }}>
          <DropShadow>
            <Image
              src="https://res.cloudinary.com/tabim/image/upload/c_scale,w_898/v1662334457/TSS-Pages/christina-wocintechchat-com-eF7HN40WbAQ-unsplash_b68bl7.jpg"
              alt="TSS Advisor"
              width={400}
              height={267}
            ></Image>
          </DropShadow>
        </Grid>
        <Grid item md={6} sx={{ p: 2 }}>
          {" "}
          <Image
            src="https://res.cloudinary.com/tabim/image/upload/v1663020253/TSS-Pages/world-map-g12db8048e_640_xwzbhd.png"
            alt="World Map"
            width={640}
            height={320}
          ></Image>
        </Grid>
        <Grid item md={6}>
          <Box sx={{ typography: "body1", p: 2, margin: 2 }}>
            TSS Global head office is based in London but our global reach
            allows us to provide onshore support to students wherever they are
            in the world by remote support.
          </Box>
        </Grid>
        <Grid
          container
          spacing={2}
          sx={{ p: 6 }}
          justifyContent="center"
          alignItems="center"
        >
          <Grid item md={8} xs={12} sx={{ pl: 4 }}>
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
              Our Values
            </Typography>
            <Typography variant="h3">Six Reason to Choose Us</Typography>
          </Grid>

          <Grid item md={4} xs={12} sx={{ p: 2, pl: 4 }}>
            <Typography variant="h6">
              <ul>
                <li>1. Always by your side</li>
                <li>2. Satisfaction of our customers</li>
                <li>3. Specialized in the UK</li>
                <li>4. Study smart</li>
                <li>5. The best free assistance</li>
                <li>6. Best price guaranteed</li>
              </ul>
            </Typography>
          </Grid>
        </Grid>
        <Grid item md={8}>
          <Box sx={{ typography: "body1", p: 2, margin: 2, mb: 4 }}>
            We strive to make the admissions process less stressful for the
            students and their families, by guidance through each step of the
            admissions process and providing them with a personalised strategy
            for success. We help build confidence and skills in our students.
            Our mission is to help them achieve their highest potential, now and
            in the future.
          </Box>
        </Grid>
      </Grid>
      <OurMission />
    </div>
  );
};

export default about;
