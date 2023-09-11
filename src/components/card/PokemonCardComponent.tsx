import './PokemonCard.scss'
import { useDispatch } from "react-redux";
import {fillCurrentPoke, openModal} from './../../features/counter/counterSlice'

export type PokemonCardType = {
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