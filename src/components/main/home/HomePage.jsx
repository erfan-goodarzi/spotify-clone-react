import Grid from "@mui/material/Grid";
import Topbanner from "../TopBanner";

const Homepage = () => {
  return (
    <>
      <Grid
        sx={{ pl: 6 }}
        container
        direction="column"
        justifyContent="space-evenly"
        alignItems="right"
        spacing={12}
      >
        <Grid item xs={8}>
          <Topbanner />
        </Grid>
        <Grid item xs={8}>
          main
        </Grid>
        <Grid item xs={8}>
          Latest Releases
        </Grid>
      </Grid>
    </>
  );
};

export default Homepage;
