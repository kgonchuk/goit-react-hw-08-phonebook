import React from 'react';
import PropTypes from 'prop-types';
import { Confirm } from 'notiflix/build/notiflix-confirm-aio';
import css from './ContactList.module.css';
import { useDispatch} from 'react-redux';
import { deleteContact } from '../../redux/operations';
import SortedBtns from '../../components/sortedBtn/sortedBtn';
import { UseContact } from 'hooks/useContact';
import ModalUpdate from 'components/ModalWindow/ModalWindow';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const ContactList = () => {
  const dispatch=useDispatch()
  const { visibleContacts } = UseContact();

  const handleDelete = id => {
    Confirm.show(
      'Notiflix Confirm',
      'Do you delete this contact?',
      'Yes',
      'No',
      () => {
        dispatch(deleteContact(id));
      }
    );
  };
  return (
    <div className={css.contactContainer}>
      {' '}
      <h2 className={css.contactsTitle}>Contacts</h2>
      <SortedBtns />
      <ul className={css.contactList}>
        {visibleContacts.map(({ id, name, number }) => (
          <li key={id} className={css.contactItem}>
            {name}: {number}
            <ModalUpdate contactId={id} />
            <div> 
            
            <IconButton aria-label="delete">
            <DeleteIcon onClick={() => handleDelete(id)}/>
          </IconButton>
            </div>
        

          </li>
        ))}
        {visibleContacts.length === 0 && (
          <p>The Phonebook is empty. Add your first contact. 🫤 </p>
        )}
      </ul>
    </div>
  );
};
export default ContactList;
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
