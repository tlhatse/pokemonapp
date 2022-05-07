import React, { useState, useContext } from 'react';
import { GlobalContext } from './Contexts/GlobalContext';

function PokemonSearch() {
  const { inputChange, inputVal, showPokemon } = useContext(GlobalContext);
  return (
    <>
        <div>
          <input type="text" onChange={inputChange} value={inputVal} />
          <button onClick={showPokemon}>Search</button>
        </div>
    </>
  );
}

export default PokemonSearch;
