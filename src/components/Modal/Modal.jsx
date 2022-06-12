import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Overlay, Modal } from './Modal.styled';

export class Modals extends PureComponent {
  componentDidMount() {
    const { closeModal } = this.props;
    window.addEventListener('keydown', closeModal);
    document.body.style.overflow = 'hidden';
  }
  componentWillUnmount() {
    const { closeModal } = this.props;
    window.removeEventListener('keydown', closeModal);
    document.body.style.overflow = ' visible';
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

Modals.propTypes = {
  closeModal: PropTypes.func.isRequired,
};
