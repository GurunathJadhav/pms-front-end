import React from 'react'

const Modal = ({ message, closeModal }) => {
    return (
      <div className="modal-overlay">
        <div className="modal-content">
          <h2>Error</h2>
          <p>{message}</p>
          <button onClick={closeModal}>Close</button>
        </div>
      </div>
    );
  };

export default Modal
