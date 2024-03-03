import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

function App() {
  const accessKey = 'FmC2Y2hXuueYWtC_fdTEV1Bm9QvH76Y0dkUB6CuzBog';

  const [searchQuery, setSearchQuery] = useState('');
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = e.target.elements.query.value;
    if (query === '') {
      toast.error('Please enter a search query');
      return;
    } else {
      setSearchQuery(query);
      e.target.reset();
    }
  };

  useEffect(() => {
    if (searchQuery === '') {
      return;
    }

    async function fetchPhotos() {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://api.unsplash.com/photos/?query=${searchQuery}&client_id=${accessKey}&per_page=12`
        );
        setPhotos(response.data);
      } catch (error) {
        toast.error('Please enter a search query');
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchPhotos();
  }, [searchQuery]);

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {!loading && !error && <ImageGallery data={photos} />}
      {photos.length > 0 && <LoadMoreBtn />}
      <Toaster />
    </>
  );
}

export default App;
