import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import { Divider, Typography } from "@mui/material";
import SpotifyWebApi from "spotify-web-api-js";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUserTopTrack } from "../../redux/SpotifySlice";
import { useSelector } from "react-redux";

const columns = [
  {
    field: "img",
    headerName: "Cover",
    width: 80,
    sortable: false,
    align: "center",
    headerAlign: "center",
    renderCell: (params) => <img src={params.value} alt="CoverSongs" />,
  },

  {
    field: "songs",
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
    field: "artist",
    headerName: "Artist",
    sortable: false,
    align: "center",
    headerAlign: "center",
    width: 190,
  },
];

// const rows = [
//   {
//     img: "https://i.scdn.co/image/ab6775700000ee85c0c1a5be67fc9d046151444f",
//     id: 1,
//     album: "Snow",
//     songs: "I Dont Wanna know",
//     time: "12:32",
//   },
//   {
//     img: "https://i.scdn.co/image/ab6775700000ee85c0c1a5be67fc9d046151444f",
//     id: 2,
//     album: "Lannister",
//     songs: "Stuck with U (with Justin Bieber)",
//     time: 42,
//   },
//   {
//     img: "https://i.scdn.co/image/ab6775700000ee85c0c1a5be67fc9d046151444f",
//     id: 3,
//     album: "Lannister",
//     songs: "Jaime",
//     time: 45,
//   },
//   {
//     img: "https://i.scdn.co/image/ab6775700000ee85c0c1a5be67fc9d046151444f",
//     id: 4,
//     album: "Stark",
//     songs: "Arya",
//     time: 16,
//   },
//   {
//     img: "https://i.scdn.co/image/ab6775700000ee85c0c1a5be67fc9d046151444f",
//     id: 5,
//     album: "Targaryen",
//     songs: "Daenerys",
//     time: 42,
//   },
//   {
//     img: "https://i.scdn.co/image/ab6775700000ee85c0c1a5be67fc9d046151444f",
//     id: 6,
//     album: "Melisandre",
//     songs: "null",
//     time: 150,
//   },
//   {
//     img: "https://i.scdn.co/image/ab6775700000ee85c0c1a5be67fc9d046151444f",
//     id: 7,
//     album: "Clifford",
//     songs: "Ferrara",
//     time: 44,
//   },
//   {
//     img: "https://i.scdn.co/image/ab6775700000ee85c0c1a5be67fc9d046151444f",
//     id: 8,
//     album: "Frances",
//     songs: "Rossini",
//     time: 36,
//   },
//   {
//     img: "https://i.scdn.co/image/ab6775700000ee85c0c1a5be67fc9d046151444f",
//     id: 9,
//     album: "Roxie",
//     songs: "Harvey",
//     time: 65,
//   },
// ];

const Toptrack = ({ Title }) => {
  const dispatch = useDispatch();
  const topTrack = useSelector((state) => state.spotify.getUserTopTrack);
  const spotifyApi = new SpotifyWebApi();
  useEffect(() => {
    spotifyApi.getMyTopTracks({ limit: 6 }).then((res) => {
      console.log(res.items);
      const Fill = res.items.map((item) => {
        let minutes = Math.floor(item.duration_ms / 60000);
        let seconds = ((item.duration_ms % 60000) / 1000).toFixed(0);
        let songTime = minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
        return {
          img: item.album.images[2].url,
          songs: item.name,
          album: item.album.name,
          time: songTime,
          id: item.id,
          artist: item.artists[0].name
        };
      });
      console.log(Fill);
      dispatch(getUserTopTrack(Fill));
    });
  }, [dispatch]);

  return (
    <>
      <Divider sx={{ mt: 4, ml: 22 }} />
      <Box sx={{ width: "94%", mx: "auto", mt: 6 }}>
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
          disableColumnSelector
          disableSelectionOnClick
          rows={topTrack}
          ColumnUnsortedIcon={false}
          columns={columns}
          showColumnRightBorder={false}
          hideFooterPagination
          pageSize={8}
          rowsPerPageOptions={[8]}
          disableColumnMenu
        />
      </Box>
    </>
  );
};

export default Toptrack;
