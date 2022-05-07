import React, { useState, useContext } from 'react';
import { GlobalContext } from './Contexts/GlobalContext';

function SearchResults() {
  const { pokemonSelect, name, pokemonImg, type, att, def, hp } = useContext(GlobalContext);
  return (
    <>
        <div className='search-results'>
            {!pokemonSelect ? (
              <div>.............</div>
            ) : (
              <>
                <div><img src={pokemonImg} alt={name} /></div>
                <p>Name - {name}</p>
                <p>Typing - {type}</p>
                <p>Attack Stat - {att}</p>
                <p>Defense Stat - {def}</p>
                <p>HP Stat - {hp}</p>
              </>
            )}
        </div>
    </>
  );
}

export default SearchResults;
