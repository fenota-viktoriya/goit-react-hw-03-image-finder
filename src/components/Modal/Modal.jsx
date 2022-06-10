import { Overlay, Modal } from './Modal.styled';
import { Component } from 'react';

export class Modals extends Component {
  render() {
    const { alt, img, closeModal } = this.props;

    return (
      <Overlay onClick={closeModal}>
        <Modal src={`${img}`} alt={`${alt}`} />
      </Overlay>
    );
  }
}
