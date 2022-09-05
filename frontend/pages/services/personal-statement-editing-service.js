import PageHero from "../../components/PageHero";
import { Box } from "@mui/material";

const PersonalStatementEditing = () => {
  return (
    <div>
      <PageHero title="Personal Statement Editing" />
      <Box sx={{ typography: "h6", p: 2, margin: 2 }}>
        A strong personal statement should be straightforward and succinct in
        describing your qualities, skills, experience, and goals. It should, of
        course, be absolutely free of errors. That’s where our professional
        personal statement editing services come in, giving your application the
        extra boost it needs.
      </Box>
      <Box sx={{ typography: "h6", p: 2, margin: 2 }}>
        Our consultants understand the importance of a well-written personal
        statement. They’re also experts at correcting and enhancing written
        English, so we can help you make the best first impression possible in
        your submission.
      </Box>
      <Box sx={{ typography: "h6", p: 2, margin: 2, mb: 4 }}>
        There is no question about the quality of the administration that we
        provide to students and working professionals who wish to be led for a
        bright future with the extensive assistance of our expert counsellors.
      </Box>
    </div>
  );
};

export default PersonalStatementEditing;
