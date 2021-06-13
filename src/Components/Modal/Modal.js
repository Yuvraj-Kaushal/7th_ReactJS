import React, { useState } from "react";
import "./Modal.css";

export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Open
      </button>

      {modal && ( // Short-Circuit Operator
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Yuvraj's Hobbies</h2>
            <p>
            1. Playing Games.
            < br/>
            2. Learning New Prog Lang.
            < br/>
            3. Reading Books.
            < br/>
            4. Listening Music.
            < br/>
            5. Editing Videos.
            </p>
            <button className="close-modal" onClick={toggleModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
