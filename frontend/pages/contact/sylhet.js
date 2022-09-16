import { Grid, Typography, Box } from "@mui/material";
import MapSylhet from "../../components/MapSylhet";
import PageHero from "../../components/PageHero";
import ContactForm from "../../components/Contact";
const Sylhet = () => {
  return (
    <div>
      <PageHero title="Sylhet, Bangladesh" />
      <Grid container spacing={2} sx={{ p: 6 }}>
        <Grid item md={3} xs={12}>
          <Typography sx={{ fontWeight: "bold" }}>
            Jonokollan Bhaban (First Floor), <br />
            Uposhohor Point
            <br /> Sylhet 3100, Bangladesh{" "}
          </Typography>
          <br />
          Tel: 02070011176 <br />
          Email: contact@tssglobal.co.uk
        </Grid>
        <Grid item md={5} xs={12}>
          <MapSylhet />
        </Grid>

        <Grid item md={4} xs={12} sx={{ p: 2, pl: 4 }}>
          Sylhet is a one of the major cities in Bangladesh. The city is located
          in northeastern region of the country on the right bank of the Surma
          River at the eastern tip of Bengal. Our office is situated right in
          the heart of the metropolitan allowing for easy access to and from
          Zindabazar, Bandarbazar and Amrabkhana. <br />
          TSS Learning Centre in Sylhet has state-of-art equipments for teaching
          facilities. Wi-fi is available throughout the building.
        </Grid>
      </Grid>
      <Box sx={{ pb: 2 }}>
        <ContactForm />
      </Box>
    </div>
  );
};

export default Sylhet;
