import { ImageGalleryItem } from './ImageGalleryItem';
import { List } from './ImageGallery.styled';

export function ImageGallery({ data, toggleModal }) {
  return (
    <List>
      {data.map(({ id, webformatURL, largeImageURL, tags }) => {
        return (
          <ImageGalleryItem
            toggleModal={toggleModal}
            img={webformatURL}
            largeImg={largeImageURL}
            tags={tags}
            id={id}
            key={`${id}`}
          />
        );
      })}
    </List>
  );
}
