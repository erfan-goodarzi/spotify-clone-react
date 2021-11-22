import React from "react";
import { useSelector } from "react-redux";
import SpotifyWebApi from "spotify-web-api-js";
import { getTokenFromResponse } from "../../../container/config-spotify";
import UserHeaderInfo from "./UserHeaderInfo";

const Profile = () => {
  const UserName = useSelector((state) => state.spotify.userInfo.name);
  const Userimg = useSelector((state) => state.spotify.userInfo.img);
  return (
    <div>
      <UserHeaderInfo UserName={UserName} />
    </div>
  );
};

export default Profile;
