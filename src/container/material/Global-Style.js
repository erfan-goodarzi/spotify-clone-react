import { createStyles, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() =>
  createStyles({
    "@global": {
      body: {
        background: "#FFEBC2",
      },
      "*": {
        fontFamily: "Nunito !important",
        margin: 0,
        padding: 0,
      },
      ".MuiBadge-badge":{
        width: '20px',
        height: '20px',
        borderRadius:' 50%',
        margin: '10px 19px',
        backgroundColor: '#FDC10C !important',
        fontSize:' 6px',
      }
      
    },
  })
);

const GlobalStyles = () => {
  useStyles();

  return null;
};

export default GlobalStyles;