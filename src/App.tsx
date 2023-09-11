import React, { useEffect, useState } from 'react';
import './App.css';
import { PokemonsCompnent } from './components/lists/PokemonsList/PokemonsComponent';
import Modal from './components/layouts/modal/Modal';
import { useSelector } from 'react-redux';
import PokemonDetails from './components/layouts/PokemonDetails/PokemonDetails';

function App() {
  const isOpenModal = useSelector((state: any) => state.counter.isOpenModal)
  // const [currentPoke, setCurrentPoke] = useState(useSelector((state: any) => state.counter.currentPokemon))

  // useEffect(() => {
  //   setCurrentPoke(useSelector((state: any) => state.counter.currentPokemon))
  // }, [])

  return (
    <div>
      <PokemonsCompnent/>
      <Modal isOpen={isOpenModal} setOpen={() => console.log('dfs')}>
        {/* <h5>dsdsadsafsd</h5> */}
        {/* <span>{`${pokeDetails.h`}</span> */}
        <PokemonDetails/>
      </Modal>
    </div>
  );
}

export default App;
