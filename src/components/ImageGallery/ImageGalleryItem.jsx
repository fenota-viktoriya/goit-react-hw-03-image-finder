import PropTypes from 'prop-types';
import { Image, Item } from './ImageGallery.styled';

export function ImageGalleryItem({ img, tags, id, largeImg, toggleModal }) {
  return (
    <Item key={`${id}`} onClick={() => toggleModal(largeImg, tags)}>
      <Image src={`${img}`} alt={`${tags}`} />
    </Item>
  );
}

ImageGalleryItem.propTypes = {
  img: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  largeImg: PropTypes.string.isRequired,
  toggleModal: PropTypes.func.isRequired,
};
