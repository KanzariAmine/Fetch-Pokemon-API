import React, { useState, useEffect } from "react";
import { Typography, Link, Button, CircularProgress } from "@material-ui/core";
import axios from "axios";
import useStyles from "./PokemonStyle";
function Pokemon(props) {
  const classes = useStyles();
  const {
    match: {
      params: { pokemonId },
    },
    history,
  } = props;
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
      .then(function (response) {
        const { data } = response;
        setPokemon(data);
      })
      .catch(function (error) {
        setPokemon(false);
      });
  }, [pokemonId]);

  const generatePokemonJSX = () => {
    const { name, id, species, height, weight, types, sprites } = pokemon;
    const fullImageUrl = `https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`;
    const { front_Default } = sprites;
    return (
      <>
        <Typography variant="h1">
          {`${id}. `}
          {name}
        </Typography>
        <img className={classes.pokemonImg} src={fullImageUrl} alt={name} />
        <Typography variant="h3">Pokemon Info</Typography>
        <Typography>
          {"Species: "} <Link href={species.url}>{species.name}</Link>
        </Typography>
        <Typography>Height: {height} </Typography>
        <Typography>Weight: {weight} </Typography>
        <Typography variant="h6"> Types:</Typography>
        {types.map((typeInfo) => {
          const { type } = typeInfo;
          const { name } = type;
          return <Typography key={name}> {`${name}`}</Typography>;
        })}
      </>
    );
  };

  return (
    <>
      {pokemon === undefined && (
        <CircularProgress className={classes.centerProgressBar} />
      )}
      {pokemon !== undefined && pokemon && generatePokemonJSX(pokemon)}
      {pokemon === false && <Typography> Pokemon not found</Typography>}
      {pokemon !== undefined && (
        <Button variant="contained" onClick={() => history.push("/")}>
          back to pokedex
        </Button>
      )}
    </>
  );
}

export default Pokemon;
