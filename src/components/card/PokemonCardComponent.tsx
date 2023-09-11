import React, { useState } from "react";
import './PokemonCard.scss'
import PokemonDetails from "../layouts/PokemonDetails/PokemonDetails";
import Modal from "../layouts/modal/Modal";
import { useSelector, useDispatch } from "react-redux";
import {fillCurrentPoke, openModal} from './../../features/counter/counterSlice'

type PokemonCardType = {
    imgUrl: string,
    pokeName: string,
    id: number,
}

export function PokemonCardComponent(props: PokemonCardType) {
    const dispatch = useDispatch()

    return (
        <div 
            className="Card"
            onClick={() => {
                console.log('props.id, props.pokename: ', `${props.id}  ${props.pokeName}`)
                dispatch(fillCurrentPoke({
                    id: props.id,
                    name: props.pokeName
                }))
                dispatch(openModal())
            }}
        >
            <img src={props.imgUrl}/>
            <div className="Card-Title">
                <p>{props.pokeName}</p>
            </div>
        </div>
    )
}