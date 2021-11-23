import { useColor } from "color-thief-react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { SetBgcolor } from "../../../redux/SpotifySlice";

const UserHeaderInfo = ({ Title, UserName, Image, Follower }) => {
  const dispatch = useDispatch();
  const { data } = useColor(Image, "hex", {
    crossOrigin: "anonymous",
    quality: 10,
  });
  const Maincolor = data;
  useEffect(() => {
    dispatch(SetBgcolor(Maincolor));
  }, [Maincolor, dispatch]);

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
    </>
  );
};

export default UserHeaderInfo;
