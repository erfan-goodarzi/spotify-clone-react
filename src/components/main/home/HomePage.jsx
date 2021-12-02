import Grid from "@mui/material/Grid";

const Homepage = () => {
  return (
    <Grid
      sx={{ mt: 1 }}
      container
      direction="column"
      justifyContent="space-evenly"
      alignItems="center"
      spacing={12}
    >
      <Grid item xs={8}>
        Top banner
      </Grid>
      <Grid item xs={8}>
        main
      </Grid>
      <Grid item xs={8}>
        Latest Releases
      </Grid>
    </Grid>
  );
};

export default Homepage;
