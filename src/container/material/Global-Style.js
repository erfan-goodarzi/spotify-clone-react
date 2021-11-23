import { createStyles, makeStyles } from "@material-ui/core";
import { useSelector } from "react-redux";

const useStyles = makeStyles(() =>
  createStyles({
    "@global": {
      body: {
        backgroundImage: (props) =>
          `linear-gradient(183deg, #303347 , ${props.color}, #303347)`,
        height: (props) => props.height,
      },
      "*": {
        fontFamily: "Nunito !important",
        margin: 0,
        padding: 0,
      },
      ".MuiBadge-badge": {
        width: "5px",
        borderRadius: " 50%",
        margin: "2px 4px",
        backgroundColor: "#18d45e !important",
      },
      ".MuiDataGrid-root": {
        border: "none !important",
      },
    },
  })
);

const GlobalStyles = () => {
  const maincolor = useSelector((state) => state.spotify.setColor);
  const props = {
    height: "100vh",
    color: maincolor || "#4C4853",
  };
  useStyles(props);

  return null;
};

export default GlobalStyles;
