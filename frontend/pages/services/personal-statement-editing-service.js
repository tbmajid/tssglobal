import PageHero from "../../components/PageHero";
import { Box } from "@mui/material";

const PersonalStatementEditing = () => {
  return (
    <div>
      <PageHero title="Personal Statement Editing" />
      <Box sx={{ typography: "h6", p: 2, margin: 2 }}>
        We are a professional student recruitment and training company providing
        students and parents with current information about studies offered in
        the United Kingdom. Our Services offer information about the
        universities, programmes, admissions, accommodations and student visas.
      </Box>
      <Box sx={{ typography: "h6", p: 2, margin: 2 }}>
        TSS Global head office is based in London but our global reach allows us
        to provide onshore support to students wherever they are in the world by
        remote support.
      </Box>
      <Box sx={{ typography: "h6", p: 2, margin: 2 }}>
        Education is the foundation on which careers are built. TSS Global guide
        and assist students in achieving their goal to pursue overseas education
        courses and degrees in universities in the United Kingdom. Accomplishing
        the goal of overseas education is becoming increasingly challenging each
        year due to a rapidly growing applicant pool. We help students take a
        more holistic approach to the application process and present themselves
        in a unique and compelling manner augmenting chances of success.
      </Box>

      <Box sx={{ typography: "h6", p: 2, margin: 2 }}>
        We strive to make the admissions process less stressful for the students
        and their families, by guidance through each step of the admissions
        process and providing them with a personalised strategy for success. We
        help build confidence and skills in our students. Our mission is to help
        them achieve their highest potential, now and in the future.
      </Box>
    </div>
  );
};

export default PersonalStatementEditing;
