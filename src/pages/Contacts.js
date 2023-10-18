import ContactList from '../../src/components/ContactList/ContactList';
import Form from '../../src/components/Form/Form';
import Filter from '../../src/components/Filter/Filter';
import { fetchContacts } from '../redux/operations';
import { selectError, selectIsLoader } from '../redux/contact/selector';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import css from './Contacts.module.css';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoader);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div
      className={css.section}
    >
      <Form />
      <title>Contacts</title>
      {isLoading && !error && <b>Loading...</b>}
      <ContactList />
      <Filter />

    </div>
  );
}
