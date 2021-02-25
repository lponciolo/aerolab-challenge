import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Spinner,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
const ConfirmationModal: React.FunctionComponent<{ isOpen: any; onClose: any; actionFunction: any }> = props => {
  const [loading, setLoading] = useState(false);
  const [thankYouMessage, setThankYouMessage] = useState(false);
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{thankYouMessage ? 'Thank You!' : 'Confirm Purchase'}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{thankYouMessage ? '' : 'Please confirm your Purchase'}</ModalBody>
        {!thankYouMessage && (
          <ModalFooter>
            <Button
              colorScheme='blue'
              mr={3}
              onClick={async () => {
                setLoading(true);
                await props.actionFunction();
                setThankYouMessage(true);
                setLoading(false);
                setTimeout(() => {
                  props.onClose();
                }, 1000);
              }}
            >
              {loading ? <Spinner /> : 'Confirm'}
            </Button>
            <Button variant='ghost' onClick={props.onClose}>
              Cancel
            </Button>
          </ModalFooter>
        )}
      </ModalContent>
    </Modal>
  );
};

ConfirmationModal.propTypes = {
  isOpen: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  actionFunction: PropTypes.func.isRequired,
};

export default ConfirmationModal;
