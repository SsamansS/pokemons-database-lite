import React from 'react';
import "./Modal.scss"

function Modal({ isOpen, setOpen, children }) {
  if (!isOpen) return null;

  return (
    <div className={isOpen ? 'modal-overlay modal-enter-active' : 'modal-overlay'} onClick={() => {
      setOpen(false)
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