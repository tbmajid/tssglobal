import Link from "next/link";
import { Typography, Grid } from "@mui/material";

const Privacy = () => {
  return (
    <div>
      <Grid container>
        <Grid item>
          <Typography variant="h5" sx={{ p: 4, pb: 1 }}>
            WHO WE ARE
          </Typography>
          <Typography sx={{ p: 4, pb: 1 }}>
            Our website address is:{" "}
            <Link href="/">https://tssglobal.co.uk</Link>
          </Typography>
          <Typography variant="h5" sx={{ p: 4, pb: 1 }}>
            COOKIES
          </Typography>
          <Typography sx={{ p: 4, pb: 1 }}>
            If you leave a comment on our site you may opt-in to saving your
            name, email address and website in cookies. These are for your
            convenience so that you do not have to fill in your details again
            when you leave another comment. These cookies will last for one
            year.
          </Typography>
          <Typography sx={{ p: 4, pb: 1 }}>
            If you visit our login page, we will set a temporary cookie to
            determine if your browser accepts cookies. This cookie contains no
            personal data and is discarded when you close your browser.
          </Typography>
          <Typography sx={{ p: 4, pb: 1 }}>
            {" "}
            When you log in, we will also set up several cookies to save your
            login information and your screen display choices. Login cookies
            last for two days, and screen options cookies last for a year. If
            you select “Remember Me”, your login will persist for two weeks. If
            you log out of your account, the login cookies will be removed. If
            you edit or publish an article, an additional cookie will be saved
            in your browser. This cookie includes no personal data and simply
            indicates the post ID of the article you just edited. It expires
            after 1 day.
          </Typography>{" "}
          <Typography variant="h5" sx={{ p: 4, pb: 1 }}>
            EMBEDDED CONTENT FROM OTHER WEBSITES
          </Typography>
          <Typography sx={{ p: 4, pb: 1 }}>
            Articles on this site may include embedded content (e.g. videos,
            images, articles, etc.). Embedded content from other websites
            behaves in the exact same way as if the visitor has visited the
            other website.
          </Typography>
          <Typography variant="h5" sx={{ p: 4, pb: 1 }}>
            WHAT RIGHTS YOU HAVE OVER YOUR DATA
          </Typography>
          <Typography sx={{ p: 4, pb: 1 }}>
            If you have an account on this site, or have left comments, you can
            request to receive an exported file of the personal data we hold
            about you, including any data you have provided to us. You can also
            request that we erase any personal data we hold about you. This does
            not include any data we are obliged to keep for administrative,
            legal, or security purposes.
          </Typography>
          <Typography variant="h5" sx={{ p: 4, pb: 1 }}>
            WHERE WE SEND YOUR DATA
          </Typography>
          <Typography sx={{ p: 4, pb: 10 }}>
            Visitor comments may be checked through an automated spam detection
            service.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Privacy;
