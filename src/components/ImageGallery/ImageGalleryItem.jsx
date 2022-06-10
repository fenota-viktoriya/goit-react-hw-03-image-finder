import { Image, Item } from './ImageGallery.styled';

export function ImageGalleryItem({ img, tag, id, largeImg, toggleModal }) {
  return (
    <Item key={`${id}`} onClick={() => toggleModal(largeImg)}>
      <Image src={`${img}`} alt={`${tag}`} />
    </Item>
  );
}
