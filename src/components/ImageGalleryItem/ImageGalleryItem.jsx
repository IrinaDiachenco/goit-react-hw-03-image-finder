import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';


function ImageGalleryItem({
  webformatURL,
  largeImageURL,
  tags,
  index,
  imageClickHandler,
}) {
  return (
    <li key={index}
      className={s.item} 
      onClick={() => {
        imageClickHandler(largeImageURL, tags);
      }}
    >
     <img className={s.image}  src={webformatURL} alt={tags}/>
    </li>
  );
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  imageClickHandler: PropTypes.func.isRequired,
};

export default ImageGalleryItem;