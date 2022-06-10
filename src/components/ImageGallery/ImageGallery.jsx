import { ImageGalleryItem } from './ImageGalleryItem';
import { List } from './ImageGallery.styled';

export function ImageGallery({ data }) {
  console.log(data);
  return (
    <List>
      {data.map(({ id, webformatURL, tags }) => {
        return (
          <ImageGalleryItem
            img={webformatURL}
            tag={tags}
            id={id}
            key={`${id}`}
          />
        );
      })}
    </List>
  );
}
