import { useRef, useState } from "react";
import MinimizeIcon from "@mui/icons-material/Minimize";
import emailjs from "@emailjs/browser";
import Head from "next/head";
import PageHero from "../components/PageHero";
import {
  Typography,
  Card,
  CardContent,
  Grid,
  TextField,
  Button,
} from "@mui/material";

const ContactUs = () => {
  const form = useRef();
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_API
      )
      .then(
        (result) => {
          console.log(result.text);
          setShowSuccessMessage(true);
          setShowFailureMessage(false);
        },
        (error) => {
          console.log(error.text);
          setShowSuccessMessage(false);
          setShowFailureMessage(true);
        }
      );

    e.target.reset();
  };
  return (
    <>
      <Head>
        <title>TSS Global Contact Us</title>
        <meta name="description" content="TSS Global Limited" />
      </Head>
      <PageHero title="Contact Us" />
      <Typography
        variant="h5"
        component="h2"
        align="center"
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
        Two Offices, Two Continents, One Family
      </Typography>
      <Grid>
        <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
          <CardContent>
            <Typography gutterBottom variant="h5">
              Make an enquiry
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              gutterBottom
            >
              Fill up the form and our team will get back to you within 24
              hours.
            </Typography>
            <form ref={form} onSubmit={sendEmail}>
              <Grid container spacing={1}>
                <Grid xs={12} item>
                  <TextField
                    name="name"
                    placeholder="Enter name"
                    label="Your Name"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    name="email"
                    type="email"
                    placeholder="Enter email"
                    label="Email"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                {/* <Grid item xs={12}>
                  <TextField
                    id="phone"
                    type="number"
                    placeholder="Enter phone number"
                    label="Phone"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid> */}
                <Grid item xs={12}>
                  <TextField
                    name="message"
                    label="Message"
                    multiline
                    rows={4}
                    placeholder="Type your message here"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                  >
                    Submit
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  {showSuccessMessage && (
                    <Typography>
                      Thank you! Your Message has been delivered.
                    </Typography>
                  )}
                  {showFailureMessage && (
                    <Typography>Error! Please Try Again</Typography>
                  )}
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};

export default ContactUs;
