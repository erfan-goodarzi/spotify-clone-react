import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import { Divider, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { playSong } from "../../redux/SpotifySlice";
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

const Toptrack = ({ Title, Track }) => {
  const dispatch = useDispatch();
  return (
    <>
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
            if (e.row.musicSrc === null) {
              alert("This song cannot be played");
            } else {
              dispatch(playSong(e.row));
            }
          }}
          disableColumnSelector
          disableSelectionOnClick
          rows={Track}
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
