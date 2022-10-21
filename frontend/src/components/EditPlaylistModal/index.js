import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditPlaylistForm from './EditPlaylistForm';

function EditPlaylistModal({playlist}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => {setShowModal(true);console.log(showModal)}} className='trackEdit'><i className="fa-solid fa-pen-to-square space" />Edit</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)} form={'editPlaylistForm'}>
          <EditPlaylistForm playlist={playlist} showModal={showModal} setShowModal={setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default EditPlaylistModal;