import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Grid,
  Card,
  CardContent,
  CircularProgress,
  CardMedia,
  Typography,
  TextField,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import useStyles from "./PokedexStyle";
import axios from "axios";

function Pokedex(props) {
  const { history } = props;
  const classes = useStyles();
  const [pokemonData, setPokemonData] = useState();
  const [filter, setFilter] = useState("");
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=807`)
      .then(function (response) {
        const { data } = response;
        const { results } = data;

        const newPokemonData = {};
        results.forEach((pokemon, index) => {
          newPokemonData[index + 1] = {
            id: index + 1,
            name: pokemon.name,
            sprite: `https://pokeres.bastionbot.org/images/pokemon/${
              index + 1
            }.png`,
          };
        });
        setPokemonData(newPokemonData);
      });
  }, []);

  const handleSearchChange = (e) => {
    setFilter(e.target.value);
  };
  /**
   * Create model for Card
   * @param {OBJECT} pokemon
   */
  const getPokemonCard = (pokemonId) => {
    const { id, name, sprite } = pokemonData[pokemonId];
    return (
      <Grid item xs={4} key={pokemonId}>
        <Card onClick={() => history.push(`/${id}`)}>
          <CardMedia className={classes.cardMedia} image={sprite} />
          <CardContent className={classes.cardContent}>
            <Typography
              className={classes.capitalizeName}
            >{`${id}. ${name}`}</Typography>
          </CardContent>
        </Card>
      </Grid>
    );
  };
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <div className={classes.searchContainer}>
            <SearchIcon className={classes.searchIcon} />
            <TextField
              className={classes.searchInput}
              onChange={handleSearchChange}
              label="Pokemon"
              variant="standard"
            />
          </div>
        </Toolbar>
      </AppBar>
      {pokemonData ? (
        <Grid container className={classes.pokedexContainer} spacing={3}>
          {Object.keys(pokemonData).map(
            (pokemonId) =>
              pokemonData[pokemonId].name.includes(filter) &&
              getPokemonCard(pokemonId)
          )}
        </Grid>
      ) : (
        <CircularProgress className={classes.centerProgressBar} />
      )}
    </>
  );
}
export default Pokedex;
