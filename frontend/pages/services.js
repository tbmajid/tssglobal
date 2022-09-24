import { Grid, Typography } from "@mui/material";
import MinimizeIcon from "@mui/icons-material/Minimize";
import Image from "next/image";
import Button from "@mui/material/Button";
import Link from "next/link";
import PageHero from "../components/PageHero";
import OurMission from "../components/Mission";
const Services = () => {
  return (
    <div>
      <PageHero title="Services" />

      <Grid container spacing={2} sx={{ p: 6 }}>
        <Grid item md={6} xs={12}>
          <Typography
            variant="h5"
            component="h2"
            sx={{
              color: "#4731d4",
              fontWeight: "bold",
              letterSpacing: 5,
              textTransform: "uppercase",
              marginTop: 4,
              p: 2,
            }}
          >
            <MinimizeIcon fontSize="small" />
            Our Difference
          </Typography>
          <Typography variant="h3">Qualified Consultants</Typography>
        </Grid>

        <Grid item md={6} xs={12} sx={{ p: 2, pl: 4 }}>
          We only recruit for the best universities in the United Kingdom. We
          recognise that higher education recruiting necessitates a
          constructive, strategic approach, especially when it comes to
          prospective courses. Our Consultants all have a minimum of 10 years of
          higher education experience, indicating that our team is well-versed
          in the sector.
        </Grid>
      </Grid>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
          <MinimizeIcon fontSize="small" />
        </Grid>
        <Grid item>
          {" "}
          <Typography variant="h4">We Offer</Typography>
        </Grid>
      </Grid>
      <Grid container justifyContent="space-between" sx={{ p: 4 }}>
        <Grid item md={4}>
          <Grid container direction="column" sx={{ p: 2 }}>
            <Grid item md={4}>
              <Image
                src="https://res.cloudinary.com/tabim/image/upload/v1662936501/TSS-Pages/bespoke_peesgi.jpg"
                alt="Bespoke Consultaton"
                width={378}
                height={259}
              />
            </Grid>
            <Grid item sx={{ pt: 2 }}>
              <Typography variant="h6" textTransform="uppercase">
                Bespoke Consultation
              </Typography>
            </Grid>
            <Grid item sx={{ pt: 2 }}>
              <Typography variant="body1">
                We guide you through the entire university admissions process,
                from picking right institution to crafting applications to
                waitlist strategy.
              </Typography>
              <Typography sx={{ pt: 2 }}>
                {" "}
                We have created strong relationships with leading universities
                who around the world. If you need help on any other aspects of
                studying abroad we can introduce you to the international team
                for that particular issue.
              </Typography>
            </Grid>
            <Grid item sx={{ pt: 2 }}>
              <Link href="/services/bespoke-consultation">
                <Button variant="outlined">Learn More</Button>
              </Link>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={4}>
          {" "}
          <Grid container direction="column" sx={{ p: 2 }}>
            <Grid item>
              <Image
                src="https://res.cloudinary.com/tabim/image/upload/v1662936501/TSS-Pages/uni-admission_b5wnuz.jpg"
                alt="University Admission"
                width={378}
                height={259}
              />
            </Grid>
            <Grid item sx={{ pt: 2 }}>
              <Typography variant="h6" textTransform="uppercase">
                University Admission
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" sx={{ pt: 2 }}>
                Receive offers from top institutes across the United Kingdom a
                that matches your interest.
                <Typography sx={{ pt: 2 }}>
                  We will take care of the whole process from sending your
                  documents to obtaining CAS for you. Hence, you can solely
                  focus on your education rather than stress out on other things
                </Typography>
              </Typography>
            </Grid>{" "}
            <Grid item sx={{ pt: 2 }}>
              <Link href="/services/uk-university-admission">
                <Button variant="outlined">Learn More</Button>
              </Link>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={4}>
          <Grid container direction="column" sx={{ p: 2 }}>
            <Grid item md={4}>
              <Image
                src="https://res.cloudinary.com/tabim/image/upload/v1662936501/TSS-Pages/bespoke_peesgi.jpg"
                alt="Bespoke Consultaton"
                width={378}
                height={259}
              />
            </Grid>
            <Grid item sx={{ pt: 2 }}>
              <Typography variant="h6" textTransform="uppercase">
                Student Visa Support
              </Typography>
            </Grid>
            <Grid item sx={{ pt: 2 }}>
              <Typography variant="body1">
                A small mistake with your visa application can cost you dearly.
                Along with university international compliance team we are here
                to help you with the visa process.
              </Typography>
            </Grid>{" "}
            <Grid item sx={{ pt: 2 }}>
              <Link href="/services/student-visa-support">
                <Button variant="outlined">Learn More</Button>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* second row */}
      <Grid container justifyContent="space-between" sx={{ p: 4, pt: 0 }}>
        <Grid item md={4}>
          <Grid container direction="column" sx={{ p: 2 }}>
            <Grid item md={4}>
              <Image
                src="https://res.cloudinary.com/tabim/image/upload/v1662936501/TSS-Pages/ielts_wd5zwj.jpg"
                alt="IELTS Coaching"
                width={378}
                height={259}
              />
            </Grid>
            <Grid item sx={{ pt: 2 }}>
              <Typography variant="h6" textTransform="uppercase">
                IELTS Preparation
              </Typography>
            </Grid>
            <Grid item sx={{ pt: 2 }}>
              <Typography variant="body1">
                Our IELTS preparation Course is a designed for all levels
                beginner to advanced learners, which develops skills and
                strategies for IELTS success as well as general English language
                skills.
              </Typography>
              <Typography sx={{ pt: 2 }}>
                {" "}
                Our world class tutors have trained hundreds of students in the
                classrooms so we’re confident we can deliver the same level of
                coaching remotely.
              </Typography>
            </Grid>
            <Grid item sx={{ pt: 2 }}>
              <Link href="/services/ielts-coaching">
                <Button variant="outlined">Learn More</Button>
              </Link>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={4}>
          {" "}
          <Grid container direction="column" sx={{ p: 2 }}>
            <Grid item>
              <Image
                src="https://res.cloudinary.com/tabim/image/upload/v1662936501/TSS-Pages/statement-editing_stwdkc.jpg"
                alt="Personal Statement Editing"
                width={378}
                height={259}
              />
            </Grid>
            <Grid item sx={{ pt: 2 }}>
              <Typography variant="h6" textTransform="uppercase">
                Personal Statement Editing
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" sx={{ pt: 2 }}>
                A fresh yet experienced pair of eyes can truly provide the
                clear, accurate personal statement editing you need. Here lies
                the value of having your statements reviewed by us. TSS Global’s
                dedicated personal statement editing service ensures word
                perfection, your writings will be treated by us with the care it
                deserves.
              </Typography>
            </Grid>{" "}
            <Grid item sx={{ pt: 2 }}>
              <Link href="/services/personal-statement-editing-service">
                <Button variant="outlined">Learn More</Button>
              </Link>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={4}>
          <Grid container direction="column" sx={{ p: 2 }}>
            <Grid item md={4}>
              <Image
                src="https://res.cloudinary.com/tabim/image/upload/v1662936501/TSS-Pages/post-arrival_gkgsrv.jpg"
                alt="Post Arrival Services"
                width={378}
                height={259}
              />
            </Grid>
            <Grid item sx={{ pt: 2 }}>
              <Typography variant="h6" textTransform="uppercase">
                Post Arrival Services
              </Typography>
            </Grid>
            <Grid item sx={{ pt: 2 }}>
              <Typography variant="body1">
                Our Post-Arrival Services provide all forms of assistance for
                new students. It’s worth noting that new students in the United
                Kingdom face many challenges in adjusting to their new
                surroundings. Our consultants will devote themselves providing
                assistance that is needed.
              </Typography>
            </Grid>{" "}
            <Grid item sx={{ pt: 2 }}>
              <Link href="/services/post-arrival-support">
                <Button variant="outlined">Learn More</Button>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Bottom Eelements */}
      <OurMission />
    </div>
  );
};

export default Services;
