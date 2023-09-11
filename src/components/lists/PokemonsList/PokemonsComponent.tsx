import React, { useEffect, useState } from 'react'
import './Pokemons.scss'
import { PokemonCardComponent } from '../../card/PokemonCardComponent'
import { PokemonType, PokemonsResAPI } from '../../../APIs/PokeTypes';
import PokeAPI from '../../../APIs/PokeAPI';

export function PokemonsCompnent() {
    const [data, setData] = useState<PokemonType[]>([]);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const result: PokemonsResAPI = await new PokeAPI().GetPokemons();
            console.log('result', result)
            setData(result.results);
        } catch (error) {
            console.error('Error:', error);
        }
        };

        fetchData();
    }, []);

    console.log('data', data);
    return (
        <div className='Pokemons'>
            {data.map((poke, index) => 
            
                <PokemonCardComponent 
                    key={index}
                    id={index+1}
                    pokeName={poke.name}
                    imgUrl={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`}
                />
            )}
        </div>
    )
}