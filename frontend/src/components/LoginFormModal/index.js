import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';

function LoginFormModal({name, css}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)} className={css}>{name}</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)} form={'modal-content'}>
          <LoginForm />
        </Modal>
      )}
    </>
  );
}

export default LoginFormModal;