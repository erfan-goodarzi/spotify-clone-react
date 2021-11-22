import { useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { getTokenFromResponse } from "../../../container/config-spotify";
import { GetUserInfo } from "../../../redux/SpotifySlice";
import SpotifyWebApi from "spotify-web-api-js";
const spotifyApi = new SpotifyWebApi();

const ProfileInfo = () => {
  const UserName = useSelector((state) => state.spotify.userInfo.name);
  const Userimg = useSelector((state) => state.spotify.userInfo.img);
  const dispatch = useDispatch();
  useEffect(() => {
    spotifyApi.setAccessToken(getTokenFromResponse().access_token);
    spotifyApi.getMe().then((res) => {
      console.log(res)
      dispatch(
        GetUserInfo({
          name: res.display_name,
          img: res.images.length === 0 ? null : res.images[0].url,
          title: res.type
        })
      );
    });
  }, [dispatch]);
  return (
    <>
      <Stack
        direction="row"
        spacing={2}
        sx={{ ml: "3rem" }}
        justifyContent="center"
        alignItems="center"
      >
        <Avatar alt={UserName} src={Userimg} />
        <Typography
          sx={{
            fontSize: 18,
            fontWeight: "400",
            color: "#fff",
            letterSpacing: "1px",
          }}
        >
          {UserName}
        </Typography>
      </Stack>
    </>
  );
};

export default ProfileInfo;
