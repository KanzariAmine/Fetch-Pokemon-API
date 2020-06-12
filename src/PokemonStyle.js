import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  centerProgressBar: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: `translate("-50%", "-50%")`,
  },
  pokemonImg: {
    height: "500px",
    width: "500px",
  },
});

export default useStyles;
