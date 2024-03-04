import css from '../ImageGallery/ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';

export default function ImageGallery({ data, onImgClick }) {
  return (
    <ul className={css.gallery}>
      {data.map((photo) => (
        <li key={photo.id} className={css.photo}>
          <ImageCard
            img={photo}
            onClick={() => {
              onImgClick(photo);
            }}
          />
        </li>
      ))}
    </ul>
  );
}
