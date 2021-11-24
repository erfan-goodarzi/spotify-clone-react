import SideBar from "./menu/SideBar";
import SearchBox from "./Search/SearchBox";
import Grid from "@mui/material/Grid";
import Notification from "./Notif";
import ProfileInfo from "./Profile/ProfileInfo";
// import Profile from "./Profile/Profile";
// import { Route, Routes } from "react-router";
// import { Box } from "@mui/system";
const Header = () => {
  return (
    <>
      <Grid
        item
        xs
        container
        direction="row"
        alignItems="center"
        sx={{
          mt: 3,
        }}
      >
        <Grid item xs={9}>
          <SearchBox />
        </Grid>
        <Grid item xs={2}>
          <Notification />
        </Grid>
        <Grid item xs={1}>
          <ProfileInfo />
        </Grid>
      </Grid>
    </>
  );
};

export default Header;
