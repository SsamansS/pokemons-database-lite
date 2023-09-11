import React, { useEffect, useState } from 'react'
import './Pokemons.scss'
import { PokemonCardType } from '../../card/PokemonCardComponent'
import { PokemonType, PokemonsResAPI } from '../../../APIs/PokeTypes';
import PokeAPI from '../../../APIs/PokeAPI';
import Search from '../../searchComponent/Search';

export function PokemonsCompnent() {
    const [data, setData] = useState<PokemonType[]>([]);
    const [filteredPokemons, setFilteredPokemons] = useState<PokemonCardType[]>([])
    

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result: PokemonsResAPI = await new PokeAPI().GetPokemons();
                setData(result.results);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData()

        setFilteredPokemons(data.map((poke, index) => {
            return {
                id: index+1,
                pokeName: poke.name,
                imgUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`//poke.url
            }
        }))
        
    }, [data]);

    return (
        <div className="tc bg-white ma0 pa4 min-vh-100">
            <Search details={filteredPokemons}/>
        </div>
    )
}