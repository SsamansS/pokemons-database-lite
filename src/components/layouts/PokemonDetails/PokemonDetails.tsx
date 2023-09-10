/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
// import "./PokemonDetails.scss"
import { PokemonStateType } from "../../../APIs/PokeTypes";
import PokeAPI from "../../../APIs/PokeAPI";
import { useSelector } from "react-redux";

const PokemonDetails = () => {
  const CurPoke = useSelector((state: any) => state.counter.currentPokemon)
  console.log('CurPoke: ', CurPoke)

  const [pokeDetails, setPokeDetails] = useState<PokemonStateType>(CurPoke)
  console.log('pokeDetails', pokeDetails)

  useEffect(() => {
    const fetchData = async () => {
      try {
          const result: any = await new PokeAPI().GetPokemonDetails(CurPoke.id);
          const pokemon: PokemonStateType = {
            id: CurPoke.id,
            name: result.name,
            height: result.height,
            weight: result.weight,
            abilities: result.abilities.map((ability:any) => ability.ability.name),
            types: result.types.map((type: any) => type.type.name),
            hp: result.stats[0].base_stat,
            attack: result.stats[1].base_stat,
            defense: result.stats[2].base_stat,
            special_attack: result.stats[3].base_stat,
            special_defense: result.stats[4].base_stat,
            speed: result.stats[5].base_stat,
          }
          console.log('result pokemon dets', result)
          setPokeDetails(pokemon);
          console.log('p poke: ', pokemon)
      } catch (error) {
          console.error('Error:', error);
      }
    };

    fetchData();
}, [CurPoke.id, CurPoke.pokeName]);

  return (
    <div>
      {/* <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${CurPoke.id}.png`}/> */}
      <h5>{`fdsfsd ${pokeDetails.name}`}</h5>
      <h5>{`fdsfsd ${pokeDetails.id}`}</h5>
      <h5>{`fdsfsd ${pokeDetails.height}`}</h5>
    </div>
  );
}

export default PokemonDetails