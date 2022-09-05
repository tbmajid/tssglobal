import { Grid, Typography, Box, Button } from "@mui/material";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import LibraryAddCheckIcon from "@mui/icons-material/LibraryAddCheck";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import SearchIcon from "@mui/icons-material/Search";
import HouseIcon from "@mui/icons-material/House";
import MinimizeIcon from "@mui/icons-material/Minimize";
import { WhyUsGrid } from "../../styles/HPGrid";

const WhyUs = () => {
  return (
    <div>
      {" "}
      <Typography
        variant="h5"
        component="h2"
        sx={{
          color: "#4731d4",
          fontWeight: "bold",
          letterSpacing: 5,
          textTransform: "uppercase",
          marginTop: 4,
          pl: 2,
          ml: 3,
        }}
      >
        <MinimizeIcon fontSize="small" />
        Why Us
      </Typography>
      <Box
        sx={{ color: "white", backgroundColor: "#4731d4", marginTop: 4, p: 4 }}
      >
        <WhyUsGrid>
          <Grid item sx={{ border: 1, p: 4 }}>
            <Box component="span">
              <QuestionAnswerIcon fontSize="large" />
            </Box>
            <br />
            <Box component="span" sx={{ typography: "h5" }}>
              One-to-one Mentorship
            </Box>
            <br />
            <Box component="span">
              We guide you through the entire university admissions process,
              from picking right institution to crafting applications to
              waitlist strategy.
            </Box>
            <br />
          </Grid>

          <Grid item sx={{ border: 1, p: 4 }}>
            <Box component="span">
              <PeopleAltIcon fontSize="large" />
            </Box>
            <br />
            <Box component="span" sx={{ typography: "h5" }}>
              Counseling
            </Box>
            <br />
            <Box component="span">
              We will take care of the whole process from sending your documents
              to obtaining CAS for you. Hence, you can solely focus on your
              education rather than stress out on other things
            </Box>
          </Grid>

          <Grid item sx={{ border: 1, p: 4 }}>
            <Box component="span">
              <LibraryAddCheckIcon fontSize="large" />
            </Box>
            <br />
            <Box component="span" sx={{ typography: "h5" }}>
              Visa Support
            </Box>
            <br />
            <Box component="span">
              We will take care of the whole process from sending your documents
              to obtaining CAS for you. Hence, you can solely focus on your
              education rather than stress out on other things
            </Box>
          </Grid>
          <Grid item sx={{ border: 1, p: 4 }}>
            <Box component="span">
              <MenuBookIcon fontSize="large" />
            </Box>
            <br />
            <Box component="span" sx={{ typography: "h5" }}>
              IELTS Coaching
            </Box>
            <br />
            <Box component="span">
              Our IELTS preparation Course is a designed for all levels beginner
              to advanced learners, which develops skills and strategies for
              IELTS success as well as general English language skills.
            </Box>
          </Grid>

          <Grid item sx={{ border: 1, p: 4 }}>
            <Box component="span">
              <SearchIcon fontSize="large" />
              <br />
            </Box>
            <Box component="span" sx={{ typography: "h5" }}>
              Job Assistance
            </Box>
            <br />
            <Box component="span">
              We work closely with a number of leading UK recruiters to help our
              students to secure part time jobs while they are studying
            </Box>
          </Grid>
          <Grid item sx={{ border: 1, p: 4 }}>
            <Box component="span">
              <HouseIcon fontSize="large" />
            </Box>
            <br />
            <Box component="span" sx={{ typography: "h5" }}>
              Accommodation Support
            </Box>
            <br />
            <Box component="span">
              We assist our students to find affordable accommodation near the
              institute they have enrolled.
            </Box>
          </Grid>
        </WhyUsGrid>
        <Box>
          <Button
            variant="outlined"
            sx={{ color: "white", borderColor: "white", p: 1, m: 2 }}
          >
            Find out more
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default WhyUs;
