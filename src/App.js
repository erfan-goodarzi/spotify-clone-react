import { Routes, Route } from "react-router-dom";
import Auth from "./components/auth/Auth";
import GlobalStyles from "./container/material/Global-Style";
import { getTokenFromResponse } from "./container/config-spotify";
import Grid from "@mui/material/Grid";
import SideBar from "./components/Header/menu/SideBar";
import Profile from "./components/Header/Profile/Profile";
import { Box } from "@mui/system";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      {getTokenFromResponse().access_token ? (
        <Grid container>
          <Grid item xs={2} sx={{ ml: 4 }}>
            <SideBar />
          </Grid>
          <Grid item xs={8} container direction="column">
            <Header />
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
              <Grid item sx={{ width: "100%" }}>
                <Box
                  sx={{
                    width: "121%",
                    overflowY: "scroll",
                    overflowX: "clip",
                    height: "79vh", 
                  }}
                >
                  <Routes>
                    <Route path="/profile" element={<Profile />} />
                  </Routes>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      ) : (
        <Routes>
          <Route path="/" element={<Auth />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
