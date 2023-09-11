import React from 'react'

export type PokemonType = {
    name: string,
    url: string
}

export type PokemonsResAPI = {
    count: number,
    next: string,
    pervious: string | null,
    results: PokemonType[]
}

export type PokemonStateType = {
    id: number,
    name: string,
    height: number,
    weight: number,
    abilities: string[],
    types: string[],
    hp: number,
    attack: number,
    defense: number,
    special_attack: number,
    special_defense: number,
    speed: number,
    imgUrl: string
}