import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import DeleteTrackForm from './DeleteTrackForm'

function DeleteTrackModal({track}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => {setShowModal(true);console.log(showModal)}} className='trackDelete'><i className="fa-solid fa-trash" />Delete</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)} form={'modal-content'}>
          <DeleteTrackForm track={track} showModal={showModal} setShowModal={setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default DeleteTrackModal;