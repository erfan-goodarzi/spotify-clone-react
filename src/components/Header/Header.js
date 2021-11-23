import SideBar from "./menu/SideBar";
import SearchBox from "./Search/SearchBox";
import Grid from "@mui/material/Grid";
import Notification from "./Notif";
import ProfileInfo from "./Profile/ProfileInfo";
import Profile from "./Profile/Profile";
import { Route, Routes } from "react-router";
import { Box } from "@mui/system";
const Header = () => {
  return (
    <>
      <Grid container>
        <Grid item xs={2} sx={{ ml: 4 }}>
          <SideBar />
        </Grid>
        <Grid item xs={8} container direction="column">
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
            <Grid item sx={{ width: "100%" }}>
              <Box
                sx={{
                  width: "121%",
                  overflowY: "scroll",
                  overflowX: "clip",
                }}
              >
                <Routes>
                  <Route path="/profile" element={<Profile />} />
                </Routes>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Header;
