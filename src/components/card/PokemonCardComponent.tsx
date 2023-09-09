import React, { useState } from "react";
import './PokemonCard.scss'
import PokemonDetails from "../layouts/PokemonDetails/PokemonDetails";
import Modal from "../layouts/modal/Modal";

type PokemonCardType = {
    imgUrl: string,
    pokeName: string
}

export function PokemonCardComponent(props: PokemonCardType) {

    return (
        <div 
            className="Card"
        >
            <img src={props.imgUrl}/>
            <div className="Card-Title">
                <p>{props.pokeName}</p>
            </div>
        </div>
    )
}