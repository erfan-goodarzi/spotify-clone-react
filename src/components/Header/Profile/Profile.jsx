import { Box } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";
import Toptrack from "../../main/TopTrack";
import UserHeaderInfo from "./UserHeaderInfo";

const Profile = () => {
  const UserName = useSelector((state) => state.spotify.userInfo.name);
  const UserImg = useSelector((state) => state.spotify.userInfo.img);
  const UserTitle = useSelector((state) => state.spotify.userInfo.title);
  const Userfollowers = useSelector(
    (state) => state.spotify.userInfo.followers
  );
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
         <Box sx={{mb: 9}}>
          <Toptrack Title="Top Tracks" />
        </Box>
      </Box>
    </>
  );
};

export default Profile;
