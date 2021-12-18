import React from 'react';
import { Link } from 'react-router-dom';
import './Pokemon.css';

const Pokemon = ({ pokemon, deletePokemon }) => {
  return (
    <div className='pokemon-card'>
      <Link to={`/pokemon/${pokemon.id}`}>
        <div className='pokemon-img-container'>
          <img src={pokemon.image} alt={pokemon.name} />
        </div>
      </Link>
      <div className='pokemon-card-body'>
        <div className='pokemon-card-top'>
          <h3>{pokemon.name}</h3>
          <div>#{pokemon.id}</div>
        </div>
        <div className='pokemon-card-bottom'>
          <div className='pokemon-type'>
            {pokemon.types.map((type, idx) => {
              return (
                <div key={idx} className='pokemon-type-text'>
                  {type}
                </div>
              );
            })}
          </div>
          <div
            className='delete-pokemon'
            onClick={() => deletePokemon(pokemon.id)}
          >
            Delete
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
