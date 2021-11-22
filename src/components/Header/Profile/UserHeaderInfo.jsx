import Color from "color-thief-react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const UserHeaderInfo = ({ Title, UserName, Image, Follower }) => {
  return (
    <>
      <Color src={Image} crossOrigin="anonymous" format="hex">
        {({ data, loading }) => {
          if (loading) return <p>lodin</p>;
          return (
            <Grid item container sx={{ background: data, width: '100%' }}>
              <Grid
                item
                xs
                container
                direction="row"
                alignItems="center"
                sx={{
                  mt: 4,
                  ml: 4,
                }}
              >
                <Grid item xs={3}>
                  <Typography>{Title}</Typography>
                  <Typography>{UserName}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <img src={Image} alt="ProfileImg" />
                </Grid>
                <Grid item xs={3}>
                  {Follower}
                </Grid>
              </Grid>
            </Grid>
          );
        }}
      </Color>
    </>
  );
};

export default UserHeaderInfo;
