/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
// import "./PokemonDetails.scss"
import { PokemonStateType } from "../../../APIs/PokeTypes";
import PokeAPI from "../../../APIs/PokeAPI";
import { useSelector } from "react-redux";
import './PokemonDetails.scss'

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
            name: CurPoke.name,
            imgUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${CurPoke.id}.png`,
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
}, [CurPoke]);

  return (
    <div>
      <h2>{pokeDetails.name}</h2>
      <div className="wrapper">
        <div>
          <img src={pokeDetails.imgUrl}/>

          <div className="wrapper-skills">
            <p><b>Abilities: </b></p>
            {pokeDetails.abilities ? pokeDetails.abilities.map(ability => <p>{ability}</p>) : <></>}
          </div>
          <div className="wrapper-skills">
            <p><b>Types: </b></p>
            {pokeDetails.types ? pokeDetails.types.map(type => <p>{type}</p>) : <></>}
          </div>
        </div>
        <div className="stat-wrraper">
          <p>hp: {pokeDetails.hp}</p>
          <p>attack: {pokeDetails.attack}</p>
          <p>defense: {pokeDetails.defense}</p>
          <p>speed: {pokeDetails.speed}</p>
          <p>height: {pokeDetails.height}</p>
          <p>weight: {pokeDetails.weight}</p>
          <p>special-attack: {pokeDetails.special_attack}</p>
          <p>special-defense: {pokeDetails.special_defense}</p>
        </div>
      </div>
      
    </div>
  );
}

export default PokemonDetails