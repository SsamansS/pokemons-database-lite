import React from 'react';
import logo from './logo.svg';
import './App.css';
import {PokemonCardComponent} from './components/card/PokemonCardComponent'
import { PokemonsCompnent } from './components/lists/PokemonsList/PokemonsComponent';

function App() {
  return (
    <div>
      <PokemonsCompnent/>
    </div>
  );
}

export default App;
