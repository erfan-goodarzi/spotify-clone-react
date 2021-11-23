import { useColor } from "color-thief-react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { SetBgcolor } from "../../../redux/SpotifySlice";
import { useSelector } from "react-redux";

const UserHeaderInfo = ({ Title, UserName, Image, Follower }) => {
  const dispatch = useDispatch();
  const color = useSelector((state) => state.spotify.setColor);
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
      <Grid
        item
        xs
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
        sx={{
          mt: 4,
          ml: 4,
        }}
      >
        <Grid item xs={9} sx={{ textAlign: "center", ml: 3 }}>
          <img
            style={{
              boxShadow: `${color} 2px 6px 20px 0px`,
              width: "40%",
              borderRadius: "3px",
            }}
            src={Image}
            alt="ProfileImg"
          />
          <Typography
            sx={{
              mt: 2,
              fontSize: 50,
              fontWeight: "600",
              color: "#fff",
            }}
          >
            {UserName}
          </Typography>
          <Typography
            sx={{
              fontSize: 19,
              fontWeight: "300",
              color: "#fff",
              letterSpacing: 2,
            }}
          >
            Type : {Title}
          </Typography>
        </Grid>
        <Grid item xs={3} sx={{ textAlign: "center", ml: 3, mt: 2 }}>
          <Typography
            sx={{
              fontSize: 19,
              fontWeight: "300",
              color: "#fff",
              textAlign: "center",
            }}
          >
            Total Follower : {Follower}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default UserHeaderInfo;
