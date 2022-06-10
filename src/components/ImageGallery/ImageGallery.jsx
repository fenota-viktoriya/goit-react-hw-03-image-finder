import { ImageGalleryItem } from './ImageGalleryItem';
import { List } from './ImageGallery.styled';

export function ImageGallery({ data, toggleModal }) {
  console.log(data);
  return (
    <List>
      {data.map(({ id, webformatURL, largeImageURL, tags }) => {
        return (
          <ImageGalleryItem
            toggleModal={toggleModal}
            img={webformatURL}
            largeImg={largeImageURL}
            tag={tags}
            id={id}
            key={`${id}`}
          />
        );
      })}
    </List>
  );
}
