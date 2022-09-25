import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditTrackForm from './EditTrackForm';

function EditTrackModal({track}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => {setShowModal(true);console.log(showModal)}} className='trackEdit'><i className="fa-solid fa-pen-to-square space" />Edit</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)} form={'editTrackForm'}>
          <EditTrackForm track={track} showModal={showModal} setShowModal={setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default EditTrackModal;