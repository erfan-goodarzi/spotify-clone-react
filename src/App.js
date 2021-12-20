import { Routes, Route } from 'react-router-dom';
import Auth from './components/auth/Auth';
import GlobalStyles from './style/Global-Style';
import { getTokenFromResponse } from './config/config-spotify';
import Grid from '@mui/material/Grid';
import SideBar from './components/Header/menu/SideBar';
import Profile from './components/Header/Profile/Profile';
import { Box } from '@mui/system';
import Header from './components/Header/Header';
import Footer from './components/footer/Footer';
import Homepage from './components/page/home/HomePage';
import Discover from './components/page/discover/Discover';
import { useSelector } from 'react-redux';
import Toptrack from './components/main/TopTrack';

function App() {
  const searchResult = useSelector((state) => state.spotify.searchResult);
  return (
    <div className='App'>
      <GlobalStyles />
      {getTokenFromResponse().access_token ? (
        <Grid container>
          <Grid item xs={2} sx={{ ml: 4 }}>
            <SideBar />
          </Grid>
          <Grid item xs={8} container direction='column'>
            <Header />

            <Grid
              item
              xs
              container
              direction='row'
              alignItems='center'
              sx={{
                mt: 3,
              }}
            >
              <Grid item sx={{ width: '100%' }}>
                <Box
                  sx={{
                    width: { lg: '121%', md: '120%', sm: '118%' },
                    overflowY: 'scroll',
                    overflowX: 'clip',
                    height: '79vh',
                  }}
                >
                  {searchResult.length === 0 ? null : (
                    <Grid sx={{ mr: '171px' }}>
                      <Toptrack Title='Search Result' Track={searchResult} />
                    </Grid>
                  )}
                  <Routes>
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/home' element={<Homepage />} />
                    <Route path='/discover' element={<Discover />} />
                  </Routes>
                </Box>
              </Grid>
            </Grid>
            <Footer />
          </Grid>
        </Grid>
      ) : (
        <Routes>
          <Route path='/' element={<Auth />} />
        </Routes>
      )}
    </div>
  );
}
export default App;
