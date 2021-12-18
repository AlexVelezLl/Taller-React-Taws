import React from 'react';

import Pokemon from './Pokemon';
import './index.css';
import SearchBar from './SearchBar';

const Pokedex = ({ pokemons, deletePokemon, searchPokemon }) => {
  return (
    <section className='pokedex'>
      <SearchBar searchPokemon={searchPokemon} />
      <h2>Pokedex</h2>
      <div className='pokedex-grid'>
        {pokemons.map((pokemon, idx) => {
          return (
            <Pokemon
              key={idx}
              pokemon={pokemon}
              deletePokemon={deletePokemon}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Pokedex;
