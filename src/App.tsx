import './App.css';
import { PokemonsCompnent } from './components/lists/PokemonsList/PokemonsComponent';
import Modal from './components/layouts/modal/Modal';
import { useSelector } from 'react-redux';
import PokemonDetails from './components/layouts/PokemonDetails/PokemonDetails';

function App() {
  const isOpenModal = useSelector((state: any) => state.counter.isOpenModal)

  return (
    <div>
      <PokemonsCompnent/>
      <Modal isOpen={isOpenModal}>
        <PokemonDetails/>
      </Modal>
    </div>
  );
}

export default App;
