import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import LatsetRelease from '../../../components/main/LatestRelease';
import Publicplaylist from '../../../components/main/PublicPlaylist';
import Topbanner from '../../../components/main/TopBanner';

const Homepage = () => {
  return (
    <>
      <Grid
        sx={{ pl: 6 }}
        container
        direction='column'
        justifyContent='space-evenly'
        alignItems='right'
        spacing={3}
      >
        <Grid item xs={8}>
          <Topbanner />
        </Grid>
        <Grid item xs={8}>
          <Typography
            sx={{
              lineHeight: '1px',
              mt: 3,
              fontSize: '27px',
              color: '#fff',
              fontWeight: ' 700',
            }}
          >
            Top Playlist
          </Typography>
          <Publicplaylist
            Albums={[
              '5ISVQShioiGcxJVrfQMlzK',
              '1CIUfTEm0xPgHDUNc6G7rW',
              '5ZNIZY6Dg9sC04xsJEBx0o',
            ]}
          />
        </Grid>
        <Grid item xs={8}>
          <Typography
            sx={{
              fontSize: '27px',
              color: '#fff',
              fontWeight: ' 700',
            }}
          >
            Latest Releases
          </Typography>
          <LatsetRelease />
        </Grid>
      </Grid>
    </>
  );
};

export default Homepage;
