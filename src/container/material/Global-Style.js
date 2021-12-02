import { createStyles, makeStyles } from "@material-ui/core";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) =>
  createStyles({
    "@global": {
      body: {
        backgroundImage: (props) =>
          `linear-gradient(183deg, #303347 , ${props.color}, #303347)`,
        height: (props) => props.height,
        overflow: "hidden",
        overscrollBehaviorY: "none",
      },
      "*": {
        fontFamily: "Nunito !important",
        margin: 0,
        padding: 0,
      },
      ".authimg": {
        [theme.breakpoints.up("xs")]: {
          width: "100%",
        },
      },
      ".MuiBadge-badge": {
        width: "5px",
        borderRadius: " 50%",
        margin: "2px 4px",
        backgroundColor: "#18d45e !important",
      },
      ".MuiDataGrid-root": {
        border: "none !important",
        height: '100%'
      },
      ".MuiDataGrid-cell": {
        borderBottom: "none !important",
        color: "#fff !important",
        fontWeight: 100,
        "&&:focus": {
          outline: "none !important",
        },
        "&&:focus-within": {
          outline: "none !important",
        },
      },
      ".MuiDataGrid-row": {
        margin: "14px 0px",
      },
      ".MuiDataGrid-virtualScroller": {
        paddingBottom: "8rem",

        padding: theme.spacing(1),
        [theme.breakpoints.up("md")]: {
          backgroundColor: "red",
        },
        [theme.breakpoints.up("md")]: {
          overflow: "scroll",
        },
        [theme.breakpoints.up("lg")]: {
          overflow: "unset !important",
        },
      },
      ".MuiDataGrid-virtualScrollerContent": {
        height: "55vh !important",
      },
      ".MuiDataGrid-columnHeaderTitle": {
        fontSize: "15px",
        fontWeight: "600 !important",
        color: "#ababab",
      },
      ".MuiTablePagination-root": {
        marginTop: "26rem !important",
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
