import React, { useState } from 'react';
import Scroll from './Scroll';
import SearchList from './SearchList';
import { PokemonCardType } from '../card/PokemonCardComponent';

function Search(props: {details: PokemonCardType[]}) {

  const [searchField, setSearchField] = useState("");

  const filteredPokemons = props.details.filter(
    pokemon => {
      return (
        pokemon
        .pokeName
        .toLowerCase()
        .includes(searchField.toLowerCase())
      );
    }
  );

  const handleChange = (e: any) => {
    setSearchField(e.target.value);
  };

  function searchList() {
    return (
        <Scroll>
            <SearchList filteredPokemons={filteredPokemons} />
        </Scroll>
    );
  }

  return (
    <section className="garamond">
      <div className="navy georgia ma0 grow">
        <h2 className="f2">Search your Pokemon</h2>
      </div>
      <div className="pa2">
        <input 
          className="pa3 bb br3 grow b--none bg-lightest-blue ma3"
          type = "search" 
          placeholder = "Search Pokemon" 
          onChange = {handleChange}
        />
      </div>
      {searchList()}
    </section>
  );
}

export default Search;