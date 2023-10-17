import { useSelector } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectIsLoader,
  selectSortedAlphabetic,
  selectRecentlyAdded,
  selectVisibleContacts

} from '../redux/contact/selector';

export const UseContact = () => {
  const contacts = useSelector(selectContacts);
  const error = useSelector(selectError);
  const isLoader = useSelector(selectIsLoader);
  const sortedAlphabetic = useSelector(selectSortedAlphabetic);
  const recentlyAdded = useSelector(selectRecentlyAdded);
  const visibleContacts = useSelector(selectVisibleContacts);

  return { contacts, error, isLoader, sortedAlphabetic, recentlyAdded,visibleContacts };
};
