import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import { Divider, Typography } from "@mui/material";
const columns = [
  {
    field: "img",
    headerName: "Cover",
    width: 70,
    sortable: false,
    align: "center",
    headerAlign: "center",
    renderCell: (params) => (
      <img src={params.value} style={{ width: 95 }} alt="CoverSongs" />
    ),
  },
  {
    field: "id",
    headerName: "ID",
    width: 10,
    sortable: false,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "songs",
    headerName: "Song",
    width: 150,
    sortable: false,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "album",
    headerName: "Album",
    width: 150,
    sortable: false,
    align: "center",
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
    field: "Options",
    headerName: "Options",
    sortable: false,
    align: "center",
    headerAlign: "center",
    width: 130,
    valueGetter: (params) =>
      `${params.getValue(params.id, "songs") || ""} ${
        params.getValue(params.id, "album") || ""
      }`,
  },
];

const rows = [
  {
    img: "https://i.scdn.co/image/ab6775700000ee85c0c1a5be67fc9d046151444f",
    id: 1,
    album: "Snow",
    songs: "I Dont Wanna know",
    time: '12:32',
  },
  {
    img: "https://i.scdn.co/image/ab6775700000ee85c0c1a5be67fc9d046151444f",
    id: 2,
    album: "Lannister",
    songs: "Stuck with U (with Justin Bieber)",
    time: 42,
  },
  {
    img: "https://i.scdn.co/image/ab6775700000ee85c0c1a5be67fc9d046151444f",
    id: 3,
    album: "Lannister",
    songs: "Jaime",
    time: 45,
  },
  {
    img: "https://i.scdn.co/image/ab6775700000ee85c0c1a5be67fc9d046151444f",
    id: 4,
    album: "Stark",
    songs: "Arya",
    time: 16,
  },
  {
    img: "https://i.scdn.co/image/ab6775700000ee85c0c1a5be67fc9d046151444f",
    id: 5,
    album: "Targaryen",
    songs: "Daenerys",
    time: 42,
  },
  {
    img: "https://i.scdn.co/image/ab6775700000ee85c0c1a5be67fc9d046151444f",
    id: 6,
    album: "Melisandre",
    songs: "null",
    time: 150,
  },
  {
    img: "https://i.scdn.co/image/ab6775700000ee85c0c1a5be67fc9d046151444f",
    id: 7,
    album: "Clifford",
    songs: "Ferrara",
    time: 44,
  },
  {
    img: "https://i.scdn.co/image/ab6775700000ee85c0c1a5be67fc9d046151444f",
    id: 8,
    album: "Frances",
    songs: "Rossini",
    time: 36,
  },
  {
    img: "https://i.scdn.co/image/ab6775700000ee85c0c1a5be67fc9d046151444f",
    id: 9,
    album: "Roxie",
    songs: "Harvey",
    time: 65,
  },
];

const Toptrack = () => {
  return (
    <>
      <Divider sx={{ mt: 4, ml: 22 }} />
      <Box sx={{ width: "64%", mx: "auto", mt: 6 }}>
        <Typography
          sx={{
            mb: 3,
            fontSize: 25,
            fontWeight: 300,
            color: "#18d860",
          }}
        >
          Top Tracks
        </Typography>
        <DataGrid
          scrollbarSize={2}
          disableColumnSelector
          disableSelectionOnClick
          rows={rows}
          ColumnUnsortedIcon={false}
          columns={columns}
          showColumnRightBorder={false}
          pageSize={10}
          hideFooterPagination
          rowsPerPageOptions={[1]}
          disableColumnMenu
        />
      </Box>
    </>
  );
};

export default Toptrack;
