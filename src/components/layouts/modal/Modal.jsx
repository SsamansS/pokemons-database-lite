import React from 'react';
import "./Modal.scss"
import {  useDispatch } from 'react-redux';
import {  closeModal } from '../../../features/counter/counterSlice';

function Modal({ isOpen, setOpen, children }) {
  const dispatch = useDispatch()
  if (!isOpen) return null;

  return (
    <div className={isOpen ? 'modal-overlay modal-enter-active' : 'modal-overlay'} onClick={() => {
      dispatch(closeModal())
      setOpen()
      console.log('isOpen: ', isOpen)
      console.log('div out')
      }}>
      <div className={isOpen ? 'modal modal-enter-active' : 'modal'}>
        {children}
      </div>
    </div>
  );
}

export default Modal;