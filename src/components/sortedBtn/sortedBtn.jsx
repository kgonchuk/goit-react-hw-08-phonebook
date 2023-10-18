import { useDispatch } from 'react-redux';
import { sortByName, sortByAdded } from '../../redux/contact/contactSlice';

import css from './sortedBtn.module.css';

  import { TbAB2, Tb24Hours } from "react-icons/tb";
const SortedBtns = () => {
  const dispatch = useDispatch();
    // const { sortedAlphabetic } = UseContact();
    // const { recentlyAdded } = UseContact();

  return (
    <div>
      <button className={css.sortBtn} onClick={() => dispatch(sortByName())}>
        Sorted by   <TbAB2 />
        
        {/* {sortedAlphabetic ? (
          <TbSortDescendingLetters size="20" />
        ) : (
          <TbSortAscendingLetters size="20" />
        )} */}
      </button>
      <button className={css.sortBtn} onClick={() => dispatch(sortByAdded())}>
        Sorted by <Tb24Hours/>
      </button>
    </div>
  );
};
export default SortedBtns;
