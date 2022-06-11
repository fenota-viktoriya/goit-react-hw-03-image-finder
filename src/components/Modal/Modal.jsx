import { Overlay, Modal } from './Modal.styled';
import { PureComponent } from 'react';
const body = document.querySelector('body');

export class Modals extends PureComponent {
  componentDidMount() {
    window.addEventListener('keydown', this.props.closeModal);
    body.classList.add('scroll');
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.props.closeModal);
    body.classList.remove('scroll');
  }
  render() {
    const { tags, img, closeModal } = this.props;

    return (
      <Overlay onClick={closeModal}>
        <Modal src={`${img}`} alt={`${tags}`} />
      </Overlay>
    );
  }
}
