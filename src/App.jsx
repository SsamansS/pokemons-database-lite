import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { PokemonsCompnent } from './components/lists/PokemonsList/PokemonsComponent';
import PokemonDetails from './components/layouts/PokemonDetails/PokemonDetails';
import Modal from './components/layouts/modal/Modal';
import { Counter } from './features/counter/Counter';
import { useSelector, useDispatch } from 'react-redux';
import { openModal, closeModal } from './features/counter/counterSlice';

function App() {
  const isOpenModal = useSelector((state) => state.counter.isOpenModal)
  // const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <Counter/>
      {/* <span>{`${isOpenModal}`}</span> */}
      <PokemonsCompnent/>
      <Modal isOpen={isOpenModal} setOpen={() => console.log('dfs')}>
        <h5>dsfsd</h5>
      </Modal>
      {/* <button onClick={() => setIsOpen(true)}>classic open</button>
      <Modal isOpen={isOpen} setOpen={() => setIsOpen(false)}>
        <h5>dsfsd</h5>
      </Modal> */}
    </div>
  );
}

export default App;
