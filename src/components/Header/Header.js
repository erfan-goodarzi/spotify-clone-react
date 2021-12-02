import SearchBox from "./Search/SearchBox";
import Grid from "@mui/material/Grid";
import Notification from "./Notif";
import ProfileInfo from "./Profile/ProfileInfo";

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
        <Grid item xs={9} sm={9}>
          <SearchBox />
        </Grid>
        <Grid item xs={6} sm={2}>
          <Notification />
        </Grid>
        <Grid item xs={6} sm={1}>
          <ProfileInfo />
        </Grid>
      </Grid>
    </>
  );
};

export default Header;
