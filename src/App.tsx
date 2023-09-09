import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { PokemonsCompnent } from './components/lists/PokemonsList/PokemonsComponent';
import PokemonDetails from './components/layouts/PokemonDetails/PokemonDetails';
import Modal from './components/layouts/modal/Modal';

function App() {

  return (
    <div>
      <PokemonsCompnent/>
    </div>
  );
}

export default App;
