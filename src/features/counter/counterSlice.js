import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    isOpenModal: false,
    pokemons: [],
    currentPokemon: {
      id: 0,
      name: ""
    }
  },
  reducers: {
    openModal: (state) => {
       state.isOpenModal = true
       console.log('opened')
    },
    closeModal: (state) => {
       state.isOpenModal = false
       console.log('closed')
    },
    addPokemon: (state, action) => {
      state.pokemons.push(action.payload)
    },
    fillCurrentPoke: (state, action) => {
      console.log('payload', action.payload)
      state.currentPokemon = action.payload
      console.log('state.currentPokemon: ', state.currentPokemon)
    }
  },
})

// Action creators are generated for each case reducer function
export const { 
  increment, 
  decrement, 
  incrementByAmoun, 
  openModal, 
  closeModal, 
  addPokemon, 
  fillCurrentPoke, 
} = counterSlice.actions

export default counterSlice.reducer