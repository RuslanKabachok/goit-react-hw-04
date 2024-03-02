import css from '../SearchBar/SearchBar.module.css';

export default function SearchBar({ onSubmit }) {
  return (
    <header className={css.container}>
      <form className={css.container} onSubmit={onSubmit}>
        <input
          className={css.input}
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={css.btn} type="submit">
          Search
        </button>
      </form>
    </header>
  );
}
