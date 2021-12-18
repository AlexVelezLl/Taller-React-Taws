import React, { useState } from 'react';

import './SearchBar.css';

const SearchBar = ({ searchPokemon }) => {
  const [search, setSearch] = useState('');
  return (
    <div className='searchbar-container'>
      <div className='searchbar'>
        <input
          type='text'
          placeholder='Busca un Pokemon'
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            searchPokemon(e.target.value);
          }}
        />
      </div>
      <div className='searchbar-btn'>
        <button onClick={() => searchPokemon(search)}>Buscar</button>
      </div>
    </div>
  );
};

export default SearchBar;
