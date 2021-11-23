import React from "react";
import { useSelector } from "react-redux";
import UserHeaderInfo from "./UserHeaderInfo";

const Profile = () => {
  const UserName = useSelector((state) => state.spotify.userInfo.name);
  const UserImg = useSelector((state) => state.spotify.userInfo.img);
  const UserTitle = useSelector((state) => state.spotify.userInfo.title);
  const Userfollowers = useSelector((state) => state.spotify.userInfo.followers);
  return (
    <>
      <UserHeaderInfo UserName={UserName} Title={UserTitle} Image={UserImg} Follower={Userfollowers}/>
    </>
  );
};

export default Profile;
