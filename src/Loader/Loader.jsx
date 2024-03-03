import { Oval } from 'react-loader-spinner';
import css from '../Loader/Loader.module.css';

export default function Loader() {
  return (
    <div className={css.loader}>
      <Oval
        visible={true}
        height="80"
        width="80"
        color="rgb(98, 17, 192)"
        secondaryColor="rgb(209, 169, 255)"
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}
