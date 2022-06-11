import { Image, Item } from './ImageGallery.styled';

export function ImageGalleryItem({ img, tags, id, largeImg, toggleModal }) {
  return (
    <Item key={`${id}`} onClick={() => toggleModal(largeImg, tags)}>
      <Image src={`${img}`} alt={`${tags}`} />
    </Item>
  );
}
