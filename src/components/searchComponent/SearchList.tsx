import React from 'react';
import {PokemonCardComponent, PokemonCardType} from '../card/PokemonCardComponent';
import '../lists/PokemonsList/Pokemons.scss'

function SearchList(props: {filteredPokemons: PokemonCardType[]}) {
  const filtered = props.filteredPokemons.map((pokemon: PokemonCardType) =>  
    <PokemonCardComponent id={pokemon.id} imgUrl={pokemon.imgUrl} pokeName={pokemon.pokeName} key={pokemon.id}
  />); 
  return (
    <div className='Pokemons'>
      {filtered}
    </div>
  );
}

export default SearchList;