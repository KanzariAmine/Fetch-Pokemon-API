import { fade, makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  pokedexContainer: {
    paddingTop: "20px",
    paddingLeft: "50px",
    paddingRight: "50px",
  },
  centerProgressBar: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: `translate("-50%", "-50%")`,
  },
  cardMedia: {
    margin: "auto",
    width: "130px",
    height: "130px",
    cursor: "pointer",
  },
  capitalizeName: {
    textTransform: "capitalize",
    textAlign: "center",
  },
  searchContainer: {
    display: "flex",
    backgroundColor: fade(theme.palette.common.white, 0.15),
    paddingLeft: "20px",
    paddingRight: "20px",
    marginTop: "5px",
    marginBottom: "5px",
  },
  searchIcon: {
    alignSelf: "flex-end",
    marginBottom: "5px",
  },
  searchInput: {
    width: "200px",
    margin: "5px",
  },
}));
export default useStyles;
