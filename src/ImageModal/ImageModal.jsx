import Modal from 'react-modal';
import css from '../ImageModal/ImageModal.module.css';

export default function ImageModal({ isOpen, image, onClose }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Example Modal"
      className={css.content}
      overlayClassName={css.overlay}
    >
      <div>
        {image && (
          <img
            src={image.urls.regular}
            alt={image.alt_description}
            className={css.modalImage}
          />
        )}
      </div>
    </Modal>
  );
}
