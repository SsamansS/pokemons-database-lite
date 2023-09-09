import React, { useState } from "react";
import './PokemonCard.scss'
import PokemonDetails from "../layouts/PokemonDetails/PokemonDetails";
import Modal from "../layouts/modal/Modal";
import { useSelector, useDispatch } from "react-redux";
import {openModal} from '../../features/counter/counterSlice'

type PokemonCardType = {
    imgUrl: string,
    pokeName: string
}

export function PokemonCardComponent(props: PokemonCardType) {
    const isOpenModel = useSelector((state: any) => state.counter.isOpenModel)
    const dispatch = useDispatch()

    return (
        <div 
            className="Card"
            onClick={() => dispatch(openModal())}
        >
            <img src={props.imgUrl}/>
            <div className="Card-Title">
                <p>{props.pokeName}</p>
            </div>
        </div>
    )
}