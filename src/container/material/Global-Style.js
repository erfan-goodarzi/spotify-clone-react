import { createStyles, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() =>
  createStyles({
    "@global": {
      body: {
        backgroundImage: "linear-gradient(183deg, #303347, #4C4853, #303347)",
        height: "100vh",
      },
      "*": {
        fontFamily: "Nunito !important",
        margin: 0,
        padding: 0,
      },
      ".MuiBadge-badge": {
        width: "20px",
        height: "20px",
        borderRadius: " 50%",
        margin: "10px 19px",
        backgroundColor: "#FDC10C !important",
        fontSize: " 6px",
      },
    },
  })
);

const GlobalStyles = () => {
  useStyles();

  return null;
};

export default GlobalStyles;
