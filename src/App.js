import React, { useState } from 'react';
import PokemonSearch from './PokemonSearch';
import SearchResults from './SearchResults';
import { GlobalContext } from './Contexts/GlobalContext';
import axios from 'axios';
import './App.css';

const App = () => {

  const [inputVal, setInputVal] = useState();
  const [pokemonSelect, setPokemonSelect] = useState(false);
  const [name, setName] = useState();
  const [type, setType] = useState();
  const [att, setAtt] = useState();
  const [def, setDef] = useState();
  const [hp, setHp] = useState();
  const [pokemonImg, setPokemonImg] = useState();

  const inputChange = (e) => {
    setInputVal(e.target.value);
  }
  const showPokemon = () => {
    
      axios.get(`https://pokeapi.co/api/v2/pokemon/${inputVal}`).then(
        (response) => {
          // console.log(response);
          setName(response.data.name);
          setType(response.data.types[0].type.name);
          setPokemonImg(response.data.sprites.front_default);
          setAtt(response.data.stats[1].base_stat);
          setDef(response.data.stats[2].base_stat);
          setHp(response.data.stats[0].base_stat);
        }
      );
      setPokemonSelect(true);
  }
 
  return (
    <>
    <h1>Pokemon App</h1>
    <div className="App">
        <GlobalContext.Provider value={{ name, setName, pokemonSelect, setPokemonSelect, type, setType, att, setAtt, def, setDef, hp, setHp }}>
          <PokemonSearch />
          <SearchResults />
        </GlobalContext.Provider>
    </div>
    </>
  );
}

export default App;
