import { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { getTokenFromResponse } from "../../../container/config-spotify";
import { GetUserInfo } from "../../../redux/SpotifySlice";
import axios from "axios";
const ProfileInfo = () => {
  const UserName = useSelector((state) => state.spotify.userInfo.name);
  const Userimg = useSelector((state) => state.spotify.userInfo.img);
  const dispatch = useDispatch();
  useEffect(() => {
    axios({
      url: "https://api.spotify.com/v1/me",
      headers: {
        Authorization: "Bearer " + getTokenFromResponse().access_token,
      },
    }).then((res) => {
      dispatch(
        GetUserInfo({
          name: res.data.display_name,
          img: res.data.images.length === 0 ? null : res.data.images[0].url,
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
