import PageHero from "../../components/PageHero";
import { Box, Grid } from "@mui/material";

const StudentVisaSupport = () => {
  return (
    <div>
      <PageHero title="Student Visa Support" />
      <Grid container justifyContent="center" sx={{ p: 6 }}>
        <Grid item xs={12} md={8}>
          <Box sx={{ typography: "h6", p: 2 }}>
            TSS Global consultants have extensive knowledge of the latest
            immigration legislation, rules and regulations. We continuously
            monitor Student Visa changes so we can brief our students about
            issues that may affect their admission at the earliest possible
            stage.
          </Box>
          <Box sx={{ typography: "h6", p: 2 }}>
            Our Visa Service offers advice and assistance to international
            students wishing to obtain a UK visa, specialising in:
          </Box>
          <Box sx={{ typography: "h6", p: 2 }}>
            Student visa Entry Clearance
            <br />
            Student visa Leave to Remain
            <br />
            Student Dependant Visa
            <br />
            Student Visitor Visas
            <br />
            Child Student Visa
            <br />
          </Box>
          <Box sx={{ typography: "h5", p: 2 }}>
            Requirements for Student Visa
          </Box>{" "}
          <Box sx={{ typography: "h6", p: 2 }}>
            In order to qualify for a Student route visa (formally Tier 4
            General) the applicant must be able to demonstrate that:
          </Box>{" "}
          <Box sx={{ typography: "h6", p: 2 }}>
            they have been offered a place on a course;
            <br />
            the course is with a licensed sponsor and they have been assigned a
            confirmation of acceptance for studies document (‘CAS’);
            <br />
            they can speak, read, write and understand English to a required
            standard;
            <br />
            they meet the finance requirements issued by the Home Office; and
            <br />
            they do not fall for refusal under the general grounds for refusal.
            <br />
          </Box>{" "}
          <Box sx={{ typography: "h6", p: 2 }}>
            Applicants will be given leave for the duration of their course,
            with extra time to settle in and manage their affairs at the start
            and end of the course. It’s possible that applicants will be able to
            extend their leave or apply for new leave. Only under exceptional
            cases can those who have previously studied in the UK be given
            additional leave.
          </Box>{" "}
          <Box sx={{ typography: "h6", p: 2, mb: 4 }}>
            We have extensive experience preparing student visa applications and
            can provide you with professional advice and assistance in the
            process. We can also help those who want to pursue their post-study
            options in order to stay in the UK once they completed their
            courses.
          </Box>{" "}
        </Grid>
      </Grid>
    </div>
  );
};

export default StudentVisaSupport;
