import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Playbutton from "../PlayerButton/PlayButton";
import { useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import { useDispatch, useSelector } from "react-redux";
import { getNewRelease } from "../../redux/SpotifySlice";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { getTokenFromResponse } from "../../config/config-spotify";

const LatsetRelease = () => {
  const newRelease = useSelector((state) => state.spotify.newRelease);
  const dispatch = useDispatch();
  const spotifyApi = new SpotifyWebApi();
  useEffect(() => {
    spotifyApi.setAccessToken(getTokenFromResponse().access_token);
    //Get public albums
    spotifyApi.getNewReleases({ limit: 20 }).then((res) => {
      const songs = res.albums.items;
      const newTrack = songs.map((song) => {
        return {
          cover: song.images[1].url,
          id: song.id,
          name: song.name,
        };
      });
      dispatch(getNewRelease(newTrack));
    });
  }, [dispatch]);
  return (
    <>
      <Swiper
        slidesPerView={13}
        spaceBetween={296}
        centeredSlides={false}
        pagination={{
          clickable: true,
        }}
      >
        {newRelease.map((item) => (
          <SwiperSlide className="mySwiper1" key={item.id}>
            <Box
              sx={{
                flexGrow: 1,
                backgroundSize: "cover",
                display: "flex",
                width: 177,
                backgroundImage: `url(${item.cover})`,
                margin: "2rem 0rem",
                transition: "all 0.3s ease-in-out",
                height: 193,
                backgroundColor: "#1b1a20",
                borderRadius: "10px",
                "&:hover": {
                  transition: "all 0.3s ease-in-out",
                  boxShadow: "3px 2px 12px 1px #2c2c2c",
                  backgroundColor: "#1b1a20f2",
                  opacity: [0.9, 0.8, 0.7],
                },
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  width: "176px",
                  zIndex: 0,
                  height: "60px",
                  top: "165px",
                  left: "0rem",
                  overflow: "hidden",
                  cursor: "move",
                  borderBottomLeftRadius: "10px",
                  borderBottomRightRadius: "10px",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: " -95px",
                    left: "-4px",
                    backgroundImage: `url(${item.cover})`,
                    bottom: "-8rem",
                    right: "-10px",
                    backgroundPosition: "4px -226px",
                    backgroundSize: "193px 188px",
                    filter: " blur(16px)",
                  }}
                ></Box>
              </Box>
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
              >
                <Grid item xs={8}>
                  <Box
                    sx={{ position: "absolute", top: "136px", left: "123px" }}
                  >
                    <Playbutton
                    //   onClickHandler={() => {
                    //     song.track.map((i) => dispatch(playSong(i)));
                    //   }}
                    />
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Box>
                    <Typography
                      sx={{
                        fontSize: 13,
                        width: "127%",
                        zIndex: 2,
                        fontWeight: "700",
                        color: "#fff",
                        textAlign: "center",
                        position: "absolute",
                        top: 183,
                        left: 11,
                        lineHeight: "15px",
                      }}
                    >
                      {item.name}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default LatsetRelease;
