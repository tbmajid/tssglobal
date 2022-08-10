import { Box } from "@mui/material";
import ResponsiveAppBar from "./Navbar";
import PageHero from "./PageHero";
import Footer from "./Footer";
const PageContent = ({ title, body, image }) => {
  //Get data from props

  return (
    <div>
      <ResponsiveAppBar />
      <PageHero />
      <p>{body}</p>
      {/* <Box sx={{ typography: "h6", p: 2, margin: 2 }}>{body}</Box> */}
      <Box>{image}</Box>

      <Footer />
    </div>
  );
};

export default PageContent;
