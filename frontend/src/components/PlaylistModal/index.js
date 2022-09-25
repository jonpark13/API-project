import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import PlaylistOptions from './PlaylistOptions';
import './PlaylistOptions.css'

function PlaylistModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Add to Playlist</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)} form={'modal-content'}>
          <PlaylistOptions />
        </Modal>
      )}
    </>
  );
}

export default PlaylistModal;