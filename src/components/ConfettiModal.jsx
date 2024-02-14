// ConfettiModal.js
import React, { useEffect } from 'react';
import styled from 'styled-components';
import Confetti from 'react-confetti';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
`;

const ConfettiModal = ({ onClose, response }) => {
  useEffect(() => {
    // Close the modal after a delay (adjust as needed)
    const modalTimeout = setTimeout(() => {
      onClose();
    }, 5000);

    // Clear the timeout on component unmount
    return () => clearTimeout(modalTimeout);
  }, [onClose]);

  return (
    <ModalOverlay>
      <Confetti width={window.innerWidth} height={window.innerHeight} />
      <ModalContent>
        <h2>{response === 'yes' ? 'YAAAAAAAAAAAAY!!' : 'Maybe next time!'}</h2>
        <p>{response === 'yes' ? 'I Have A Val to Call Mine! 🎉' : 'Thank you for being honest.'}</p>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ConfettiModal;
