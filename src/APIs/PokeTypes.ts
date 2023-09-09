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