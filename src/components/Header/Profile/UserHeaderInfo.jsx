import Color, { Palette } from "color-thief-react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const UserHeaderInfo = ({Title,UserName,Image,Follower}) => {
  return (
    <>
      <Grid item container>
        <Grid
          item
          xs
          container
          direction="row"
          alignItems="center"
          sx={{
            mt: 4,
            ml: 4
          }}
        >
          <Grid item xs={3}>
            <Typography>{Title}</Typography>
            <Typography>{UserName}</Typography>
          </Grid>
          <Grid item xs={6}>
            {Image}
          </Grid>
          <Grid item xs={3}>
            {Follower}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default UserHeaderInfo;
