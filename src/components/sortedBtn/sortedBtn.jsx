import { useDispatch } from 'react-redux';
import { sortByName, sortByAdded } from '../../redux/contact/contactSlice';

import css from './sortedBtn.module.css';


const SortedBtns = () => {
  const dispatch = useDispatch();
    // const { sortedAlphabetic } = UseContact();
    // const { recentlyAdded } = UseContact();

  return (
    <div>
      <button className={css.sortBtn} onClick={() => dispatch(sortByName())}>
        Sorted by name
        {/* {sortedAlphabetic ? (
          <TbSortDescendingLetters size="20" />
        ) : (
          <TbSortAscendingLetters size="20" />
        )} */}
      </button>
      <button className={css.sortBtn} onClick={() => dispatch(sortByAdded())}>
        Sorted by date
      </button>
    </div>
  );
};
export default SortedBtns;
