import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import DeletePlaylistForm from './DeletePlaylistForm'

function DeleteTrackModal({playlist}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => {setShowModal(true);console.log(showModal)}} className='trackDelete'><i className="fa-solid fa-trash" />Delete</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)} form={'delete-content'}>
          <DeletePlaylistForm playlist={playlist} showModal={showModal} setShowModal={setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default DeleteTrackModal;