import PageHero from "../components/PageHero";
import { Box, Grid } from "@mui/material";
const Career = () => {
  return (
    <div>
      <PageHero title="Work with us" />
      <Grid container md={8} justifyContent="center" sx={{ p: 6 }}>
        <Grid item>
          <Box sx={{ typography: "h6", p: 2, margin: 2 }}>
            We are a small firm dedicated to supporting equality of opportunity
            for all people, regardless of their age, disability, gender, or
            gender reassignment, marital or civil partnership status, pregnancy
            or maternity, race, religion, or sexual orientation. We agree that
            the best outcomes come from putting together talented people with
            complementary skills and experiences, and we strive to do just that
          </Box>
          <Box sx={{ typography: "h6", p: 2, margin: 2 }}>
            We’re always looking for experienced university admission
            specialists at all levels who have a following and are looking for a
            new opportunity.
          </Box>
          <Box sx={{ typography: "h6", p: 2, margin: 2, mb: 4 }}>
            Successful applicants will become part of our diverse team, which is
            located at the heart of London in Stepney Green.
          </Box>
          <Box sx={{ typography: "h6", p: 2, margin: 2, mb: 4 }}>
            To arrange an initial meeting with our HR Manager, please email a
            copy of your CV to career@tssglobal.co.uk. Please read our Privacy
            Policy before contacting us because it describes how we can use your
            personal details.
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Career;
