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
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes.
      // Also, no return statement is required from these functions.
      state.value += 1
      state.isOpenModal = true
    },
    decrement: (state) => {
      state.value -= 1
      state.isOpenModal = false
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
      state.isOpenModal = false
    },
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
export const { increment, decrement, incrementByAmoun, openModal, closeModal, addPokemon, fillCurrentPoke } = counterSlice.actions

export default counterSlice.reducer