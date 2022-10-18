import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import CreateAccountForm from './CreateAccountForm';

function CreateAccountModal({name, css}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)} className={css}>{name}</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)} form={'modal-content'}>
          <CreateAccountForm />
        </Modal>
      )}
    </>
  );
}

export default CreateAccountModal;