import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { accessUrl } from "../../container/config-spotify";

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
          className="authimg"
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
            margin: { lg: "0 20rem", xs: "0" },
            color: "#ffff",
            backgroundColor: "#1db954",
            padding: {lg: "13px 61px", xs: '10px 20px'},
            borderRadius: "99px",
          }}
          href={accessUrl}
        >
          Login To Spotify
        </Button>
      </Grid>
    </Grid>
  );
};

export default Auth;
