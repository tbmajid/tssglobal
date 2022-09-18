import PageHero from "../../components/PageHero";
import { Box, Grid } from "@mui/material";

const BespokeConsulation = () => {
  return (
    <div>
      <PageHero title="Bespoke Consultation" />
      <Grid container justifyContent="center" sx={{ p: 6 }}>
        <Grid item xs={12} md={8}>
          <Box sx={{ typography: "h6", p: 2 }}>
            We understand that applying to foreign educational institutions is a
            stressful process. It can be difficult to determine which programmes
            are strong in specific areas and how to choose the best match. TSS
            Global offers a bespoke consultation to help you make these
            difficult choices and support you through out the process.
          </Box>
          <Box sx={{ typography: "h6", p: 2 }}>
            Our consultant will help you gain a better understanding of courses,
            admission procedures, visa application process and other related
            topics. Our consultants usually have a master’s degree or above and
            they will provide you with information that will assist you in
            learning more about the uk higher education and immigration system.
            We have helped many students gain admission to the schools of their
            choice, in particular the Russell Group universities
          </Box>
          <Box sx={{ typography: "h6", p: 2 }}>
            Our expert team will assist and support you in identifying the
            appropriate courses and institutes that are most appropriate to your
            potential and affordability. TSS Global not only assists students
            with UK university admission consulting, but we also have dedicated
            consultants that help and guide student through the UK visa
            application process. Our team has years of experience studying in
            the UK universities, they can give their knowledge and first-hand
            experience to the prospective students. We customise our assistance
            to meet the specific needs of each student.
          </Box>

          <Box sx={{ typography: "h6", p: 2 }}>
            As you might be aware, there are various forms and levels of courses
            available in the United Kingdom, including a Foundation Programme,
            an Higher National Diploma (HND), an Undergraduate, a Postgraduate,
            and a research programme.
          </Box>
          <Box sx={{ typography: "h6", p: 2, mb: 4 }}>
            Before you complete and submit an application for a specific
            institute, we will inform you about prospective courses, its
            requirements, application deadlines, and tuition fees, we will
            ensure that you have all of the details you’ll need to apply. Many
            of our partner institutes provide scholarships to students who are
            eligible, and your TSS consultant will walk you through the process.
            Our consultants have considerable experience assisting students in
            deciding between the institutions.
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default BespokeConsulation;
