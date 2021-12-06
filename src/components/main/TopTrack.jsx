import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import { Divider, Typography } from "@mui/material";
import SpotifyWebApi from "spotify-web-api-js";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUserTopTrack, playSong } from "../../redux/SpotifySlice";
import { useSelector } from "react-redux";
import Playbutton from "../PlayerButton/PlayButton";

const columns = [
  {
    field: "cover",
    headerName: "Cover",
    width: 80,
    sortable: false,
    align: "center",
    headerAlign: "center",
    renderCell: (params) => <img src={params.value} alt="CoverSongs" />,
  },

  {
    field: "name",
    headerName: "Song",
    width: 250,
    sortable: false,
    headerAlign: "center",
  },
  {
    field: "album",
    headerName: "Album",
    width: 350,
    sortable: false,
    headerAlign: "center",
  },
  {
    field: "time",
    headerName: "Time",
    width: 105,
    sortable: false,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "singer",
    headerName: "Artist",
    sortable: false,
    align: "center",
    headerAlign: "center",
    width: 190,
  },
  {
    field: "play",
    headerName: "",
    sortable: false,
    align: "center",
    headerAlign: "center",
    width: 80,
    renderCell: () => <Playbutton />,
  },
];

const Toptrack = ({ Title }) => {
  const dispatch = useDispatch();
  const topTrack = useSelector((state) => state.spotify.getUserTopTrack);
  const spotifyApi = new SpotifyWebApi();
  useEffect(() => {
    spotifyApi
      .getMyTopTracks({ limit: 20 })
      .then((res) => {
        const Fill = res.items.map((item) => {
          let minutes = Math.floor(item.duration_ms / 60000);
          let seconds = ((item.duration_ms % 60000) / 1000).toFixed(0);
          let songTime = minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
          return {
            cover: item.album.images[2].url,
            name: item.name,
            album: item.album.name,
            time: songTime,
            id: item.id,
            singer: item.artists[0].name,
            musicSrc: item.preview_url,
          };
        });
        dispatch(getUserTopTrack(Fill));
      })
      .catch((err) =>
        err ? alert("something went wrong. please logged in") : null
      );
  }, [dispatch]);

  return (
    <>
      <Divider sx={{ mt: 4, ml: 22 }} />
      <Box
        sx={{
          width: { lg: "100%", md: "97%", sm: "97%" },
          mx: "auto",
          mt: 6,
          ml: { lg: 5, md: "104px", sm: "72px" },
        }}
      >
        <Typography
          sx={{
            mb: 3,
            fontSize: 25,
            fontWeight: 300,
            color: "#18d860",
          }}
        >
          {Title}
        </Typography>

        <DataGrid
          autoHeight
          onRowClick={(e) => {
            dispatch(playSong(e.row));
          }}
          disableColumnSelector
          disableSelectionOnClick
          rows={topTrack}
          ColumnUnsortedIcon={false}
          columns={columns}
          showColumnRightBorder={false}
          pageSize={5}
          rowsPerPageOptions={[5]}
          disableColumnMenu
        />
      </Box>
    </>
  );
};

export default Toptrack;
