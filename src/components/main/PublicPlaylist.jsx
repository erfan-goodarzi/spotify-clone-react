import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Stack from '@mui/material/Stack';
import Playbutton from '../PlayerButton/PlayButton';
import { useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import { useDispatch } from 'react-redux';
import { getUserTopTrack, playSong } from '../../redux/SpotifySlice';
import { useSelector } from 'react-redux';
import { getTokenFromResponse } from '../../config/config-spotify';

const Img = styled('img')({
  margin: '17px 16px',
  display: 'flex',
  width: 107,
  height: 107,
  borderRadius: '6px',
});

const Publicplaylist = ({ Albums }) => {
  const dispatch = useDispatch();
  const topTrack = useSelector((state) => state.spotify.getUserTopTrack);
  const spotifyApi = new SpotifyWebApi();
  useEffect(() => {
    spotifyApi.setAccessToken(getTokenFromResponse().access_token);
    //Get public albums
    spotifyApi
      .getAlbums(Albums)
      .then((data) => {
        const Fill = data.albums.map((item) => {
          return {
            cover: item.images[0].url,
            id: item.id,
            name: item.name,
            track: item.tracks.items.map((url) => {
              return {
                cover: item.images[0].url,
                name: url.name,
                album: item.name,
                id: url.id,
                singer: url.artists[0].name,
                musicSrc: url.preview_url,
              };
            }),
          };
        });
        dispatch(getUserTopTrack(Fill));
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <Stack
        direction='row'
        justifyContent='flex-start'
        alignItems='center'
        spacing={5}
        sx={{
          ml: { lg: 0, md: '8rem', sm: '0' },
          mt: { lg: 0, md: '1rem', sm: '1rem' },
        }}
      >
        {topTrack.map((song) => (
          <Box
            key={song.id}
            sx={{
              flexGrow: 1,
              maxWidth: { lg: 350, md: 154, sm: 154 },
              margin: '2rem 0rem',
              transition: 'all 0.3s ease-in-out',
              height: { lg: 140, md: 203, sm: 203 },
              backgroundColor: '#1b1a20',
              borderRadius: '6px',
              '&:hover': {
                transition: 'all 0.3s ease-in-out',
                boxShadow: '3px 2px 12px 1px #2c2c2c',
                backgroundColor: '#1b1a20f2',
                opacity: [0.9, 0.8, 0.7],
              },
            }}
          >
            <Grid
              container
              direction={{ lg: 'row', md: 'column', sm: 'column' }}
              justifyContent='flex-start'
              alignItems='center'
            >
              <Grid item xs={8}>
                <Img alt={song.name} src={song.cover} />
                <Box sx={{ position: 'relative', top: '-88px', left: '3rem' }}>
                  <Playbutton
                    onClickHandler={() => {
                      song.track.map((i) => dispatch(playSong(i)));
                    }}
                  />
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box>
                  <AvatarGroup
                    max={4}
                    sx={{
                      position: 'relative',
                      left: '-8rem',
                      top: '-2rem',
                      display: { lg: 'block', md: 'none', sm: 'none' },
                    }}
                  >
                    <Avatar alt='Remy Sharp' src={song.cover} />
                    <Avatar
                      alt='Travis Howard'
                      src='https://mui.com/static/images/avatar/2.jpg'
                    />
                    <Avatar
                      alt='Cindy Baker'
                      src='https://mui.com/static/images/avatar/3.jpg'
                    />
                    <Avatar
                      alt='Agnes Walker'
                      src='https://mui.com/static/images/avatar/4.jpg'
                    />
                    <Avatar
                      alt='Trevor Henderson'
                      src='https://mui.com/static/images/avatar/5.jpg'
                    />
                  </AvatarGroup>
                  <Typography
                    sx={{
                      fontSize: 18,
                      fontWeight: '300',
                      color: '#ddd',
                      margin: {
                        lg: '-101px -92px',
                        md: '-3rem 0',
                        sm: '-3rem 0',
                      },
                      textAlign: { lg: 'unset', md: 'center', sm: 'center' },
                    }}
                  >
                    {song.name}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        ))}
      </Stack>
    </>
  );
};

export default Publicplaylist;
