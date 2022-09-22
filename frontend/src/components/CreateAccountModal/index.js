import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import CreateAccountForm from './CreateAccountForm';

function CreateAccountModal({name}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)} className='createAccCond'>{name}</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateAccountForm />
        </Modal>
      )}
    </>
  );
}

export default CreateAccountModal;