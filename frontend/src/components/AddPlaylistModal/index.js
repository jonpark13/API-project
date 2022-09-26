import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import AddPlaylistOptions from './AddPlaylistOptions';

function AddPlaylistModal({song}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)} className='dropListText'><i className="fa-regular fa-square-plus listIcon"></i>Create Playlist</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)} form={'playlist-content'}>
          <AddPlaylistOptions song={song}/>
        </Modal>
      )}
    </>
  );
}

export default AddPlaylistModal;