import Box from "@mui/material/Box";
const PageHero = ({ title }) => {
  return (
    <Box
      sx={{
        width: 1,
        p: 8,
        color: "white",
        backgroundColor: "#2843b8",
        typography: "h2",
      }}
    >
      {" "}
      {title}
    </Box>
  );
};

export default PageHero;
