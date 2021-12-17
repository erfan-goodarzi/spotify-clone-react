import { Divider } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SpotifyWebApi from "spotify-web-api-js";
import { getUserTopTrack } from "../../../redux/SpotifySlice";
import Toptrack from "../../main/TopTrack";
import UserHeaderInfo from "./UserHeaderInfo";

const Profile = () => {
  const UserName = useSelector((state) => state.spotify.userInfo.name);
  const UserImg = useSelector((state) => state.spotify.userInfo.img);
  const UserTitle = useSelector((state) => state.spotify.userInfo.title);
  const Userfollowers = useSelector(
    (state) => state.spotify.userInfo.followers
  );
  const dispatch = useDispatch();
  const topTrack = useSelector((state) => state.spotify.getUserTopTrack);
  const spotifyApi = new SpotifyWebApi();
  useEffect(() => {
    spotifyApi
      .getMyTopTracks({ limit: 20 })
      .then((res) => {
        const Fill = res.items.map((item) => {
          let minutes = Math.floor(item.duration_ms / 60000);
          let seconds = ((item.duration_ms % 60000) / 1000).toFixed(0);
          let songTime = minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
          return {
            cover: item.album.images[2].url,
            name: item.name,
            album: item.album.name,
            time: songTime,
            id: item.id,
            singer: item.artists[0].name,
            musicSrc: item.preview_url,
          };
        });
        dispatch(getUserTopTrack(Fill));
      })
      .catch((err) =>
        err ? alert("something went wrong. please logged in") : null
      );
  }, [dispatch]);
  return (
    <>
      <Box
        sx={{
          width: "86%",
        }}
      >
        <UserHeaderInfo
          UserName={UserName}
          Title={UserTitle}
          Image={UserImg}
          Follower={Userfollowers}
        />
        <Box sx={{ mb: 9 }}>
          <Divider sx={{ mt: 4, ml: 22 }} />
          <Toptrack Title="Top Tracks" Track={topTrack} />
        </Box>
      </Box>
    </>
  );
};

export default Profile;
