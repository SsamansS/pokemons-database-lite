import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, openModal, closeModal } from './counterSlice'
// import styles from './Counter.module.css'

export function Counter() {
  const count = useSelector((state) => state.counter.value)
  const isOpenModal = useSelector((state) => state.counter.isOpenModal)
  const dispatch = useDispatch()

  console.log('open: ', isOpenModal)
  console.log('count: ', count)

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => {
                dispatch(increment())
                dispatch(openModal())
            }}
        >
          Increment
        </button>
        <span>{count} {isOpenModal}</span>
        <span>{`${isOpenModal}`}</span>
        <button
          aria-label="Decrement value"
          onClick={() => {
                dispatch(decrement())
                dispatch(closeModal())
            }}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}