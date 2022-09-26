import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import PlaylistOptions from './PlaylistOptions';
import './PlaylistOptions.css'

function PlaylistModal({song}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)} className='dropListText'>Add to Playlist</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)} form={'editTrackForm'}>
          <PlaylistOptions song={song}/>
        </Modal>
      )}
    </>
  );
}

export default PlaylistModal;