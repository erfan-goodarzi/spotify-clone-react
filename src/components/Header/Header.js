import SideBar from "./menu/SideBar";
import SearchBox from "./Search/SearchBox";
import Box from "@mui/material/Box";
import Notification from "./Notif";
import ProfileInfo from "./Profile/ProfileInfo";
const Header = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <SearchBox />
        <Notification />
        <ProfileInfo/>
        <SideBar />
      </Box>
    </>
  );
};

export default Header;
