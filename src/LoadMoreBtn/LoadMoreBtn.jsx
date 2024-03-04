import css from '../LoadMoreBtn/LoadMoreBtn.module.css';

export default function LoadMoreBtn({ onLoadMore }) {
  return (
    <button className={css.btn} onClick={onLoadMore}>
      Load more
    </button>
  );
}
