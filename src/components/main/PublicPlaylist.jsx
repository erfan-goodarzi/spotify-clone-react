import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

const Img = styled("img")({
  margin: "19px 11px",
  display: "flex",
  width: 120,
  height: 103,
  borderRadius: "5px",
});

const Publicplaylist = () => {
  return (
    <>
      <Swiper
        spaceBetween={293}
        slidesPerView={5}
        centeredSlides={true}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          {" "}
          <Box
            sx={{
              flexGrow: 1,
              width: 340,
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
                <Img
                  alt="complex"
                  src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/165899486/original/4d086ab0c297311d6684fa0f8f21fc43c991945d/design-a-music-cover-artwork-album-cover-design.jpg"
                />
              </Grid>
              <Grid item xs={4}>
                <Box>
                  <AvatarGroup max={4} sx={{ mr: "7rem" }}>
                    <Avatar
                      alt="Remy Sharp"
                      src="https://mui.com/static/images/avatar/1.jpg"
                    />
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
                      margin: "-78px -80px",
                    }}
                  >
                    Summer Hits 2021
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Box
            sx={{
              flexGrow: 1,
              width: 340,
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
                <Img
                  alt="complex"
                  src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/165899486/original/4d086ab0c297311d6684fa0f8f21fc43c991945d/design-a-music-cover-artwork-album-cover-design.jpg"
                />
              </Grid>
              <Grid item xs={4}>
                <Box>
                  <AvatarGroup max={4} sx={{ mr: "7rem" }}>
                    <Avatar
                      alt="Remy Sharp"
                      src="https://mui.com/static/images/avatar/1.jpg"
                    />
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
                      margin: "-78px -80px",
                    }}
                  >
                    Summer Hits 2021
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Box
            sx={{
              flexGrow: 1,
              width: 340,
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
                <Img
                  alt="complex"
                  src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/165899486/original/4d086ab0c297311d6684fa0f8f21fc43c991945d/design-a-music-cover-artwork-album-cover-design.jpg"
                />
              </Grid>
              <Grid item xs={4}>
                <Box>
                  <AvatarGroup max={4} sx={{ mr: "7rem" }}>
                    <Avatar
                      alt="Remy Sharp"
                      src="https://mui.com/static/images/avatar/1.jpg"
                    />
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
                      margin: "-78px -80px",
                    }}
                  >
                    Summer Hits 2021
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Box
            sx={{
              flexGrow: 1,
              width: 340,
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
                <Img
                  alt="complex"
                  src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/165899486/original/4d086ab0c297311d6684fa0f8f21fc43c991945d/design-a-music-cover-artwork-album-cover-design.jpg"
                />
              </Grid>
              <Grid item xs={4}>
                <Box>
                  <AvatarGroup max={4} sx={{ mr: "7rem" }}>
                    <Avatar
                      alt="Remy Sharp"
                      src="https://mui.com/static/images/avatar/1.jpg"
                    />
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
                      margin: "-78px -80px",
                    }}
                  >
                    Summer Hits 2021
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Box
            sx={{
              flexGrow: 1,
              width: 340,
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
                <Img
                  alt="complex"
                  src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/165899486/original/4d086ab0c297311d6684fa0f8f21fc43c991945d/design-a-music-cover-artwork-album-cover-design.jpg"
                />
              </Grid>
              <Grid item xs={4}>
                <Box>
                  <AvatarGroup max={4} sx={{ mr: "7rem" }}>
                    <Avatar
                      alt="Remy Sharp"
                      src="https://mui.com/static/images/avatar/1.jpg"
                    />
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
                      margin: "-78px -80px",
                    }}
                  >
                    Summer Hits 2021
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Publicplaylist;
