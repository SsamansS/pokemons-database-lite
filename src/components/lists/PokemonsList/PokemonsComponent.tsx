import React from 'react'
import './Pokemons.scss'
import { PokemonCardComponent } from '../../card/PokemonCardComponent'

export function PokemonsCompnent() {
    return (
        <div className='Pokemons'>
            <PokemonCardComponent 
                pokeName='dfs'
                imgUrl='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
                />
            <PokemonCardComponent 
                pokeName='dfstrgtr'
                imgUrl='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'
                />
            <PokemonCardComponent 
                pokeName='dfsrtgrtgrt'
                imgUrl='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png'
                />
            <PokemonCardComponent 
                pokeName='dfsewfrew'
                imgUrl='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png'
                />
            <PokemonCardComponent 
                pokeName='dfres'
                imgUrl='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png'
                />
            <PokemonCardComponent 
                pokeName='dfs'
                imgUrl='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png'
                />
            <PokemonCardComponent 
                pokeName='dfstrgtr'
                imgUrl='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png'
                />
            <PokemonCardComponent 
                pokeName='dfsrtgrtgrt'
                imgUrl='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png'
                />
            <PokemonCardComponent 
                pokeName='dfsewfrew'
                imgUrl='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png'
                />
            <PokemonCardComponent 
                pokeName='dfres'
                imgUrl='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png'
                />
        </div>
    )
}