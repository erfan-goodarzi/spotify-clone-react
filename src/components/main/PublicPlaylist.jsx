import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import Playbutton from "../PlayerButton/PlayButton";
import { useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import { useDispatch } from "react-redux";
import { getUserTopTrack, playSong } from "../../redux/SpotifySlice";
import { useSelector } from "react-redux";

const Img = styled("img")({
  margin: "17px 16px",
  display: "flex",
  width: 107,
  height: 107,
  borderRadius: "6px",
});

const Publicplaylist = () => {
  const dispatch = useDispatch();
  const topTrack = useSelector((state) => state.spotify.getUserTopTrack);
  const spotifyApi = new SpotifyWebApi();
  useEffect(() => {
    //Get public albums
    spotifyApi
      .getAlbums([
        "5ISVQShioiGcxJVrfQMlzK",
        "1CIUfTEm0xPgHDUNc6G7rW",
        "1aOnDHUnlmYKRBcof6Y9UV",
        "5meeIKPsm1qLNWTrGMosVp",
        "5ZNIZY6Dg9sC04xsJEBx0o",
      ])
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
  }, [dispatch]);
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={296}
        centeredSlides={false}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        {topTrack.map((song) => (
          <SwiperSlide key={song.id}>
            <Box
              sx={{
                flexGrow: 1,
                width: 350,
                margin: "2rem 0rem",
                transition: "all 0.3s ease-in-out",
                height: 140,
                backgroundColor: "#1b1a20",
                borderRadius: "6px",
                "&:hover": {
                  transition: "all 0.3s ease-in-out",
                  boxShadow: "3px 2px 12px 1px #2c2c2c",
                  backgroundColor: "#1b1a20f2",
                  opacity: [0.9, 0.8, 0.7],
                },
              }}
            >
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
              >
                <Grid item xs={8}>
                  <Img alt={song.name} src={song.cover} />
                  <Box sx={{ position: "absolute", top: "5rem", left: "49px" }}>
                    <Playbutton
                      onClickHandler={() => {
                        song.track.map((i) => dispatch(playSong(i)));
                      }}
                    />
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Box>
                    <AvatarGroup max={4} sx={{ mr: "7rem" }}>
                      <Avatar alt="Remy Sharp" src={song.cover} />
                      <Avatar
                        alt="Travis Howard"
                        src="https://mui.com/static/images/avatar/2.jpg"
                      />
                      <Avatar
                        alt="Cindy Baker"
                        src="https://mui.com/static/images/avatar/3.jpg"
                      />
                      <Avatar
                        alt="Agnes Walker"
                        src="https://mui.com/static/images/avatar/4.jpg"
                      />
                      <Avatar
                        alt="Trevor Henderson"
                        src="https://mui.com/static/images/avatar/5.jpg"
                      />
                    </AvatarGroup>
                    <Typography
                      sx={{
                        fontSize: 18,
                        fontWeight: "300",
                        color: "#ddd",
                        margin: "-78px -100px",
                      }}
                    >
                      {song.name}
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

export default Publicplaylist;
