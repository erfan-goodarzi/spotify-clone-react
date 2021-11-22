import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import { BiSearch } from "react-icons/bi";

const SearchBox = () => {
  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        bgcolor: "#1B1A20",
        ml: 4,
        mr: 0,
        display: "flex",
        alignItems: "center",
        width: "80%",
        height: 55,
        borderRadius: "6px",
      }}
    >
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
        sx={{ height: 28, m: 0.5, bgcolor: "#ababab" }}
        orientation="vertical"
      />
      <IconButton sx={{ p: "10px", color: "#ababab" }} aria-label="menu">
        <BiSearch />
      </IconButton>
    </Paper>
  );
};

export default SearchBox;
