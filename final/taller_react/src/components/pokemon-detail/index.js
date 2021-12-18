import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { getPokemon } from '../../services/pokeApi';
import patternCard from '../../images/bg-pattern-card.svg';
import './index.css';

const PokemonDetail = () => {
  const { pokemonId } = useParams();
  const [pokemon, setPokemon] = useState(null);
  useEffect(() => {
    getPokemon(pokemonId).then((pokemon) => {
      setPokemon(pokemon);
    });
  }, []);
  return (
    <div className='card-container'>
      {pokemon && (
        <div className='card'>
          <img src={patternCard} alt='' className='card-header' />
          <div className='card-body'>
            <img
              src={pokemon.sprites.other.dream_world.front_default}
              alt=''
              className='card-body-img'
            />
            <h1 className='card-body-title'>
              {pokemon.name}
              <span>{pokemon.base_experience} exp</span>
            </h1>
          </div>
          <Link to='/'>
            <div className='card-back-button'>
              <span>&lt;</span>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default PokemonDetail;
