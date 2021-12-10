import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import { BiSearch } from "react-icons/bi";
import { GoSettings } from "react-icons/go";
import { Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import SpotifyWebApi from "spotify-web-api-js";
import { searchResult } from "../../../redux/SpotifySlice";
import { getTokenFromResponse } from "../../../config/config-spotify";

const SearchBox = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [typeOfSearch, setTypeOfSearch] = useState("album");
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (e) => {
    setAnchorEl(null);
    console.log(e.target.textContent);
  };
  const dispatch = useDispatch();
  const spotifyApi = new SpotifyWebApi();
  useEffect(() => {
    //get Access Token
    spotifyApi.setAccessToken(getTokenFromResponse().access_token);
    //Search Song
    spotifyApi
      .search("taylor", [typeOfSearch])
      .then((res) => {
        console.log(res);
        const checkSearchType =
          res.artists ||
          res.albums ||
          res.playlists ||
          res.tracks ||
          res.episodes;
        const search = checkSearchType.items;
        if (search.length === 0) {
          alert("nothing found");
        }
        const newTrack = search.map((song) => {
          console.log(song);
          return {
            cover:
              typeOfSearch === "track"
                ? song.album.images.length === 0
                  ? null
                  : song.album.images[1].url
                : song.images.length === 0
                ? null
                : song.images[1].url,
            id: typeOfSearch === "track" ? song.album.id : song.id,
            name: typeOfSearch === "track" ? song.album.name : song.name,
          };
        });
        dispatch(searchResult(newTrack));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        bgcolor: "#1B1A20",
        ml: { lg: 6, md: 11, sm: 8 },
        mr: 0,
        display: "flex",
        alignItems: "center",
        width: { lg: "80%", sm: "72%" },
        height: 55,
        borderRadius: "6px",
      }}
    >
      <IconButton sx={{ p: "10px", color: "#ababab" }} aria-label="menu">
        <BiSearch />
      </IconButton>
      <InputBase
        sx={{
          ml: 1,
          flex: 1,
          p: "3px 13px",
          color: "#fff",
          fontSize: "14px",
          fontWeight: "200",
          letterSpacing: "0.8px",
        }}
        placeholder="Artist, Podcast or Songs..."
        inputProps={{ "aria-label": "Artist, Podcast or Songs..." }}
      />

      <Divider
        sx={{ height: 55, m: 0.5, bgcolor: "#38394b" }}
        orientation="vertical"
      />
      <IconButton
        sx={{ p: "9px", color: "#ababab", fontSize: 18 }}
        aria-label="menu"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <GoSettings />
        <Typography sx={{ fontSize: 13, p: "0 7px" }}>Filter</Typography>
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>Album</MenuItem>
        <MenuItem onClick={handleClose}>Artist</MenuItem>
        <MenuItem onClick={handleClose}>Track</MenuItem>
        <MenuItem onClick={handleClose}>Playlist</MenuItem>
        <MenuItem onClick={handleClose}>Episode</MenuItem>
      </Menu>
    </Paper>
  );
};

export default SearchBox;
