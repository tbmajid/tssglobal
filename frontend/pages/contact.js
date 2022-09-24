import MinimizeIcon from "@mui/icons-material/Minimize";
import Head from "next/head";
import PageHero from "../components/PageHero";
import ContactForm from "../components/Contact";
import { Typography, Box } from "@mui/material";

const ContactUs = () => (
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
    <Box>
      <ContactForm />
    </Box>
  </>
);

export default ContactUs;
