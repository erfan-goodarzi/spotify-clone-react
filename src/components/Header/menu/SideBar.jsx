import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import {
  BiHomeAlt,
  BiUserVoice,
  BiSearchAlt,
  BiPodcast,
  BiHeart,
  BiMusic,
} from "react-icons/bi";

const drawerWidth = 273;
const drawerWidthMd = 243;

const SideBar = () => {
  return (
    <Box>
      <CssBaseline />
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            background: "#1B1A20 !important",
            border: "none",
            width: { lg: drawerWidth, md: drawerWidthMd },
            zIndex: "0",
            boxSizing: "border-box",
          },
        }}
      >
        <Box
          sx={{
            ml: 4,
          }}
        >
          <Toolbar sx={{ display: "flex", alignItems: "center", mt: 3, mb: 2 }}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/1024px-Spotify_logo_without_text.svg.png"
              alt=""
              style={{
                width: "26px",
                margin: "19px -10px",
              }}
            />
            <Typography
              sx={{
                color: "#25BF68",
                ml: 3,
                fontSize: 18,
                fontWeight: "400",
                letterSpacing: "3px",
              }}
            >
              SPOTIFY
            </Typography>
          </Toolbar>
          <Box sx={{ overflow: "auto", color: "#818285" }}>
            <List
              subheader={
                <ListSubheader
                  component="div"
                  id="nested-list-subheader"
                  sx={{
                    background: "transparent",
                    color: "#F3F3F3",
                    letterSpacing: "1px",
                    fontWeight: "400",
                    fontSize: { lg: 16, md: 12 },
                  }}
                >
                  BROWSE MUSIC
                </ListSubheader>
              }
            >
              {["Home", "Discover", "Artists"].map((text, index) => (
                <ListItem button key={text}>
                  <ListItemIcon
                    sx={{
                      minWidth: 37,
                      fontSize: { lg: 18, md: 12 },
                      color: "#ababab",
                    }}
                  >
                    {index % 4 === 0 ? (
                      <BiHomeAlt />
                    ) : index % 4 === 1 ? (
                      <BiSearchAlt />
                    ) : index % 4 === 2 ? (
                      <BiUserVoice />
                    ) : null}
                  </ListItemIcon>
                  <ListItemText
                    sx={{
                      color: "#ababab",
                      [`& span`]: {
                        fontSize: { lg: 18, md: 12 },
                        fontWeight: "300",
                      },
                    }}
                    primary={text}
                  />
                </ListItem>
              ))}
            </List>
            <List
              subheader={
                <ListSubheader
                  component="div"
                  id="nested-list-subheader1"
                  sx={{
                    background: "transparent",
                    color: "#F3F3F3",
                    letterSpacing: "1px",
                    fontWeight: "400",
                    fontSize: { lg: 16, md: 12 },
                  }}
                >
                  YOUR MUSIC
                </ListSubheader>
              }
            >
              {["Podcasts", "Favourites", "Playlist"].map((text, index) => (
                <ListItem button key={text}>
                  <ListItemIcon
                    sx={{
                      minWidth: 37,
                      fontSize: { lg: 18, md: 12 },
                      color: "#ababab",
                    }}
                  >
                    {index % 4 === 0 ? (
                      <BiPodcast />
                    ) : index % 4 === 1 ? (
                      <BiHeart />
                    ) : index % 4 === 2 ? (
                      <BiMusic />
                    ) : null}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
            <List
              subheader={
                <ListSubheader
                  component="div"
                  id="nested-list-subheader"
                  sx={{
                    background: "transparent",
                    color: "#F3F3F3",
                    letterSpacing: "1px",
                    fontWeight: "400",
                    fontSize: { lg: 16, md: 12 },
                  }}
                >
                  YOUR PLAYLIST
                </ListSubheader>
              }
            >
              {["Playlist #1", "Playlist #2", "Playlist #3"].map(
                (text, index) => (
                  <ListItem dense button key={text}>
                    <ListItemText
                      sx={{
                        color: "#ababab",
                        [`& span`]: {
                          fontSize: 14,
                          fontWeight: "700",
                        },
                      }}
                      primary={text}
                    />
                  </ListItem>
                )
              )}
            </List>
          </Box>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {/* <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
          dolor purus non enim praesent elementum facilisis leo vel. Risus at
          ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
          quisque non tellus. Convallis convallis tellus id interdum velit
          laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
          adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
          integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
          eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
          quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
          vivamus at augue. At augue eget arcu dictum varius duis at consectetur
          lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
          faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
          ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
          elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse
          sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat
          mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
          risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas
          purus viverra accumsan in. In hendrerit gravida rutrum quisque non
          tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
          morbi tristique senectus et. Adipiscing elit duis tristique
          sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography> */}
      </Box>
    </Box>
  );
};

export default SideBar;
