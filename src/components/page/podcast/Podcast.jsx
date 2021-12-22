import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { BiBroadcast } from 'react-icons/bi';
import LatsetRelease from '../../main/LatestRelease';

const Podcast = () => {
  return (
    <>
      <Box sx={{ textAlign: 'center', mt: 9 }}>
        <Box sx={{ fontSize: 65, color: '#F3F3F3' }}>
          <BiBroadcast />
        </Box>
        <Typography sx={{ fontSize: 31, fontWeight: 800, color: '#F3F3F3' }}>
          Follow your first podcast
        </Typography>
        <Typography sx={{ fontSize: 19, fontWeight: 200, color: '#F3F3F3' }}>
          Follow podcasts you like by tapping the follow button.
        </Typography>
        <Button
          href='https://open.spotify.com/genre/podcasts-web'
          target='_blank'
          sx={{
            fontSize: 16,
            mt: 3,
            bgcolor: '#25BF68',
            p: '8px 29px',
            borderRadius: '5px',
            color: '#F3F3F3',
          }}
        >
          FIND PODCAST
        </Button>
      </Box>
    </>
  );
};

export default Podcast;
