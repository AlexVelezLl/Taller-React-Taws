import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Header from './Header';
import Pokedex from './pokedex';
import pokemonsData from '../pokemons.json';
import PokemonDetail from './pokemon-detail';

const Home = () => {
  const [pokemons, setPokemons] = useState(pokemonsData);
  const [filteredPokemons, setFilteredPokemons] = useState(pokemons);

  const searchPokemon = (searchValue) => {
    const filteredPokemons = pokemons.filter((pokemon) => {
      return pokemon.name.toLowerCase().includes(searchValue.toLowerCase());
    });
    setFilteredPokemons(filteredPokemons);
  };

  const deletePokemon = (id) => {
    const newPokemons = pokemons.filter((pokemon) => {
      return pokemon.id !== id;
    });
    const newFilteredPokemons = filteredPokemons.filter((pokemon) => {
      return pokemon.id !== id;
    });
    setPokemons(newPokemons);
    setFilteredPokemons(newFilteredPokemons);
  };

  return (
    <div>
      <Header searchPokemon={searchPokemon} />
      <Router>
        <Routes>
          <Route
            path='/'
            element={
              <Pokedex
                pokemons={filteredPokemons}
                deletePokemon={deletePokemon}
                searchPokemon={searchPokemon}
              />
            }
          />
          <Route path='/pokemon/:pokemonId' element={<PokemonDetail />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Home;
