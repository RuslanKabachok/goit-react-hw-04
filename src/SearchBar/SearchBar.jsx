import css from '../SearchBar/SearchBar.module.css';
import toast, { Toaster } from 'react-hot-toast';
import { FaSearch } from 'react-icons/fa';

export default function SearchBar({ onSearch }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const query = e.target.elements.query.value;
    if (query === '') {
      toast.error('Please enter a search query');
      return;
    } else {
      e.target.reset();
      onSearch(query);
    }
  };

  return (
    <header className={css.container}>
      <form className={css.container} onSubmit={handleSubmit}>
        <input
          className={css.input}
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={css.btn} type="submit">
          <FaSearch />
        </button>
      </form>
      <Toaster />
    </header>
  );
}
