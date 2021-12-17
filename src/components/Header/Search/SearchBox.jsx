import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import { BiSearch } from "react-icons/bi";
import { VscClose } from "react-icons/vsc";
import { GoSettings } from "react-icons/go";
import { Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import SpotifyWebApi from "spotify-web-api-js";
import { searchResult } from "../../../redux/SpotifySlice";
import { getTokenFromResponse } from "../../../config/config-spotify";

const SearchBox = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [typeOfSearch, setTypeOfSearch] = useState("track");
  const [querySearch, setQuerySearch] = useState("");
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (e) => {
    setAnchorEl(null);
    setTypeOfSearch(e.target.textContent);
  };
  const dispatch = useDispatch();
  const spotifyApi = new SpotifyWebApi();

  const searchHandler = (e) => {
    if (e.target.value === "") {
      dispatch(searchResult([]));
    }
    setQuerySearch(e.target.value);
  };

  const setEmptyInput = () => {
    dispatch(searchResult([]));
    setQuerySearch("");
  };
  useEffect(() => {
    //get Access Token
    spotifyApi.setAccessToken(getTokenFromResponse().access_token);
    //Search Song
    spotifyApi
      .search(querySearch, [typeOfSearch])
      .then((res) => {
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
          let minutes = Math.floor(song.duration_ms / 60000);
          let seconds = ((song.duration_ms % 60000) / 1000).toFixed(0);
          let songTime = minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
          console.log(song);
          return {
            cover:
              typeOfSearch === "track"
                ? song.album.images.length === 0
                  ? null
                  : song.album.images[2].url
                : song.images.length === 0
                ? null
                : song.images[2].url,
            name: song.name,
            album: song.name,
            time:
              typeOfSearch === "artist" || typeOfSearch === "playlist"
                ? null
                : songTime,
            id: typeOfSearch === "track" ? song.album.id : song.id,
            singer:
              typeOfSearch === "artist"
                ? null
                : typeOfSearch === "playlist"
                ? song.owner.display_name
                : typeOfSearch === "episode"
                ? song.name
                : song.artists[0].name,
            musicSrc: typeOfSearch !== "artist" ? song.preview_url : null,
          };
        });
        dispatch(searchResult(newTrack));
      })
      .catch((err) => console.log(err));
  }, [querySearch, typeOfSearch]);

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
      {!querySearch ? (
        <IconButton sx={{ p: "10px", color: "#ababab" }} aria-label="menu">
          <BiSearch />
        </IconButton>
      ) : (
        <IconButton
          sx={{ p: "10px", color: "#ababab" }}
          aria-label="menu"
          onClick={setEmptyInput}
        >
          <VscClose />
        </IconButton>
      )}

      <InputBase
        value={querySearch}
        onChange={searchHandler}
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
        <MenuItem onClick={handleClose}>track</MenuItem>
        <MenuItem onClick={handleClose}>album</MenuItem>
        <MenuItem onClick={handleClose}>artist</MenuItem>
        <MenuItem onClick={handleClose}>playlist</MenuItem>
        <MenuItem onClick={handleClose}>episode</MenuItem>
      </Menu>
    </Paper>
  );
};

export default SearchBox;
