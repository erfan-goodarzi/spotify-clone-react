import CategoryCover from '../../main/CategoryCover';
import Publicplaylist from '../../main/PublicPlaylist';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Discover = () => {
  return (
    <>
      <CategoryCover />
      <Box sx={{ ml: 3 }}>
        <Typography
          sx={{
            lineHeight: '1px',
            mt: 3,
            fontSize: '27px',
            color: '#fff',
            fontWeight: ' 700',
          }}
        >
          Music for you
        </Typography>
        <Publicplaylist
          Albums={[
            '390TAPtzWKZJAEIzC6rqj3',
            '42VOfNnu9exERLxxRwolYA',
            '2Ezca5c6vcHwhpthlzsOXS',
          ]}
        />
      </Box>
    </>
  );
};

export default Discover;
