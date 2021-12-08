import { Button } from "@mui/material";
import { BiRightArrow } from "react-icons/bi";

const Playbutton = ({ onClickHandler }) => {
  return (
    <>
      <Button
        onClick={onClickHandler}
        sx={{
          background: "linear-gradient( 110deg, #22C35C, #2FE18E)",
          minWidth: "41px",
          fontSize: "19px",
          height: "41px",
          borderRadius: "50%",
        }}
      >
        <BiRightArrow style={{ color: "#fff" }} />
      </Button>
    </>
  );
};

export default Playbutton;
