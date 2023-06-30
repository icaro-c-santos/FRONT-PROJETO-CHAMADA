import React from 'react';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const ModalTitle = styled.h2`
  margin-top: 0;
`;

const ModalMessage = styled.p`
  margin-bottom: 20px;
`;

const ModalButton = styled.button`
  padding: 8px 16px;
  background-color: #2196f3;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const ErrorModal = ({ errorMessage, onClose }: { errorMessage: String, onClose: () => void }) => {


    return (
        <ModalOverlay>
      <ModalContent>
        <ModalTitle>Error</ModalTitle>
        <ModalMessage>{errorMessage}</ModalMessage>
        <ModalButton onClick={onClose}>Close</ModalButton>
      </ModalContent>
    </ModalOverlay>
    );
};

export default ErrorModal;