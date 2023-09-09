import React from "react";
import "./PokemonDetails.scss"

const PokemonDetails = (props: {isOpen: boolean, onClose: () => void, children: JSX.Element}) => {
    if (!props.isOpen) return null;

  return (
    <div className={props.isOpen ? "modal active" : "modal"} onClick={props.onClose}>
      <div className={props.isOpen ? "mobal_content active" : "modal_content"} onClick={e => e.stopPropagation()}>
        {props.children}
      </div>
    </div>
  );
}

export default PokemonDetails