import { Grid, Typography, Box } from "@mui/material";
import GoogleMaps from "../../components/GoogleMap";
import PageHero from "../../components/PageHero";
import ContactForm from "../../components/Contact";
const London = () => {
  return (
    <div>
      <PageHero title="London" />
      <Grid container spacing={2} sx={{ p: 6 }}>
        <Grid item md={3} xs={12}>
          <Typography sx={{ fontWeight: "bold" }}>
            53A Mile End Road, London E1 4TT{" "}
          </Typography>
          <br />
          Tel: 02070011176 <br />
          Email: contact@tssglobal.co.uk
        </Grid>
        <Grid item md={5} xs={12}>
          <GoogleMaps />
        </Grid>

        <Grid item md={4} xs={12} sx={{ p: 2, pl: 4 }}>
          Finding us in London As the world’s leading financial centre for
          international business, London needs little introduction. Our office
          is situated right in the heart of the capital allowing for easy access
          to and from the City of London, East and North London where many of
          our education partners are based.
          <br />{" "}
          <Typography sx={{ fontWeight: "bold", mt: 2 }}>
            By train and underground{" "}
          </Typography>
          Located near the Central London, we are a short walk (approx 6
          minutes) from Stepney Green underground station on the District line
          and Hammersmith and City line or a slightly longer walk (approx 9
          minutes) from Whitechapel underground and overground station.{" "}
          <Typography sx={{ fontWeight: "bold", mt: 2 }}>By car </Typography>
          <Typography>
            The closest JustPark is located at Play On Sports, 22 Raven Row,
            London E1 2EG
          </Typography>
        </Grid>
      </Grid>
      <Box sx={{ pb: 2 }}>
        <ContactForm />
      </Box>
    </div>
  );
};

export default London;
