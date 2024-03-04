import { useEffect, useState } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import ImageModal from '../ImageModal/ImageModal';

function App() {
  const accessKey = 'FmC2Y2hXuueYWtC_fdTEV1Bm9QvH76Y0dkUB6CuzBog';

  const [searchQuery, setSearchQuery] = useState('');
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (searchQuery === '') {
      return;
    }

    async function fetchPhotos() {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://api.unsplash.com/search/photos/?query=${searchQuery}&client_id=${accessKey}&per_page=12&page=${page}`
        );
        setPhotos((prevPhotos) => {
          return [...prevPhotos, ...response.data.results];
        });
        console.log(response.data.results);
      } catch (error) {
        toast.error('Whoops, something went wrong!');
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchPhotos();
  }, [searchQuery, page]);

  const handleSearch = (newQuery) => {
    setSearchQuery(newQuery);
    setPage(1);
    setPhotos([]);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage(null);
  };

  const openModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {error && <ErrorMessage />}
      {!loading && !error && (
        <ImageGallery data={photos} onImgClick={openModal} />
      )}
      {loading && <Loader />}
      {photos.length > 0 && !error && (
        <LoadMoreBtn onLoadMore={handleLoadMore} />
      )}
      {selectedImage && (
        <ImageModal
          isOpen={modalIsOpen}
          image={selectedImage}
          onClose={closeModal}
        />
      )}
      <Toaster />
    </>
  );
}

export default App;
