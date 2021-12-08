import Box from "@mui/material/Box";
const Topbanner = () => {
  return (
    <>
      <Box
        sx={{
          width: 1123,
          height: "43vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "20px",
          mt: 4,
          transition: "all 0.3s ease-in-out",

          backgroundImage:
            "url(https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/165899486/original/4d086ab0c297311d6684fa0f8f21fc43c991945d/design-a-music-cover-artwork-album-cover-design.jpg)",
          "&:hover": {
            transition: "all 0.3s ease-in-out",
            backgroundColor: "primary.main",
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      />
    </>
  );
};

export default Topbanner;
