import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

const Auth = () => {
  return (
    <Grid
      container
      justify="center"
      sx={{
        backgroundColor: "#000",
        position: "absolute",
        minHeight: "100%",
        marginTop: "-0",
        left: "-0",
        top: "-0",
        width: "100%",
      }}
      direction="column"
      alignItems="center"
    >
      <Grid item>
        <img
          style={{ maxWidth: "100%", margin: "3rem 20rem" }}
          src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
          alt="spotify logo"
        />
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          color="success"
          sx={{
            textDecoration: "none",
            margin: "0 20rem",
            color: "#ffff",
            backgroundColor: "#1db954",
            padding: "13px 61px",
            borderRadius: "99px",
          }}
          href="#text-buttons"
        >
          Login To Spotify
        </Button>
      </Grid>
    </Grid>
  );
};

export default Auth;
