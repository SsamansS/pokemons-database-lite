import React from 'react';
import './App.css';
import { PokemonsCompnent } from './components/lists/PokemonsList/PokemonsComponent';
import Modal from './components/layouts/modal/Modal';
import { useSelector } from 'react-redux';

function App() {
  const isOpenModal = useSelector((state) => state.counter.isOpenModal)

  return (
    <div>
      <PokemonsCompnent/>
      <Modal isOpen={isOpenModal} setOpen={() => console.log('dfs')}>
        <h5>dsfsd</h5>
      </Modal>
    </div>
  );
}

export default App;
