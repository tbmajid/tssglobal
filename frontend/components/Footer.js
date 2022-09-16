import { Grid, useMediaQuery, Typography, Box } from "@mui/material";
import NewsletterSubscribe from "./NewsletterSubscribe";
import Image from "next/image";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";

const Footer = () => {
  const largeScreen = useMediaQuery((theme) => theme.breakpoints.up("md"));

  return (
    <div>
      <Grid
        container
        spacing={3}
        direction={largeScreen ? "row" : "column"}
        justifyContent={largeScreen ? "space-between" : "center"}
        alignItems={largeScreen ? "flex-start" : "center"}
        sx={{ p: 3, color: "white", backgroundColor: "#070d25" }}
      >
        <Grid item>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems={largeScreen ? "flex-start" : "center"}
          >
            <Grid item sx={{ pb: 2 }}>
              <Image
                src="/tss-footer.svg"
                alt="Logo"
                width={84}
                height={33}
              ></Image>
            </Grid>
            <Grid item>
              <Typography
                sx={{ fontSize: 12 }}
                textAlign={largeScreen ? "left" : "center"}
              >
                53A Mile End Road,
                <br />
                London E1 4TT
                <br />
                Tel: 02070011176
                <br />
                Email: contact@tssglobal.co.uk
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item className="FooterNav">
          <Grid container direction="column">
            <Grid
              item
              className={
                largeScreen ? "lefooter-text-large" : "footer-text-small"
              }
            >
              <Box sx={{ pb: 2 }}> Quick Links</Box>

              <ul>
                <li className="footer-padding">
                  <Link href="/about">
                    <a>About us</a>
                  </Link>{" "}
                </li>
                <li className="footer-padding">
                  <Link href="/services">
                    <a>Services</a>
                  </Link>{" "}
                </li>
                <li className="footer-padding">
                  <Link href="/postlist">
                    <a>Blog</a>
                  </Link>{" "}
                </li>{" "}
                <li className="footer-padding">
                  <Link href="/contact">
                    <a>Contact us</a>
                  </Link>{" "}
                </li>
                <li className="footer-padding">
                  <Link href="/career">
                    <a>Career</a>
                  </Link>{" "}
                </li>
              </ul>
            </Grid>
          </Grid>
        </Grid>

        {/* services */}
        <Grid item className="FooterNav">
          <Grid container direction="column">
            <Grid
              item
              className={
                largeScreen ? "lefooter-text-large" : "footer-text-small"
              }
            >
              <Box sx={{ pb: 2 }}> Services</Box>

              <ul>
                <li className="footer-padding">
                  <Link href="/services/bespoke-consultation">
                    <a>Bespoke Consultation</a>
                  </Link>{" "}
                </li>
                <li className="footer-padding">
                  <Link href="/services/uk-university-admission">
                    <a>University Admission</a>
                  </Link>{" "}
                </li>
                <li className="footer-padding">
                  <Link href="/services/student-visa-support">
                    <a>Student Visa Support</a>
                  </Link>{" "}
                </li>{" "}
                <li className="footer-padding">
                  <Link href="/services/ielts-coaching">
                    <a>IELTS Preparation</a>
                  </Link>{" "}
                </li>
                <li className="footer-padding">
                  <Link href="/services/personal-statement-editing-service">
                    <a>Personal Statement Editing</a>
                  </Link>{" "}
                </li>
                <li className="footer-padding">
                  <Link href="/services/post-arrival-support">
                    <a>Post Arrival Support</a>
                  </Link>{" "}
                </li>
              </ul>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems={largeScreen ? "flex-start" : "center"}
          >
            <Grid item sx={{ pb: 1 }}>
              Follow Us
            </Grid>
            <Grid item>
              <Grid container>
                <Grid item sx={{ pr: 1 }} className="footerNav">
                  <a href="https://facebook.com/tssglobalbd">
                    <FacebookIcon fontSize="large" sx={{ color: "white" }} />
                  </a>
                </Grid>
                <Grid item sx={{ pr: 1 }}>
                  {" "}
                  <a href="https://twitter.com/tssglobal">
                    <TwitterIcon fontSize="large" sx={{ color: "white" }} />
                  </a>
                </Grid>
                <Grid item sx={{ pr: 1 }}>
                  <InstagramIcon fontSize="large" sx={{ color: "white" }} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <NewsletterSubscribe />
        </Grid>
      </Grid>

      <Grid
        container
        direction={largeScreen ? "row" : "column"}
        justifyContent={largeScreen ? "space-between" : "center"}
        alignItems="center"
        spacing={largeScreen ? 0 : 0}
        sx={{ color: "white", backgroundColor: "#070d25", p: 3 }}
      >
        <Grid item>
          <Typography sx={{ fontSize: 12 }}>
            &copy; {new Date().getFullYear()} TSS Global Limited
          </Typography>
        </Grid>

        <Grid item className="FooterNav">
          <Typography sx={{ fontSize: 12 }}>
            <Link href="/privacy">
              <a>Privacy Policy</a>
            </Link>{" "}
            |{" "}
            <Link href="/cookies">
              <a>Cookies Policy</a>
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
