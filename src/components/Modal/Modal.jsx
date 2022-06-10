import { Overlay, Modal } from './Modal.styled';
import { Component } from 'react';
//import { createPortal } from 'react-dom';
//const modalRoot = document.querySelector('#modal-root');
const body = document.querySelector('body');

export class Modals extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.props.closeModal);
    body.classList.add('scroll');
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.props.closeModal);
    body.classList.remove('scroll');
  }
  render() {
    const { alt, img, closeModal } = this.props;

    return (
      <Overlay onClick={closeModal}>
        <Modal src={`${img}`} alt={`${alt}`} />
      </Overlay>
    );
  }
}
