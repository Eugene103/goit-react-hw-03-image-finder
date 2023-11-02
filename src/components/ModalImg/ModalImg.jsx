import Modal from 'react-modal';
import styled from 'styled-components';

const customStyles = {
  content: {
  position: 'fixed',
  top: '0',
  left: '0',
  width: '100vw',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
};

const ImagModal = styled.img`
max-width: calc(85vw - 48px);
max-height: calc(80vh - 24px);
`

Modal.setAppElement('#root');

export const ModalImg = ({state, onClose, imageUrl, tags}) => {
    return <Modal 
                 isOpen={state}
      onRequestClose={onClose}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
                    style={customStyles}
                    contentLabel="Example Modal"
            ><ImagModal src={imageUrl} alt={tags}></ImagModal></Modal>
}

