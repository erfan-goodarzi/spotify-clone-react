import { useEffect } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SpotifyWebApi from 'spotify-web-api-js';
import { getTokenFromResponse } from '../../../config/config-spotify';
import { getUserPlaylist } from '../../../redux/SpotifySlice';
import {
  BiHomeAlt,
  BiSearchAlt,
  BiPodcast,
  BiHeart,
  BiMusic,
} from 'react-icons/bi';

const drawerWidth = 273;
const drawerWidthMd = 243;
const drawerWidthSm = 200;
const drawerWidthXs = 150;

const SideBar = () => {
  const playlist = useSelector((state) => state.spotify.userPlaylist);
  const dispatch = useDispatch();
  const spotifyApi = new SpotifyWebApi();
  useEffect(() => {
    spotifyApi.setAccessToken(getTokenFromResponse().access_token);
    //Get Playlist
    spotifyApi.getUserPlaylists('cdasgbwskid81gi3g3x15z14v').then((res) => {
      dispatch(getUserPlaylist(res.items));
    });
  }, [dispatch]);

  let activeStyle = {
    textDecoration: 'none',
    color: '#25BF68',
  };
  return (
    <Box>
      <CssBaseline />
      <Drawer
        variant='permanent'
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            background: '#1B1A20 !important',
            border: 'none',
            width: {
              lg: drawerWidth,
              md: drawerWidthMd,
              sm: drawerWidthSm,
              xs: drawerWidthXs,
            },
            zIndex: '0',
            boxSizing: 'border-box',
          },
        }}
      >
        <Box
          sx={{
            ml: 4,
          }}
        >
          <Toolbar sx={{ display: 'flex', alignItems: 'center', mt: 3, mb: 2 }}>
            <img
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/1024px-Spotify_logo_without_text.svg.png'
              alt=''
              style={{
                width: '26px',
                margin: '19px -10px',
              }}
            />
            <Typography
              sx={{
                color: '#25BF68',
                ml: 3,
                fontSize: 18,
                fontWeight: '400',
                letterSpacing: '3px',
              }}
            >
              SPOTIFY
            </Typography>
          </Toolbar>
          <Box sx={{ overflow: 'auto', color: '#818285' }}>
            <List
              subheader={
                <ListSubheader
                  component='div'
                  id='nested-list-subheader'
                  sx={{
                    background: 'transparent',
                    color: '#F3F3F3',
                    letterSpacing: '1px',
                    fontWeight: '400',
                    fontSize: { lg: 16, md: 12 },
                  }}
                >
                  BROWSE MUSIC
                </ListSubheader>
              }
            >
              {['home', 'discover', 'podcast'].map((text, index) => (
                <NavLink
                  key={text}
                  to={{ pathname: text, hash: window.location.hash }}
                  style={({ isActive }) =>
                    isActive ? activeStyle : { textDecoration: 'none' }
                  }
                >
                  <ListItem button>
                    <ListItemIcon
                      sx={{
                        minWidth: 37,
                        fontSize: { lg: 16, md: 12 },
                        color: '#ababab',
                      }}
                    >
                      {index % 4 === 0 ? (
                        <BiHomeAlt />
                      ) : index % 4 === 1 ? (
                        <BiSearchAlt />
                      ) : index % 4 === 2 ? (
                        <BiPodcast />
                      ) : null}
                    </ListItemIcon>
                    <ListItemText
                      sx={{
                        color: '#ababab',
                        textTransform: 'capitalize',
                        [`& span`]: {
                          fontSize: { lg: 16, md: 12 },
                          fontWeight: '300',
                        },
                      }}
                      primary={text}
                    />
                  </ListItem>
                </NavLink>
              ))}
            </List>
            <List
              subheader={
                <ListSubheader
                  component='div'
                  id='nested-list-subheader1'
                  sx={{
                    background: 'transparent',
                    color: '#F3F3F3',
                    letterSpacing: '1px',
                    fontWeight: '400',
                    fontSize: { lg: 16, md: 12 },
                  }}
                >
                  YOUR MUSIC
                </ListSubheader>
              }
            >
              {['Favourites', 'Playlist'].map((text, index) => (
                <ListItem button key={text}>
                  <ListItemIcon
                    sx={{
                      minWidth: 37,
                      fontSize: { lg: 16, md: 12 },
                      color: '#ababab',
                    }}
                  >
                    {index % 4 === 0 ? (
                      <BiHeart />
                    ) : index % 4 === 1 ? (
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
                  component='div'
                  id='nested-list-subheader'
                  sx={{
                    background: 'transparent',
                    color: '#F3F3F3',
                    letterSpacing: '1px',
                    fontWeight: '400',
                    fontSize: { lg: 16, md: 12 },
                  }}
                >
                  YOUR PLAYLIST
                </ListSubheader>
              }
            >
              {playlist.map((text, index) => (
                <ListItem dense button key={text.id}>
                  <ListItemText
                    sx={{
                      color: '#ababab',
                      [`& span`]: {
                        fontSize: 14,
                        fontWeight: '700',
                      },
                    }}
                    primary={text.name}
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
};

export default SideBar;
