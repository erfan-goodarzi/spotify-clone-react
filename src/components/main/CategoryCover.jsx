import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { showAllCategory } from '../../redux/SpotifySlice';
import { getTokenFromResponse } from '../../config/config-spotify';
import SpotifyWebApi from 'spotify-web-api-js';

const CategoryCover = () => {
  const dispatch = useDispatch();
  const allCategory = useSelector((state) => state.spotify.allCategory);
  const spotifyApi = new SpotifyWebApi();
  useEffect(() => {
    spotifyApi.setAccessToken(getTokenFromResponse().access_token);
    // Get all gener
    spotifyApi.getCategories().then((res) => {
      console.log(res);
      dispatch(showAllCategory(res.categories.items));
    });
  }, []);

  return (
    <Box sx={{ width: '97%', p: '1px 9px' }}>
      <Typography
        sx={{
          fontSize: '27px',
          color: '#fff',
          fontWeight: ' 700',
          p: '2rem 0',
        }}
      >
        Browse All
      </Typography>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {console.log(allCategory)}
        {allCategory.map((item) => (
          <Grid key={item.id} item xs={3} md={6} sm={6} sx={{ mb: 3 }}>
            <Typography sx={{ p: '13px 1px', fontSize: 18, color: '#ddd' }}>
              {item.name}
            </Typography>
            <Box
              sx={{
                overflow: 'hidden',
              }}
            >
              <a
                href={`https://open.spotify.com/genre/${item.id}-page`}
                target='_blank'
                rel='noreferrer'
              >
                <img
                  className='category-cover'
                  src={item.icons[0].url}
                  alt={item.id}
                />
              </a>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CategoryCover;
