import { Image, Item } from './ImageGallery.styled';

export function ImageGalleryItem({ img, tag, id }) {
  return (
    <Item key={`${id}`}>
      <Image src={`${img}`} alt={`${tag}`} />
    </Item>
  );
}
