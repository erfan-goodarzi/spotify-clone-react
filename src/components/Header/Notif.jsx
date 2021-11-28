import Box from "@mui/material/Box";
import { BiMessageSquareDetail, BiBell } from "react-icons/bi";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import { useState } from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import Badge from "@mui/material/Badge";

const Notification = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [Alert, setAlert] = useState(false);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const AlertHandler = () => {
    setAlert(true);
  };

  const AlertHandlerClose = () => {
    setTimeout(() => {
      setAlert(false);
    }, 2000);
  };

  return (
    <Box sx={{
      mr: {sm: 2}
    }}>
      <Box
        sx={{
          "& > :not(style)": {
            m: {lg: 1, sm: 0},
            color: "#ababab !important",
            fontSize: 22,
          },
        }}
      >
        <IconButton
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <Badge color="secondary" variant="dot">
            <BiMessageSquareDetail />
          </Badge>
        </IconButton>

        <IconButton onClick={AlertHandler}>
          <BiBell />
        </IconButton>
      </Box>
      <Menu
        sx={{
          width: {lg: "62%", sm: '70%'},
          ml: {lg: 44, md: 29, sm: 14},
          mt: 1,
        }}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Paper
          elevation={0}
          sx={{
            width: "100%",
            padding: " 2px 23px",
          }}
        >
          <Typography sx={{ fontSize: 21, fontWeight: "800", mb: 1 }}>
            Music without limits
          </Typography>
          <Divider />
          <Typography sx={{ fontSize: 16, fontWeight: "300", mt: 1 }}>
            Premium lets you play any song, anytime. You can even listen when
            you’re offline. No restrictions. Ad-free music listening.
          </Typography>
        </Paper>
      </Menu>
      <Snackbar
        open={Alert}
        autoHideDuration={1000}
        onClose={AlertHandlerClose}
        message="There is currently no message for you"
      />
    </Box>
  );
};

export default Notification;
