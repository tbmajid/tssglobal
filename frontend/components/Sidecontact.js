import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "next/link";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const SideContact = () => {
  return (
    <Card>
      <CardContent>
        <Typography sx={{ fontSize: 17 }} color="text.secondary" gutterBottom>
          Need Advice?
        </Typography>

        <Typography variant="body2">Speak to one of our Agents</Typography>
      </CardContent>
      <CardActions>
        <Link href="/contact">
          <Button size="small">Book an Appointment</Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default SideContact;
