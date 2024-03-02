import { useEffect, useState } from 'react';
import axios from 'axios';
import SearchBar from '../SearchBar/SearchBar';

function App() {
  const accessKey = 'FmC2Y2hXuueYWtC_fdTEV1Bm9QvH76Y0dkUB6CuzBog';

  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = e.target.elements.query.value;
    setSearchQuery(query);
    e.target.reset();
  };

  useEffect(() => {
    if (searchQuery === '') {
      return;
    }

    async function fetchPhotos() {
      const response = await axios.get(
        `https://api.unsplash.com/photos/?query=${searchQuery}&client_id=${accessKey}&per_page=12`
      );
      console.log(response.data);
    }
    fetchPhotos();
  }, [searchQuery]);

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      {/* {searchQuery === '' && toast.error('Enter smth')} */}
    </>
  );
}

export default App;
