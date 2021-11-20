import { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { getTokenFromResponse } from "../../../container/config-spotify";
import { GetUserInfo } from "../../../redux/SpotifySlice";
import useAxios from "axios-hooks";
import axios from "axios";
const ProfileInfo = () => {
  const user = useSelector((state) => state.spotify.userInfo);
  const dispatch = useDispatch();
  useEffect(() => {
    axios({
      url: "https://api.spotify.com/v1/me",
      headers: {
        Authorization: "Bearer " + getTokenFromResponse().access_token,
      },
    }).then((res) => dispatch(GetUserInfo(res.data.id)));
  }, [dispatch]);

  return (
    <>
      <Stack
        direction="row"
        spacing={2}
        sx={{ mt: 3, mr: "-20rem" }}
        justifyContent="center"
        alignItems="center"
      >
        <Avatar alt="Erfan" src="/static/images/avatar/1.jpg" />
        <Typography
          sx={{
            fontSize: 18,
            fontWeight: "400",
            color: "#fff",
            letterSpacing: "1px",
          }}
        >
          {user}
        </Typography>
      </Stack>
    </>
  );
};

export default ProfileInfo;
